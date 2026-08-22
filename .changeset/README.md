# Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) to version
and publish its packages.

`sargam-icons` and `@sargamicons/react` are released **lock-step** at the same
version. Changesets versions the workspace packages (`@sargamicons/react`);
because `sargam-icons` is the workspace **root**, Changesets does not bump it
automatically. When cutting a release, set the root `package.json` `version` to
match `@sargamicons/react` in the same commit.

## Workflow

1. After making a change, run `bun run changeset` and describe it. Pick a bump
   (patch / minor / major) for `@sargamicons/react`.
2. When ready to release, run `bun run version-packages` to consume the pending
   changesets and bump versions + changelogs, then set the root `sargam-icons`
   version to match and commit.
3. Run `bun run release` (which runs `changeset publish`) with a valid npm token
   to publish the updated packages. `@sargamicons/react` builds its `dist` via
   its `prepack` script at pack time.
