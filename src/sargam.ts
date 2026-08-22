import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateCoreArtifacts } from '../tools/generate/core.ts';
import { toComponentName } from '../tools/generate/naming.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface IconManifestEntry {
  name: string;
  category: string;
  addedIn: string;
  tags: string[];
  aliases: string[];
}

interface IconManifest {
  version: string;
  generated: string;
  count: number;
  variants: readonly ['line', 'duotone', 'fill'];
  cdnBase: string;
  categories: string[];
  icons: IconManifestEntry[];
}

function stripSiPrefix(s: string): string {
  return s.replace(/^si_/, '');
}

function buildSearchHaystack(
  iconName: string,
  category: string,
  entry: { tags: string[]; aliases: string[] },
  componentName: string,
): string {
  const parts = [
    stripSiPrefix(iconName).replace(/_/g, ' ').toLowerCase(),
    category.toLowerCase(),
    componentName.toLowerCase(),
    ...entry.tags,
    ...entry.aliases.map((a) => a.toLowerCase()),
  ]
    .join(' ')
    .split(/\s+/)
    .filter((t) => t && !/^\d+$/.test(t));

  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of parts) {
    if (!seen.has(p)) {
      seen.add(p);
      out.push(p);
    }
  }
  return out.join(' ');
}

const BRAND_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="var(--content-primary)" clip-path="url(#a)"><path fill-rule="evenodd" d="M29.163 16.038a5.965 5.965 0 0 0-3.234-3.972 4.934 4.934 0 0 0-2.13-.429.134.134 0 0 1-.12-.206c.38-.625.614-1.329.686-2.057a5.97 5.97 0 0 0-1.821-4.802 5.487 5.487 0 0 0-2.247-1.348c-1.474-.443-2.637-.216-3.268.635-.35.504-.543 1.1-.552 1.714a2.86 2.86 0 0 0 .453 1.846 2.174 2.174 0 0 0 1.509.881 2.134 2.134 0 0 0 1.642-.531 2.077 2.077 0 0 0 .687-1.499.593.593 0 0 0-.498-.607.566.566 0 0 0-.635.562.932.932 0 0 1-.318.686.99.99 0 0 1-.762.25 1.027 1.027 0 0 1-.71-.414 1.77 1.77 0 0 1-.246-1.129c.004-.393.123-.775.342-1.1.443-.594 1.465-.399 2.034-.227a4.36 4.36 0 0 1 1.78 1.073 4.886 4.886 0 0 1 1.486 3.865 4.189 4.189 0 0 1-2.172 3.156l-.027.02-.147.086a.343.343 0 0 1-.447-.089 5.691 5.691 0 0 0-8.917 0 .343.343 0 0 1-.442.09l-.148-.087-.027-.02A4.194 4.194 0 0 1 8.743 9.23a4.908 4.908 0 0 1 1.484-3.865 4.37 4.37 0 0 1 1.784-1.073c.57-.172 1.592-.371 2.034.226.22.325.34.708.343 1.101.046.393-.04.79-.243 1.129a1.03 1.03 0 0 1-.71.414.98.98 0 0 1-.765-.25.933.933 0 0 1-.32-.686.565.565 0 0 0-.634-.562.593.593 0 0 0-.497.606 2.081 2.081 0 0 0 1.451 1.94 2.168 2.168 0 0 0 2.397-.773c.358-.544.52-1.194.456-1.842a3.13 3.13 0 0 0-.552-1.715c-.634-.85-1.794-1.077-3.268-.634a5.466 5.466 0 0 0-2.247 1.348 5.96 5.96 0 0 0-1.821 4.801c.071.729.306 1.432.686 2.058a.134.134 0 0 1-.12.206 4.929 4.929 0 0 0-2.127.429 5.978 5.978 0 0 0-3.237 3.971 5.519 5.519 0 0 0-.045 2.62c.343 1.5 1.132 2.401 2.185 2.511.092.007.185.007.278 0 .52-.012 1.03-.149 1.488-.398a2.83 2.83 0 0 0 1.372-1.313 2.164 2.164 0 0 0 0-1.746 2.123 2.123 0 0 0-2.12-1.254 2.093 2.093 0 0 0-.806.242.593.593 0 0 0-.278.738.566.566 0 0 0 .803.267.929.929 0 0 1 .765-.075.988.988 0 0 1 .682.948c0 .141-.029.28-.085.41-.19.347-.49.62-.854.775-.338.198-.728.291-1.119.267-.737-.085-1.076-1.07-1.213-1.65a4.36 4.36 0 0 1 .04-2.077 4.877 4.877 0 0 1 2.607-3.221 4.191 4.191 0 0 1 3.814.302l.178.103a.343.343 0 0 1 .144.428 5.703 5.703 0 0 0 4.761 7.752v.398a.517.517 0 0 0 0 .102 4.181 4.181 0 0 1-1.647 3.458 4.901 4.901 0 0 1-4.094.655 4.384 4.384 0 0 1-1.828-1.03c-.436-.407-1.118-1.196-.824-1.875.175-.351.45-.642.789-.837a1.773 1.773 0 0 1 1.098-.343 1.028 1.028 0 0 1 .717.404.993.993 0 0 1 .008 1.147.944.944 0 0 1-.29.267.562.562 0 0 0-.144.86.593.593 0 0 0 .752.094 2.077 2.077 0 0 0 .946-1.349 2.122 2.122 0 0 0-.36-1.687 2.178 2.178 0 0 0-1.52-.864 2.822 2.822 0 0 0-1.82.528c-.53.313-.954.78-1.215 1.337-.422.974-.034 2.093 1.084 3.149a5.463 5.463 0 0 0 2.291 1.269 6.198 6.198 0 0 0 1.687.233 5.785 5.785 0 0 0 3.372-1.05 4.859 4.859 0 0 0 1.433-1.632.14.14 0 0 1 .193-.052c.021.012.04.03.051.052a4.87 4.87 0 0 0 1.437 1.633 5.769 5.769 0 0 0 3.369 1.049c.57 0 1.138-.078 1.686-.234a5.463 5.463 0 0 0 2.292-1.268c1.122-1.056 1.506-2.175 1.084-3.149a3.086 3.086 0 0 0-1.211-1.337 2.84 2.84 0 0 0-1.825-.528 2.163 2.163 0 0 0-1.516.864 2.11 2.11 0 0 0-.36 1.687 2.059 2.059 0 0 0 .947 1.348.593.593 0 0 0 .751-.093.568.568 0 0 0-.144-.86.92.92 0 0 1-.446-.628.982.982 0 0 1 .165-.786 1.027 1.027 0 0 1 .713-.404c.394-.012.78.109 1.098.343.34.195.616.486.792.837.292.686-.391 1.468-.823 1.876a4.396 4.396 0 0 1-1.821 1.005 4.902 4.902 0 0 1-4.092-.649 4.198 4.198 0 0 1-1.647-3.453v-.207a.343.343 0 0 1 .299-.342 5.713 5.713 0 0 0 4.85-5.615 5.652 5.652 0 0 0-.392-2.057.344.344 0 0 1 .145-.429l.181-.107a4.199 4.199 0 0 1 3.818-.302 4.892 4.892 0 0 1 2.603 3.221c.178.679.19 1.39.035 2.075-.138.58-.478 1.564-1.212 1.65a1.979 1.979 0 0 1-1.121-.268 1.755 1.755 0 0 1-.853-.775 1.029 1.029 0 0 1 0-.82.987.987 0 0 1 .596-.538.944.944 0 0 1 .717.048.617.617 0 0 0 .761-.096.562.562 0 0 0-.148-.857 2.084 2.084 0 0 0-1.68-.172 2.115 2.115 0 0 0-1.28 1.142 2.164 2.164 0 0 0 0 1.746 2.84 2.84 0 0 0 1.372 1.313 3.06 3.06 0 0 0 1.767.381c1.05-.12 1.828-1.029 2.181-2.51a5.487 5.487 0 0 0-.038-2.617ZM16 11.421a4.57 4.57 0 0 1 3.379 1.496.342.342 0 0 1-.086.531l-2.95 1.715a.685.685 0 0 1-.686 0l-2.95-1.715a.342.342 0 0 1-.082-.531A4.562 4.562 0 0 1 16 11.42Zm-4.579 4.589c.002-.465.074-.928.213-1.371a.342.342 0 0 1 .5-.192l2.957 1.714a.686.686 0 0 1 .343.594v3.409a.342.342 0 0 1-.419.343 4.585 4.585 0 0 1-3.594-4.497Zm9.158 0a4.582 4.582 0 0 1-3.591 4.459.343.343 0 0 1-.415-.343V16.72a.686.686 0 0 1 .343-.593l2.953-1.715a.344.344 0 0 1 .5.195c.143.454.214.928.21 1.403Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0ZM1.132 16C1.132 7.789 7.789 1.132 16 1.132S30.868 7.789 30.868 16 24.211 30.868 16 30.868 1.132 24.211 1.132 16Z" clip-rule="evenodd"/><path d="M4.727 8.981a1.029 1.029 0 1 1 1.144 1.711 1.029 1.029 0 0 1-1.144-1.71Zm21.974-.173a1.029 1.029 0 1 0 0 2.057 1.029 1.029 0 0 0 0-2.057ZM16 27.328a1.029 1.029 0 1 0 0 2.059 1.029 1.029 0 0 0 0-2.058Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></svg>`;

const THEME_TOGGLE_SVGS = `
  <span class="t-icon-swap" data-state="dark">
    <span class="t-icon" data-icon="dark">
      <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256"/>
      </svg>
    </span>
    <span class="t-icon" data-icon="light">
      <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <g clip-path="url(#sun-clip)">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 12H1m22 0h-4M7.05 7.05 4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0-2.828 2.828M19.778 4.222 16.95 7.05M12 19v4m0-22v4m4 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
        </g>
        <defs>
          <clipPath id="sun-clip"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath>
        </defs>
      </svg>
    </span>
  </span>`;

function generatePopoverHtml(): string {
  return `
  <aside id="icon-panel" class="icon-panel" role="complementary" aria-label="Icon details" inert>
    <div class="panel-header">
      <h3 id="panel-title" class="panel-icon-name"></h3>
      <button type="button" class="panel-close" aria-label="Close panel">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757"/></svg>
      </button>
    </div>
    <div class="panel-variants" role="tablist" aria-label="Icon variant">
      <span class="panel-variants-pill" aria-hidden="true"></span>
      <button type="button" class="panel-variant" role="tab" data-variant="line" aria-selected="true">Line</button>
      <button type="button" class="panel-variant" role="tab" data-variant="duotone" aria-selected="false">Duotone</button>
      <button type="button" class="panel-variant" role="tab" data-variant="fill" aria-selected="false">Fill</button>
    </div>
    <div class="panel-preview">
      <img class="panel-icon" src="" alt="" width="48" height="48">
    </div>
    <ul class="panel-tags" hidden aria-label="Related tags"></ul>
    <footer class="panel-menu">
      <button type="button" class="panel-menu-item" id="copy-svg-btn" aria-label="Copy SVG">
        <span class="t-text-swap">SVG</span>
      </button>
      <button type="button" class="panel-menu-item" id="copy-jsx-btn" aria-label="Copy JSX">
        <span class="t-text-swap">JSX</span>
      </button>
      <button type="button" class="panel-menu-item" id="copy-cdn-btn" aria-label="Copy CDN URL">
        <span class="t-text-swap">CDN</span>
      </button>
    </footer>
  </aside>`;
}

function generatePopoverScript(
  cdnBaseUrl: string,
  clickSelector: string,
  showRandomOnLoad: boolean,
): string {

  return `
    function initIconPanel() {
      const panel = document.getElementById('icon-panel');
      const panelTitle = document.querySelector('.panel-icon-name');
      const panelIcon = document.querySelector('.panel-icon');
      const panelClose = document.querySelector('.panel-close');
      const panelTags = document.querySelector('.panel-tags');
      const copyBtn = document.getElementById('copy-svg-btn');
      const copyCdnBtn = document.getElementById('copy-cdn-btn');
      const copyJsxBtn = document.getElementById('copy-jsx-btn');
      const variantBtns = document.querySelectorAll('.panel-variant');

      let currentIconData = null;

      let previouslyFocusedElement = null;

      const svgTextByUrl = new Map();

      function loadSvgText(url) {
        if (svgTextByUrl.has(url)) return Promise.resolve(svgTextByUrl.get(url));
        return fetch(url).then(function(r) { return r.text(); }).then(function(txt) {
          svgTextByUrl.set(url, txt);
          return txt;
        });
      }

      function componentNameFromIcon(name) {
        var parts = String(name || '').replace(/^si_/, '').split('_').filter(Boolean);
        if (parts.length === 0) return '';
        var pascal = parts.map(function(p) {
          if (/^[A-Z0-9]+$/.test(p)) return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
          return p.charAt(0).toUpperCase() + p.slice(1);
        }).join('');
        return 'Si' + pascal;
      }

      function isPanelOpen() {
        return document.documentElement.getAttribute('data-panel-open') === 'true';
      }

      function renderTags(tags) {
        if (!panelTags) return;
        panelTags.innerHTML = '';
        if (!tags || tags.length === 0) {
          panelTags.hidden = true;
          return;
        }
        panelTags.hidden = false;
        tags.forEach(function(tag) {
          var li = document.createElement('li');
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'panel-tag';
          btn.textContent = tag;
          btn.setAttribute('data-tag', tag);
          btn.setAttribute('aria-label', 'Filter by tag: ' + tag);
          li.appendChild(btn);
          panelTags.appendChild(li);
        });
      }

      function showPanel(iconElement) {
        const iconName = iconElement.getAttribute('data-name');
        const iconType = iconElement.getAttribute('data-type') || 'line';

        const iconUrl = iconElement.src || ('${cdnBaseUrl}' + iconType.charAt(0).toUpperCase() + iconType.slice(1) + '/' + iconName + '.svg');

        currentIconData = { iconName, iconType, iconUrl };
        panelTitle.textContent = iconName;
        panelIcon.src = iconUrl;
        panelIcon.alt = iconName + ' ' + iconType + ' icon';

        variantBtns.forEach(function(btn) {
          btn.setAttribute('aria-selected', btn.getAttribute('data-variant') === iconType ? 'true' : 'false');
        });
        var activeVariant = document.querySelector('.panel-variant[aria-selected="true"]');

        moveVariantPill(activeVariant, isPanelOpen());

        var tagSource = (iconElement.closest && iconElement.closest('.flex-grid-item')) || iconElement;
        var tagsAttr = tagSource.getAttribute('data-icon-tags') || '';
        renderTags(tagsAttr ? tagsAttr.split(',').filter(function(t){return t;}) : []);

        if (!isPanelOpen()) {
          previouslyFocusedElement = document.activeElement;
          panel.removeAttribute('inert');
          document.documentElement.setAttribute('data-panel-open', 'true');
          requestAnimationFrame(function() {
            if (panelClose) panelClose.focus();
          });
        }
      }

      function hidePanel() {
        if (!isPanelOpen()) return;
        document.documentElement.removeAttribute('data-panel-open');
        panel.setAttribute('inert', '');
        currentIconData = null;
        if (previouslyFocusedElement && previouslyFocusedElement.focus) {
          previouslyFocusedElement.focus();
        }
        previouslyFocusedElement = null;
      }

      function textSwapTo(el, next) {
        if (!el || !el.classList) return;
        var dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--text-swap-dur')) || 150;
        el.classList.add('is-exit');
        setTimeout(function() {
          el.textContent = next;
          el.classList.remove('is-exit');
          el.classList.add('is-enter-start');
          void el.offsetHeight;
          el.classList.remove('is-enter-start');
        }, dur);
      }

      var pendingRestore = new Map();

      function copyTextToClipboard(text, btn) {
        const spanEl = btn ? btn.querySelector('span') : null;
        if (!spanEl) return;
        if (!spanEl.dataset.originalText) {
          spanEl.dataset.originalText = spanEl.textContent;
        }
        const originalText = spanEl.dataset.originalText;
        function showCopied() {
          const prevTimer = pendingRestore.get(spanEl);
          if (prevTimer) clearTimeout(prevTimer);
          textSwapTo(spanEl, 'Copied');
          const t = setTimeout(function() {
            textSwapTo(spanEl, originalText);
            pendingRestore.delete(spanEl);
          }, 800);
          pendingRestore.set(spanEl, t);
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
        loadSvgText(iconUrl)
          .then(function(svgText) { copyTextToClipboard(svgText, copyBtn); })
          .catch(function(error) {
            console.error('Failed to copy SVG:', error);
            alert('Failed to copy SVG. Please try again.');
          });
      }

      var clickRoot = document.getElementById('icon-grid');
      if (clickRoot) {
        clickRoot.addEventListener('click', function(e) {
          var target = e.target;
          while (target && target !== clickRoot) {
            if (target.matches && target.matches('${clickSelector}')) {
              e.stopPropagation();
              showPanel(target);
              return;
            }
            target = target.parentNode;
          }
        });
      }

      ${showRandomOnLoad ? `

      const allIcons = document.querySelectorAll('.downloadable-icon');
      if (allIcons.length > 0) {
        const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
        showPanel(randomIcon);
      }
      ` : ''}

      if (copyBtn) {
        copyBtn.addEventListener('click', function() {
          if (currentIconData) copyIconToClipboard(currentIconData.iconUrl);
        });
      }

      if (panelClose) panelClose.addEventListener('click', hidePanel);

      if (panelTags) {
        panelTags.addEventListener('click', function(e) {
          var t = e.target;
          if (!t || !t.classList || !t.classList.contains('panel-tag')) return;
          var tag = t.getAttribute('data-tag') || '';
          if (!tag) return;
          var searchInput = document.getElementById('icon-search');
          if (searchInput) {
            searchInput.value = tag;
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
          } else {
            window.location.href = '/';
          }
        });
      }

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isPanelOpen()) hidePanel();
      });

      var variantsBar = document.querySelector('.panel-variants');
      var variantsPill = variantsBar ? variantsBar.querySelector('.panel-variants-pill') : null;

      function moveVariantPill(tab, animate) {
        if (!variantsPill || !tab) return;
        if (!animate) {
          var prev = variantsPill.style.transition;
          variantsPill.style.transition = 'none';
          variantsPill.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
          variantsPill.style.width = tab.offsetWidth + 'px';
          void variantsPill.offsetWidth;
          variantsPill.style.transition = prev;
        } else {
          variantsPill.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
          variantsPill.style.width = tab.offsetWidth + 'px';
        }
      }

      variantBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          if (!currentIconData) return;
          const variant = btn.getAttribute('data-variant');
          const newUrl = '${cdnBaseUrl}' + variant.charAt(0).toUpperCase() + variant.slice(1) + '/' + currentIconData.iconName + '.svg';
          currentIconData.iconType = variant;
          currentIconData.iconUrl = newUrl;
          panelIcon.src = newUrl;
          panelIcon.alt = currentIconData.iconName + ' ' + variant + ' icon';
          variantBtns.forEach(function(b) { b.setAttribute('aria-selected', b === btn ? 'true' : 'false'); });
          moveVariantPill(btn, true);
        });
      });

      window.addEventListener('resize', function() {
        var active = document.querySelector('.panel-variant[aria-selected="true"]');
        if (active) moveVariantPill(active, false);
      });

      if (copyCdnBtn) {
        copyCdnBtn.addEventListener('click', function() {
          if (currentIconData) copyTextToClipboard(currentIconData.iconUrl, copyCdnBtn);
        });
      }

      if (copyJsxBtn) {
        copyJsxBtn.addEventListener('click', function() {
          if (!currentIconData) return;
          var comp = componentNameFromIcon(currentIconData.iconName);
          var snippet = "import { " + comp + " } from '@sargamicons/react/" + currentIconData.iconType + "';\\n\\n<" + comp + " />";
          copyTextToClipboard(snippet, copyJsxBtn);
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initIconPanel);
    } else {
      initIconPanel();
    }`;
}

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
        var swap = document.querySelector('#theme-toggle .t-icon-swap');
        if (swap) swap.setAttribute('data-state', isDark ? 'dark' : 'light');
        if (btn) {
          btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
          btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
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

function generateServiceWorkerScript(cdnBaseUrl: string): string {
  return `
    (function registerSargamSW() {
      if (!('serviceWorker' in navigator)) return;
      var path = '/sw.js';
      window.addEventListener('load', function() {
        navigator.serviceWorker.register(path, { scope: '/' }).then(function(reg) {

          var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
          if (conn) {
            if (conn.saveData) return;
            if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') return;
          }
          function warm() {
            fetch('/.well-known/sargam-icons.json', { cache: 'force-cache' })
              .then(function(r) { return r.ok ? r.json() : null; })
              .then(function(manifest) {
                if (!manifest || !Array.isArray(manifest.icons)) return;
                var base = manifest.cdnBase || '${cdnBaseUrl}';
                var variants = manifest.variants || ['line', 'duotone', 'fill'];
                var urls = [];
                manifest.icons.forEach(function(icon) {
                  variants.forEach(function(v) {
                    urls.push(base + v.charAt(0).toUpperCase() + v.slice(1) + '/' + icon.name + '.svg');
                  });
                });
                var target = navigator.serviceWorker.controller || reg.active;
                if (target) target.postMessage({ type: 'WARM_ICONS', urls: urls });
              })
              .catch(function() {  });
          }
          if ('requestIdleCallback' in window) {
            requestIdleCallback(warm, { timeout: 5000 });
          } else {
            setTimeout(warm, 3000);
          }
        }).catch(function() {  });
      });
    })();`;
}

function getCriticalCSS(): string {
  return `
html, body { background-color: var(--background); margin: 0; }
body { color: var(--content-primary); }
main { width: 100%; margin: 0; padding: 0; }
main#main-content { padding-top: var(--s-64, 4rem); }
.top-nav { position: fixed; top: 0; width: 100%; z-index: 999; }
.flex-grid { display: flex; flex-wrap: wrap; }
#icon-grid { --zoom: 1.5; }
.flex-grid-item { flex: 1 0 calc(4rem * var(--zoom, 1.5)); display: flex; align-items: center; justify-content: center; position: relative; height: calc(9.5rem * var(--zoom, 1.5)); }`;
}

const REPO_ROOT = path.join(__dirname, '..');

// Regenerate the core artifacts (icons.json, Icons.d.ts, public/sw.js), then
// consume the manifest as the single source of truth for the site.
generateCoreArtifacts();
const manifest: IconManifest = JSON.parse(
  fs.readFileSync(path.join(REPO_ROOT, 'icons.json'), 'utf-8'),
);

const VERSION = manifest.version;
const CDN_BASE_URL = manifest.cdnBase;
const iconNames = manifest.icons.map((i) => i.name);
const criticalCSS = getCriticalCSS();

let iconGridContent = '';
iconNames.forEach((iconName: string, index: number) => {
  const entry = manifest.icons[index];
  const search = buildSearchHaystack(iconName, entry.category, entry, toComponentName(iconName));

  const tagsAttr = entry.tags.join(',');
  iconGridContent += `
    <li class="flex-grid-item" data-icon-name="${iconName}" data-icon-search="${search}" data-icon-tags="${tagsAttr}">
      <button type="button" class="downloadable-icon" data-type="line" data-name="${iconName}" aria-label="${iconName} — line variant">
        <img src="${CDN_BASE_URL}Line/${iconName}.svg" width="24" height="24" alt="" loading="lazy" decoding="async">
      </button>
      <button type="button" class="downloadable-icon" data-type="duotone" data-name="${iconName}" aria-label="${iconName} — duotone variant">
        <img src="${CDN_BASE_URL}Duotone/${iconName}.svg" width="24" height="24" alt="" loading="lazy" decoding="async">
      </button>
      <button type="button" class="downloadable-icon" data-type="fill" data-name="${iconName}" aria-label="${iconName} — fill variant">
        <img src="${CDN_BASE_URL}Fill/${iconName}.svg" width="24" height="24" alt="" loading="lazy" decoding="async">
      </button>
    </li>`;
});

const fullHtmlContent = `<!DOCTYPE html>
<html lang="en" data-new-ui-theme="dark--warm">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="icon" href="/brand.svg" type="image/svg+xml">
  <title>sargam icons</title>
  <meta name="description" content="A collection of 1,200+ handcrafted, and meticulously optimized open-source icons for your exquisite designs.">
  <meta name="author" content="@planetabhi" />
  <meta property="og:title" content="sargam icons" />
  <meta property="og:url" content="https://sargamicons.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="A collection of 1,200+ handcrafted, and meticulously optimized open-source icons for your exquisite designs." />
  <meta property="og:site_name" content="sargam icons" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="canonical" href="https://sargamicons.com/">
  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="#ffffff">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Sargam">
  <link rel="alternate" type="application/json" title="Sargam Icons manifest" href="/.well-known/sargam-icons.json">
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
  <a href="#main-content" class="skip-link">Skip to content</a>
  <nav class="top-nav" aria-label="Primary">
    <div class="top-nav-inner">
      <div class="lhs">
        <a href="/" class="brand" aria-label="sargam icons">
          ${BRAND_SVG}
        </a>
        <span class="version-pill" aria-label="Version">v${VERSION}</span>
        <hr class="zoom-separator">

        <label for="icon-search" class="sr-only">Search icons</label>
        <search class="nav-search-wrapper">
          <input id="icon-search" type="search" placeholder="Search sargam icons..." aria-label="Search icons" autocomplete="off" inputmode="search" />
          <button id="icon-search-clear" type="button" class="clear-search" aria-label="Clear search" hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"/>
            </svg>
          </button>
        </search>
      </div>
      <div class="rhs">
        <div class="CTAs">
          <a href="https://www.figma.com/community/file/1152296792728333709/sargam-icons" target="_blank" rel="noopener noreferrer" aria-label="Open in Figma"><span>Figma</span></a>
          <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-${VERSION}.tgz" aria-label="Download icons"><span>Download</span></a>
        </div>

        <hr class="zoom-separator">

        <span class="t-tt-wrap">
          <button type="button" class="zoom-btn" id="zoom-out" aria-label="Zoom out">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21-4-4m-9-6h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/></svg>
          </button>
          <span class="t-tt" role="tooltip">Zoom out</span>
        </span>

        <span class="t-tt-wrap">
          <button type="button" class="zoom-btn" id="zoom-in" aria-label="Zoom in">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/></svg>
          </button>
          <span class="t-tt" role="tooltip">Zoom in</span>
        </span>

        <hr class="zoom-separator">

        <span class="t-tt-wrap">
          <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
            ${THEME_TOGGLE_SVGS}
          </button>
          <span class="t-tt" role="tooltip">Toggle theme</span>
        </span>
      </div>
    </div>
  </nav>

  <main id="main-content">
    <section id="icon-grid" aria-labelledby="icon-grid-heading">
      <h1 id="icon-grid-heading" class="sr-only">Sargam Icons</h1>
      <ul class="flex-grid" aria-label="Collection of ${iconNames.length} icons">
        ${iconGridContent}
      </ul>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <address>By <a href="https://x.com/planetabhi" target="_blank" rel="author noopener noreferrer">@PLANETABHI</a> &middot; ABHIMANYU RANA <time datetime="2026">2026</time> &copy;</address>
      <a href="https://www.jsdelivr.com/package/npm/sargam-icons"><img src="https://data.jsdelivr.com/v1/package/npm/sargam-icons/badge" alt="jsdelivr package download stats" style="margin: 0 auto; padding-top: 0.5rem; aspect-ratio: auto;"></a>
    </div>
  </footer>

  ${generatePopoverHtml()}

  <script>
    ${generateFontLoadingScript()}

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initFontLoading();
      });
    } else {
      initFontLoading();
    }

    ${generatePopoverScript(CDN_BASE_URL, '.downloadable-icon', false)}

    ${generateThemeToggleScript()}

    ${generateServiceWorkerScript(CDN_BASE_URL)}

    (function initZoomControls() {
      var ZOOM_LEVELS = [1, 1.5, 2, 2.5, 3];
      var currentZoomIndex = 1;
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

      applyZoom(ZOOM_LEVELS[currentZoomIndex]);

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
console.log('generated successfully');
