import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function getVersion(): string {
  try {
    const pkgPath = path.join(__dirname, '..', 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')) as { version?: string };
    return pkg.version ?? '1.6.7';
  } catch {
    return '1.6.7';
  }
}

function loadChangelog(): Changelog {
  try {
    const changelogPath = path.join(__dirname, 'changelog.json');
    const data = fs.readFileSync(changelogPath, 'utf-8');
    return JSON.parse(data) as Changelog;
  } catch {
    return { generated: '', totalIcons: 0, entries: [] };
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

function getIconNames(directory: string): string[] {
  return fs
    .readdirSync(directory)
    .filter((file: string) => file.endsWith('.svg'))
    .map((file: string) => path.basename(file, '.svg'))
    .sort();
}

// ─────────────────────────────────────────────
// Shared HTML generators
// ─────────────────────────────────────────────

/** The brand logo SVG — shared between both pages. */
const BRAND_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="var(--content-primary)" clip-path="url(#a)"><path fill-rule="evenodd" d="M29.163 16.038a5.965 5.965 0 0 0-3.234-3.972 4.934 4.934 0 0 0-2.13-.429.134.134 0 0 1-.12-.206c.38-.625.614-1.329.686-2.057a5.97 5.97 0 0 0-1.821-4.802 5.487 5.487 0 0 0-2.247-1.348c-1.474-.443-2.637-.216-3.268.635-.35.504-.543 1.1-.552 1.714a2.86 2.86 0 0 0 .453 1.846 2.174 2.174 0 0 0 1.509.881 2.134 2.134 0 0 0 1.642-.531 2.077 2.077 0 0 0 .687-1.499.593.593 0 0 0-.498-.607.566.566 0 0 0-.635.562.932.932 0 0 1-.318.686.99.99 0 0 1-.762.25 1.027 1.027 0 0 1-.71-.414 1.77 1.77 0 0 1-.246-1.129c.004-.393.123-.775.342-1.1.443-.594 1.465-.399 2.034-.227a4.36 4.36 0 0 1 1.78 1.073 4.886 4.886 0 0 1 1.486 3.865 4.189 4.189 0 0 1-2.172 3.156l-.027.02-.147.086a.343.343 0 0 1-.447-.089 5.691 5.691 0 0 0-8.917 0 .343.343 0 0 1-.442.09l-.148-.087-.027-.02A4.194 4.194 0 0 1 8.743 9.23a4.908 4.908 0 0 1 1.484-3.865 4.37 4.37 0 0 1 1.784-1.073c.57-.172 1.592-.371 2.034.226.22.325.34.708.343 1.101.046.393-.04.79-.243 1.129a1.03 1.03 0 0 1-.71.414.98.98 0 0 1-.765-.25.933.933 0 0 1-.32-.686.565.565 0 0 0-.634-.562.593.593 0 0 0-.497.606 2.081 2.081 0 0 0 1.451 1.94 2.168 2.168 0 0 0 2.397-.773c.358-.544.52-1.194.456-1.842a3.13 3.13 0 0 0-.552-1.715c-.634-.85-1.794-1.077-3.268-.634a5.466 5.466 0 0 0-2.247 1.348 5.96 5.96 0 0 0-1.821 4.801c.071.729.306 1.432.686 2.058a.134.134 0 0 1-.12.206 4.929 4.929 0 0 0-2.127.429 5.978 5.978 0 0 0-3.237 3.971 5.519 5.519 0 0 0-.045 2.62c.343 1.5 1.132 2.401 2.185 2.511.092.007.185.007.278 0 .52-.012 1.03-.149 1.488-.398a2.83 2.83 0 0 0 1.372-1.313 2.164 2.164 0 0 0 0-1.746 2.123 2.123 0 0 0-2.12-1.254 2.093 2.093 0 0 0-.806.242.593.593 0 0 0-.278.738.566.566 0 0 0 .803.267.929.929 0 0 1 .765-.075.988.988 0 0 1 .682.948c0 .141-.029.28-.085.41-.19.347-.49.62-.854.775-.338.198-.728.291-1.119.267-.737-.085-1.076-1.07-1.213-1.65a4.36 4.36 0 0 1 .04-2.077 4.877 4.877 0 0 1 2.607-3.221 4.191 4.191 0 0 1 3.814.302l.178.103a.343.343 0 0 1 .144.428 5.703 5.703 0 0 0 4.761 7.752v.398a.517.517 0 0 0 0 .102 4.181 4.181 0 0 1-1.647 3.458 4.901 4.901 0 0 1-4.094.655 4.384 4.384 0 0 1-1.828-1.03c-.436-.407-1.118-1.196-.824-1.875.175-.351.45-.642.789-.837a1.773 1.773 0 0 1 1.098-.343 1.028 1.028 0 0 1 .717.404.993.993 0 0 1 .008 1.147.944.944 0 0 1-.29.267.562.562 0 0 0-.144.86.593.593 0 0 0 .752.094 2.077 2.077 0 0 0 .946-1.349 2.122 2.122 0 0 0-.36-1.687 2.178 2.178 0 0 0-1.52-.864 2.822 2.822 0 0 0-1.82.528c-.53.313-.954.78-1.215 1.337-.422.974-.034 2.093 1.084 3.149a5.463 5.463 0 0 0 2.291 1.269 6.198 6.198 0 0 0 1.687.233 5.785 5.785 0 0 0 3.372-1.05 4.859 4.859 0 0 0 1.433-1.632.14.14 0 0 1 .193-.052c.021.012.04.03.051.052a4.87 4.87 0 0 0 1.437 1.633 5.769 5.769 0 0 0 3.369 1.049c.57 0 1.138-.078 1.686-.234a5.463 5.463 0 0 0 2.292-1.268c1.122-1.056 1.506-2.175 1.084-3.149a3.086 3.086 0 0 0-1.211-1.337 2.84 2.84 0 0 0-1.825-.528 2.163 2.163 0 0 0-1.516.864 2.11 2.11 0 0 0-.36 1.687 2.059 2.059 0 0 0 .947 1.348.593.593 0 0 0 .751-.093.568.568 0 0 0-.144-.86.92.92 0 0 1-.446-.628.982.982 0 0 1 .165-.786 1.027 1.027 0 0 1 .713-.404c.394-.012.78.109 1.098.343.34.195.616.486.792.837.292.686-.391 1.468-.823 1.876a4.396 4.396 0 0 1-1.821 1.005 4.902 4.902 0 0 1-4.092-.649 4.198 4.198 0 0 1-1.647-3.453v-.207a.343.343 0 0 1 .299-.342 5.713 5.713 0 0 0 4.85-5.615 5.652 5.652 0 0 0-.392-2.057.344.344 0 0 1 .145-.429l.181-.107a4.199 4.199 0 0 1 3.818-.302 4.892 4.892 0 0 1 2.603 3.221c.178.679.19 1.39.035 2.075-.138.58-.478 1.564-1.212 1.65a1.979 1.979 0 0 1-1.121-.268 1.755 1.755 0 0 1-.853-.775 1.029 1.029 0 0 1 0-.82.987.987 0 0 1 .596-.538.944.944 0 0 1 .717.048.617.617 0 0 0 .761-.096.562.562 0 0 0-.148-.857 2.084 2.084 0 0 0-1.68-.172 2.115 2.115 0 0 0-1.28 1.142 2.164 2.164 0 0 0 0 1.746 2.84 2.84 0 0 0 1.372 1.313 3.06 3.06 0 0 0 1.767.381c1.05-.12 1.828-1.029 2.181-2.51a5.487 5.487 0 0 0-.038-2.617ZM16 11.421a4.57 4.57 0 0 1 3.379 1.496.342.342 0 0 1-.086.531l-2.95 1.715a.685.685 0 0 1-.686 0l-2.95-1.715a.342.342 0 0 1-.082-.531A4.562 4.562 0 0 1 16 11.42Zm-4.579 4.589c.002-.465.074-.928.213-1.371a.342.342 0 0 1 .5-.192l2.957 1.714a.686.686 0 0 1 .343.594v3.409a.342.342 0 0 1-.419.343 4.585 4.585 0 0 1-3.594-4.497Zm9.158 0a4.582 4.582 0 0 1-3.591 4.459.343.343 0 0 1-.415-.343V16.72a.686.686 0 0 1 .343-.593l2.953-1.715a.344.344 0 0 1 .5.195c.143.454.214.928.21 1.403Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0ZM1.132 16C1.132 7.789 7.789 1.132 16 1.132S30.868 7.789 30.868 16 24.211 30.868 16 30.868 1.132 24.211 1.132 16Z" clip-rule="evenodd"/><path d="M4.727 8.981a1.029 1.029 0 1 1 1.144 1.711 1.029 1.029 0 0 1-1.144-1.71Zm21.974-.173a1.029 1.029 0 1 0 0 2.057 1.029 1.029 0 0 0 0-2.057ZM16 27.328a1.029 1.029 0 1 0 0 2.059 1.029 1.029 0 0 0 0-2.058Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></svg>`;

/** Theme-toggle button SVGs — shared between both pages. */
const THEME_TOGGLE_SVGS = `
  <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256"/>
  </svg>
  <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" style="display:none">
    <g clip-path="url(#sun-clip)">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 12H1m22 0h-4M7.05 7.05 4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0-2.828 2.828M19.778 4.222 16.95 7.05M12 19v4m0-22v4m4 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </g>
    <defs>
      <clipPath id="sun-clip"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath>
    </defs>
  </svg>`;

/** The icon-popover dialog HTML — identical on both pages. */
function generatePopoverHtml(): string {
  return `
  <div id="icon-popover" class="icon-popover" hidden role="dialog" aria-labelledby="popover-title" aria-modal="true">
    <div class="popover-content">
      <div class="popover-header">
        <h3 id="popover-title" class="popover-icon-name"></h3>
        <button type="button" class="popover-close" aria-label="Close popover">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757"/></svg>
        </button>
      </div>
      <div class="popover-variants">
        <button type="button" class="popover-variant active" data-variant="line">Line</button>
        <button type="button" class="popover-variant" data-variant="duotone">Duotone</button>
        <button type="button" class="popover-variant" data-variant="fill">Fill</button>
      </div>
      <div class="popover-preview">
        <img class="popover-icon" src="" alt="" width="48" height="48">
      </div>
      <div class="popover-menu">
        <button type="button" class="popover-menu-item" id="copy-svg-btn">
          <span>[ Copy SVG ]</span>
        </button>
        <button type="button" class="popover-menu-item" id="copy-cdn-btn">
          <span>[ Copy CDN ]</span>
        </button>
        <button type="button" class="popover-menu-item" id="download-svg-btn">
          <span>[ Download ]</span>
        </button>
      </div>
    </div>
  </div>`;
}

/**
 * The shared initIconPopover() script block.
 *
 * @param cdnBaseUrl - The CDN base URL injected at build time.
 * @param clickSelector - CSS selector for clickable icon elements.
 * @param showRandomOnLoad - Whether to open a random icon popover on page load.
 */
function generatePopoverScript(
  cdnBaseUrl: string,
  clickSelector: string,
  showRandomOnLoad: boolean,
): string {
  return `
    const CDN_BASE_URL = '${cdnBaseUrl}';

    function initIconPopover() {
      const popover = document.getElementById('icon-popover');
      const popoverContent = document.querySelector('.popover-content');
      const popoverHeader = document.querySelector('.popover-header');
      const popoverTitle = document.querySelector('.popover-icon-name');
      const popoverIcon = document.querySelector('.popover-icon');
      const popoverClose = document.querySelector('.popover-close');
      const copyBtn = document.getElementById('copy-svg-btn');
      const downloadBtn = document.getElementById('download-svg-btn');
      const copyCdnBtn = document.getElementById('copy-cdn-btn');
      const variantBtns = document.querySelectorAll('.popover-variant');

      /** @type {{ iconName: string, iconType: string, iconUrl: string } | null} */
      let currentIconData = null;
      let isDragging = false;
      let offsetX = 0;
      let offsetY = 0;
      let currentPosX = 0;
      let currentPosY = 0;
      let hasBeenPositioned = false;
      /** @type {Element | null} */
      let previouslyFocusedElement = null;

      function getFocusableElements() {
        return popoverContent.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
      }

      function trapFocus(e) {
        if (e.key !== 'Tab') return;
        const focusableElements = getFocusableElements();
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }

      function centerPopover() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const popoverWidth = popoverContent.offsetWidth || 256;
        const popoverHeight = popoverContent.offsetHeight || 400;
        const offsetFromRight = 48;
        const offsetFromTop = 72;
        currentPosX = (viewportWidth / 2) - popoverWidth / 2 - offsetFromRight;
        currentPosY = (offsetFromTop + popoverHeight / 2) - (viewportHeight / 2);
        popoverContent.style.left = '50%';
        popoverContent.style.top = '50%';
        popoverContent.style.transform = 'translate(calc(-50% + ' + currentPosX + 'px), calc(-50% + ' + currentPosY + 'px))';
        offsetX = 0;
        offsetY = 0;
        hasBeenPositioned = true;
      }

      function showPopover(iconElement) {
        const iconName = iconElement.getAttribute('data-name');
        const iconType = iconElement.getAttribute('data-type') || 'line';
        const iconUrl = iconElement.src || (CDN_BASE_URL + iconType.charAt(0).toUpperCase() + iconType.slice(1) + '/' + iconName + '.svg');

        currentIconData = { iconName, iconType, iconUrl };
        popoverTitle.textContent = iconName;
        popoverIcon.src = iconUrl;
        popoverIcon.alt = iconName + ' ' + iconType + ' icon';

        variantBtns.forEach(function(btn) {
          btn.classList.toggle('active', btn.getAttribute('data-variant') === iconType);
        });

        previouslyFocusedElement = document.activeElement;

        if (!hasBeenPositioned) {
          centerPopover();
        }

        popover.hidden = false;
        popover.setAttribute('aria-hidden', 'false');

        document.removeEventListener('keydown', trapFocus);
        document.addEventListener('keydown', trapFocus);

        setTimeout(function() {
          const focusable = getFocusableElements();
          if (focusable.length > 0) focusable[0].focus();
        }, 100);
      }

      function hidePopover() {
        popover.hidden = true;
        popover.setAttribute('aria-hidden', 'true');
        currentIconData = null;
        isDragging = false;
        document.removeEventListener('keydown', trapFocus);
        if (previouslyFocusedElement && previouslyFocusedElement.focus) {
          previouslyFocusedElement.focus();
        }
        previouslyFocusedElement = null;
      }

      function downloadIcon(iconName, iconType, iconUrl) {
        fetch(iconUrl)
          .then(function(response) { return response.blob(); })
          .then(function(blob) {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = iconName + '-' + iconType + '.svg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          })
          .catch(function(error) {
            console.error('Failed to download the icon:', error);
            alert('Failed to download the icon. Please try again.');
          });
      }

      function copyTextToClipboard(text, btn) {
        const spanEl = btn ? btn.querySelector('span') : null;
        const originalText = spanEl ? spanEl.textContent : '';
        function showCopied() {
          if (spanEl) {
            spanEl.textContent = '[ Copied ]';
            setTimeout(function() { spanEl.textContent = originalText; }, 800);
          }
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(showCopied).catch(function(err) {
            console.error('Failed to copy:', err);
          });
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showCopied();
        }
      }

      function copyIconToClipboard(iconUrl) {
        fetch(iconUrl)
          .then(function(response) { return response.text(); })
          .then(function(svgText) { copyTextToClipboard(svgText, copyBtn); })
          .catch(function(error) {
            console.error('Failed to copy SVG:', error);
            alert('Failed to copy SVG. Please try again.');
          });
      }

      // Drag
      function dragStart(e) {
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
        isDragging = true;
        popoverHeader.style.cursor = 'grabbing';
        if (e.type === 'touchstart') {
          offsetX = e.touches[0].clientX - currentPosX;
          offsetY = e.touches[0].clientY - currentPosY;
        } else {
          offsetX = e.clientX - currentPosX;
          offsetY = e.clientY - currentPosY;
        }
        e.preventDefault();
      }

      function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        currentPosX = clientX - offsetX;
        currentPosY = clientY - offsetY;
        popoverContent.style.left = '50%';
        popoverContent.style.top = '50%';
        popoverContent.style.transform = 'translate(calc(-50% + ' + currentPosX + 'px), calc(-50% + ' + currentPosY + 'px))';
      }

      function dragEnd() {
        if (isDragging) {
          isDragging = false;
          popoverHeader.style.cursor = '';
        }
      }

      popoverHeader.addEventListener('mousedown', dragStart);
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', dragEnd);
      popoverHeader.addEventListener('touchstart', dragStart, { passive: false });
      document.addEventListener('touchmove', drag, { passive: false });
      document.addEventListener('touchend', dragEnd);

      // Click handler
      document.querySelectorAll('${clickSelector}').forEach(function(el) {
        el.addEventListener('click', function(e) {
          e.stopPropagation();
          showPopover(el);
        });
      });

      ${showRandomOnLoad ? `
      // Show random icon on page load
      const allIcons = document.querySelectorAll('.downloadable-icon');
      if (allIcons.length > 0) {
        const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
        showPopover(randomIcon);
      }
      ` : ''}

      // Keyboard: open icon on grid item Enter/Space
      const flexGrid = document.querySelector('.flex-grid');
      if (flexGrid) {
        flexGrid.addEventListener('keydown', function(e) {
          if (e.target.classList.contains('flex-grid-item')) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              const firstIcon = e.target.querySelector('.downloadable-icon');
              if (firstIcon) showPopover(firstIcon);
            }
          }
        });
      }

      if (copyBtn) {
        copyBtn.addEventListener('click', function() {
          if (currentIconData) copyIconToClipboard(currentIconData.iconUrl);
        });
      }

      if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
          if (currentIconData) downloadIcon(currentIconData.iconName, currentIconData.iconType, currentIconData.iconUrl);
        });
      }

      if (popoverClose) popoverClose.addEventListener('click', hidePopover);

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !popover.hidden) hidePopover();
      });

      variantBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          if (!currentIconData) return;
          const variant = btn.getAttribute('data-variant');
          const newUrl = CDN_BASE_URL + variant.charAt(0).toUpperCase() + variant.slice(1) + '/' + currentIconData.iconName + '.svg';
          currentIconData.iconType = variant;
          currentIconData.iconUrl = newUrl;
          popoverIcon.src = newUrl;
          popoverIcon.alt = currentIconData.iconName + ' ' + variant + ' icon';
          variantBtns.forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
        });
      });

      if (copyCdnBtn) {
        copyCdnBtn.addEventListener('click', function() {
          if (currentIconData) copyTextToClipboard(currentIconData.iconUrl, copyCdnBtn);
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initIconPopover);
    } else {
      initIconPopover();
    }`;
}

/** Shared theme-toggle IIFE — used on both pages. */
function generateThemeToggleScript(): string {
  return `
    (function initThemeToggle() {
      var KEY = 'data-new-ui-theme';
      var el = document.documentElement;
      var saved = localStorage.getItem(KEY);

      function apply(theme) {
        el.setAttribute('data-new-ui-theme', theme);
      }

      if (saved === 'dark--warm' || saved === 'light--warm') {
        apply(saved);
      } else {
        apply('dark--warm');
      }

      var btn = document.getElementById('theme-toggle');

      function syncIcons() {
        var isDark = (el.getAttribute('data-new-ui-theme') || 'dark--warm') === 'dark--warm';
        var sun = document.getElementById('icon-sun');
        var moon = document.getElementById('icon-moon');
        if (sun && moon) {
          sun.style.display = isDark ? '' : 'none';
          moon.style.display = isDark ? 'none' : '';
        }
        if (btn) {
          btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
          btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
          btn.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
        }
      }
      syncIcons();

      if (btn) {
        btn.addEventListener('click', function() {
          var current = el.getAttribute('data-new-ui-theme') || 'dark--warm';
          var next = current === 'light--warm' ? 'dark--warm' : 'light--warm';
          apply(next);
          try { localStorage.setItem(KEY, next); } catch (e) {}
          syncIcons();
        });
      }
    })();`;
}

/** Progressive image loading with IntersectionObserver. */
function generateProgressiveLoadingScript(): string {
  return `
    function initProgressiveLoading() {
      const images = document.querySelectorAll('.downloadable-icon');

      function applyImage(img) {
        const tempImg = new Image();
        tempImg.onload = function() {
          img.style.opacity = '1';
          img.classList.add('loaded');
        };
        tempImg.onerror = function() {
          img.style.display = 'none';
          const placeholder = img.nextElementSibling;
          if (placeholder && placeholder.classList.contains('icon-placeholder')) {
            placeholder.style.display = 'block';
          }
        };
        tempImg.src = img.src;
      }

      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              applyImage(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '50px 0px', threshold: 0.1 });

        images.forEach(function(img) { imageObserver.observe(img); });
      } else {
        images.forEach(applyImage);
      }
    }`;
}

/** Font-loading class management. */
function generateFontLoadingScript(): string {
  return `
    function initFontLoading() {
      if (document.fonts && document.fonts.ready) {
        document.body.classList.add('font-loading');
        document.fonts.ready.then(function() {
          document.body.classList.add('font-loaded');
          document.body.classList.remove('font-loading');
        });
        setTimeout(function() {
          if (document.body.classList.contains('font-loading')) {
            document.body.classList.add('font-loaded');
            document.body.classList.remove('font-loading');
          }
        }, 3000);
      }
    }`;
}

/** Minimal critical CSS inlined in <head> to prevent FOUC before bundle loads. */
function getCriticalCSS(): string {
  return `
html, body { background-color: var(--background); margin: 0; }
body { color: var(--content-primary); }
main { width: 100%; margin: 0; padding: 0; }
.top-nav { position: fixed; top: 0; width: 100%; z-index: 999; }
header { width: 100%; margin: var(--s-112, 7rem) 0 var(--s-56, 3.5rem); text-align: center; }
.flex-grid { display: flex; flex-wrap: wrap; }
.flex-grid-item { flex: 1 0 4rem; display: flex; align-items: center; justify-content: center; position: relative; height: 9.5rem; }
@media screen and (max-width: 639px) {
  header { margin: var(--s-128, 8rem) 0 var(--s-64, 4rem); }
}`;
}

// ─────────────────────────────────────────────
// Build data
// ─────────────────────────────────────────────

const VERSION = getVersion();
const CDN_BASE_URL = `https://cdn.jsdelivr.net/npm/sargam-icons@${VERSION}/Icons/`;
const changelog = loadChangelog();
const iconNames = getIconNames(path.join(__dirname, '..', 'Icons', 'Line'));
const criticalCSS = getCriticalCSS();

// ─────────────────────────────────────────────
// Icon grid HTML
// ─────────────────────────────────────────────

let iconGridContent = '';
iconNames.forEach((iconName: string, index: number) => {
  iconGridContent += `
    <div class="flex-grid-item" data-icon-name="${iconName}" tabindex="0" aria-label="${iconName} icon - click to download" aria-describedby="icon-${index}-desc">
      <img class="downloadable-icon" data-type="line" data-name="${iconName}" src="${CDN_BASE_URL}Line/${iconName}.svg" width="24" height="24" alt="${iconName} line style" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div class="icon-placeholder" style="display:none; width:24px; height:24px; background:var(--border-muted); border-radius:2px; position:absolute; top:1.25rem; left:50%; transform:translateX(-50%);"></div>
      <img class="downloadable-icon" data-type="duotone" data-name="${iconName}" src="${CDN_BASE_URL}Duotone/${iconName}.svg" width="24" height="24" alt="${iconName} duotone style" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div class="icon-placeholder" style="display:none; width:24px; height:24px; background:var(--border-muted); border-radius:2px; position:absolute; top:4rem; left:50%; transform:translateX(-50%);"></div>
      <img class="downloadable-icon" data-type="fill" data-name="${iconName}" src="${CDN_BASE_URL}Fill/${iconName}.svg" width="24" height="24" alt="${iconName} fill style" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div class="icon-placeholder" style="display:none; width:24px; height:24px; background:var(--border-muted); border-radius:2px; position:absolute; top:6.75rem; left:50%; transform:translateX(-50%);"></div>
    </div>`;
});

// ─────────────────────────────────────────────
// Main page (index / template.html)
// ─────────────────────────────────────────────

const fullHtmlContent = `<!DOCTYPE html>
<html lang="en" data-new-ui-theme="dark--warm">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>sargam icons</title>
  <meta name="description" content="A collection of 1,200+ handcrafted, and meticulously optimized open-source icons for your exquisite designs.">
  <meta name="author" content="@planetabhi" />
  <meta property="og:title" content="sargam icons" />
  <meta property="og:url" content="https://sargamicons.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="A collection of 1,200+ handcrafted, and meticulously optimized open-source icons for your exquisite designs." />
  <meta property="og:site_name" content="sargam icons" />
  <link rel="apple-touch-icon" href="icon.png">
  <link rel="canonical" href="https://sargamicons.com/">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sargam Icons",
    "url": "https://sargamicons.com/",
    "description": "A collection of 1,200+ handcrafted, and meticulously optimized open-source icons for your exquisite designs.",
    "author": {
      "@type": "Person",
      "name": "Abhimanyu Rana",
      "url": "https://planetabhi.com/"
    }
  }
  </script>
  <style>${criticalCSS}</style>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JWMS1KLBBB"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JWMS1KLBBB');
  </script>
</head>
<body>
  <nav class="top-nav" aria-label="Primary">
    <div class="top-nav-inner">
      <div class="lhs">
        <a href="/" class="brand" aria-label="sargam icons">
          ${BRAND_SVG}
        </a>
        <span class="version-pill" aria-label="Version">v${VERSION}</span>
        <div class="zoom-separator" role="separator"></div>

        <label for="icon-search" class="sr-only">Search icons</label>
        <div class="nav-search-wrapper">
          <input id="icon-search" type="search" placeholder="Search sargam icons..." aria-label="Search icons" autocomplete="off" inputmode="search" />
          <button id="icon-search-clear" type="button" class="clear-search" aria-label="Clear search" hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="rhs">
        <a href="changelog.html" aria-label="Changelog">Changelog</a>

        <div class="zoom-separator" role="separator"></div>

        <a href="https://github.com/planetabhi/sargam-icons" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>

        <div class="zoom-separator" role="separator"></div>

        <button type="button" class="zoom-btn" id="zoom-out" aria-label="Zoom out" title="Zoom out">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21-4-4m-9-6h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/></svg>
        </button>

        <button type="button" class="zoom-btn" id="zoom-in" aria-label="Zoom in" title="Zoom in">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/></svg>
        </button>

        <div class="zoom-separator" role="separator"></div>

        <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
          ${THEME_TOGGLE_SVGS}
        </button>
      </div>
    </div>
  </nav>

  <header>
    <div class="header-content">
      <h1>Handcrafted. Optimized. Open-source.</h1>
      <div class="CTAs">
        <a href="https://www.figma.com/community/file/1152296792728333709/sargam-icons" aria-label="Open in Figma" rel="noopener noreferrer"><span>Open in Figma</span></a>
        <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-${VERSION}.tgz" aria-label="Download all icons"><span>Download all</span></a>
      </div>
    </div>
  </header>

  <main id="main-content">
    <section id="icon-grid" aria-labelledby="icon-grid-heading">
      <h2 id="icon-grid-heading" class="sr-only">Sargam Icons</h2>
      <div class="flex-grid" aria-label="Collection of ${iconNames.length} icons">
        ${iconGridContent}
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <a href="/changelog.html">Changelog</a> &middot; <a href="https://github.com/SargamDesign/sargam-icons-react" target="_blank" rel="noopener noreferrer">React</a> &middot; <a href="https://github.com/planetabhi/sargam-icons/blob/main/LICENSE.txt" target="_blank" rel="noopener noreferrer">License</a> <br /> By <a href="https://x.com/planetabhi" target="_blank" rel="noopener noreferrer">@PLANETABHI</a> &middot; ABHIMANYU RANA 2026 © <br /> <a href="https://www.jsdelivr.com/package/npm/sargam-icons"><img src="https://data.jsdelivr.com/v1/package/npm/sargam-icons/badge" alt="jsdelivr package download stats" style="margin: 0 auto; padding-top: 0.5rem; aspect-ratio: auto;"></a>
    </div>
  </footer>

  ${generatePopoverHtml()}

  <script>
    ${generateFontLoadingScript()}
    ${generateProgressiveLoadingScript()}

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initFontLoading();
        initProgressiveLoading();
      });
    } else {
      initFontLoading();
      initProgressiveLoading();
    }

    ${generatePopoverScript(CDN_BASE_URL, '.downloadable-icon', true)}

    ${generateThemeToggleScript()}

    (function initZoomControls() {
      var ZOOM_LEVELS = [1, 1.5, 2, 2.5, 3];
      var currentZoomIndex = 0;
      var iconGrid = document.getElementById('icon-grid');
      var zoomInBtn = document.getElementById('zoom-in');
      var zoomOutBtn = document.getElementById('zoom-out');

      function applyZoom(zoomLevel) {
        if (!iconGrid) return;
        iconGrid.style.transform = '';
        iconGrid.style.zoom = '';
        iconGrid.style.setProperty('--zoom', String(zoomLevel));
      }

      function updateButtons() {
        if (zoomOutBtn) zoomOutBtn.disabled = currentZoomIndex === 0;
        if (zoomInBtn) zoomInBtn.disabled = currentZoomIndex === ZOOM_LEVELS.length - 1;
      }

      if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function() {
          if (currentZoomIndex < ZOOM_LEVELS.length - 1) {
            currentZoomIndex++;
            applyZoom(ZOOM_LEVELS[currentZoomIndex]);
            updateButtons();
          }
        });
      }

      if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
          if (currentZoomIndex > 0) {
            currentZoomIndex--;
            applyZoom(ZOOM_LEVELS[currentZoomIndex]);
            updateButtons();
          }
        });
      }

      updateButtons();
    })();
  </script>

</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'template.html'), fullHtmlContent);

// ─────────────────────────────────────────────
// Changelog page (changelog.html)
// ─────────────────────────────────────────────

const changelogEntriesHtml = changelog.entries
  .map((entry: ChangelogEntry, index: number) => {
    const isFirst = index === 0;
    const iconCount = entry.newIcons.length;

    const iconsHtml = entry.newIcons
      .map(
        (iconName: string) => `
            <button type="button" class="changelog-icon-btn downloadable-icon" data-icon-name="si_${iconName}" data-name="si_${iconName}" data-type="line" title="${iconName}" aria-label="${iconName} icon">
              <img src="${CDN_BASE_URL}Line/si_${iconName}.svg" width="20" height="20" alt="" loading="lazy" onerror="this.parentElement.style.display='none'" />
            </button>`,
      )
      .join('');

    return `
            <details class="changelog-entry" ${isFirst ? 'open' : ''}>
              <summary class="changelog-summary" aria-label="Version ${entry.version} — ${iconCount} new icons">
                <span class="changelog-version">v${entry.version}</span>
                <span class="changelog-date">${formatDate(entry.date)}</span>
                <span class="changelog-summary-rhs">
                  <span class="changelog-count">${iconCount}</span>
                  <svg class="changelog-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 16 4-4-4-4"/></svg>
                </span>
              </summary>
              <div class="changelog-content">
                ${iconCount > 0 ? `<div class="changelog-icons">${iconsHtml}</div>` : '<p class="changelog-empty">No new icons in this version</p>'}
              </div>
            </details>`;
  })
  .join('');

const changelogPageHtml = `<!DOCTYPE html>
<html lang="en" data-new-ui-theme="dark--warm">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Changelog - Sargam Icons</title>
  <meta name="description" content="Version history and new icons for Sargam Icons.">
  <meta name="author" content="@planetabhi" />
  <meta property="og:title" content="Changelog - Sargam Icons" />
  <meta property="og:url" content="https://sargamicons.com/changelog.html" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="Version history and new icons for Sargam Icons." />
  <meta property="og:site_name" content="sargam icons" />
  <link rel="apple-touch-icon" href="icon.png">
  <link rel="canonical" href="https://sargamicons.com/changelog.html">
  <meta name="robots" content="index, follow">
  <style>${criticalCSS}</style>
</head>
<body>
  <nav class="top-nav" aria-label="Primary">
    <div class="top-nav-inner">
      <div class="lhs">
        <a href="/" class="brand" aria-label="sargam icons">
          ${BRAND_SVG}
        </a>
        <span class="version-pill" aria-label="Version">v${VERSION}</span>
      </div>
      <div class="rhs">
        <a href="https://github.com/planetabhi/sargam-icons" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>

        <div class="zoom-separator" role="separator"></div>

        <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
          ${THEME_TOGGLE_SVGS}
        </button>
      </div>
    </div>
  </nav>

  <main id="main-content" class="changelog-page">
    <header class="changelog-header">
      <h1>Changelog</h1>
    </header>

    <section id="changelog" class="changelog-section" aria-labelledby="changelog-heading">
      <h2 id="changelog-heading" class="sr-only">Changelog</h2>
      <div class="changelog-container">
        ${changelogEntriesHtml}
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <a href="https://www.jsdelivr.com/package/npm/sargam-icons"><img src="https://data.jsdelivr.com/v1/package/npm/sargam-icons/badge" alt="jsdelivr package download stats" style="margin: 0 auto; aspect-ratio: auto;"></a>
    </div>
  </footer>

  ${generatePopoverHtml()}

  <script>
    ${generatePopoverScript(CDN_BASE_URL, '.changelog-icon-btn', false)}

    ${generateThemeToggleScript()}
  </script>

</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'changelog.html'), changelogPageHtml);
console.log('generated successfully');
