import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

interface ChangelogEntry {
    version: string;
    date: string;
    newIcons: string[];
    highlights: string[];
}

interface Changelog {
    generated: string;
    totalIcons: number;
    entries: ChangelogEntry[];
}

function execGit(command: string): string {
    try {
        return execSync(command, { cwd: rootDir, encoding: 'utf-8' }).trim();
    } catch {
        return '';
    }
}

interface VersionCommit {
    hash: string;
    version: string;
    date: string;
}

function getVersionCommits(): VersionCommit[] {
    // Find commits with version patterns like "new:v1.6.7" or "new: v1.6.6" or just "v1.0.0"
    const output = execGit('git log --all --format="%H|%s|%ad" --date=short');
    if (!output) return [];

    const versionPattern = /(?:new:\s*)?v?(\d+\.\d+\.?\d*)/i;
    const versions: VersionCommit[] = [];
    const seenVersions = new Set<string>();

    for (const line of output.split('\n')) {
        if (!line) continue;
        const [hash, subject, date] = line.split('|');

        // Check if this is a version commit
        if (subject.match(/^(?:new:?\s*)?v?\d+\.\d+/i)) {
            const match = subject.match(versionPattern);
            if (match) {
                let version = match[1];
                // Normalize version (add .0 if needed)
                if (version.split('.').length === 2) {
                    version += '.0';
                }

                // Only take the first (most recent) commit for each version
                if (!seenVersions.has(version)) {
                    seenVersions.add(version);
                    versions.push({ hash, version, date });
                }
            }
        }
    }

    // Sort by version number descending
    versions.sort((a, b) => {
        const aParts = a.version.split('.').map(Number);
        const bParts = b.version.split('.').map(Number);
        for (let i = 0; i < 3; i++) {
            if ((bParts[i] || 0) !== (aParts[i] || 0)) {
                return (bParts[i] || 0) - (aParts[i] || 0);
            }
        }
        return 0;
    });

    return versions;
}

function getNewIconsBetweenCommits(fromHash: string, toHash: string): string[] {
    // Get icons added between two commits
    const command = fromHash
        ? `git diff --name-status --diff-filter=A ${fromHash}..${toHash} -- "Icons/Line/*.svg"`
        : `git diff --name-status --diff-filter=A $(git rev-list --max-parents=0 HEAD)..${toHash} -- "Icons/Line/*.svg"`;

    const output = execGit(command);
    if (!output) return [];

    return output
        .split('\n')
        .filter(Boolean)
        .map((line) => {
            // Extract icon name from path like "A\tIcons/Line/si_IconName.svg"
            const match = line.match(/si_([^.]+)\.svg$/);
            return match ? match[1] : null;
        })
        .filter((name): name is string => name !== null)
        .sort();
}

function countTotalIcons(): number {
    const iconsDir = path.join(rootDir, 'Icons', 'Line');
    try {
        const files = fs.readdirSync(iconsDir);
        return files.filter((f) => f.endsWith('.svg')).length;
    } catch {
        return 0;
    }
}

function generateChangelog(): Changelog {
    const versionCommits = getVersionCommits();
    const entries: ChangelogEntry[] = [];

    // Limit to 20 most recent versions
    const maxVersions = 20;
    const versionsToProcess = versionCommits.slice(0, maxVersions);

    console.log(`Found ${versionCommits.length} version commits, processing ${versionsToProcess.length}`);

    for (let i = 0; i < versionsToProcess.length; i++) {
        const current = versionsToProcess[i];
        const previous = versionsToProcess[i + 1];

        const newIcons = getNewIconsBetweenCommits(
            previous?.hash || '',
            current.hash
        );

        console.log(`${current.version}: ${newIcons.length} new icons`);

        // Only add entries with new icons or if it's a major version
        if (newIcons.length > 0 || current.version.endsWith('.0')) {
            entries.push({
                version: current.version,
                date: current.date,
                newIcons,
                highlights: [],
            });
        }
    }

    return {
        generated: new Date().toISOString(),
        totalIcons: countTotalIcons(),
        entries,
    };
}

// Generate and save changelog
const changelog = generateChangelog();
const outputPath = path.join(rootDir, 'src', 'changelog.json');

fs.writeFileSync(outputPath, JSON.stringify(changelog, null, 2));
console.log(`\nChangelog generated successfully!`);
console.log(`Output: ${outputPath}`);
console.log(`Total versions: ${changelog.entries.length}`);
console.log(`Total icons: ${changelog.totalIcons}`);
