const fs = require('fs');
const path = require('path');
const sass = require('sass');

function getIconNames(directory) {
  return fs.readdirSync(directory)
    .filter(function(file) { return file.endsWith('.svg'); })
    .map(function(file) { return path.basename(file, '.svg'); });
}

function getCriticalCSS() {
  return `
:root {
  font-size: 16px;
  --serif: "Sargam", serif;
  --system-ui: system-ui, sans-serif;
  --container-max-width: 100%;
  --container-padding: var(--s-24);
  --container-padding-mobile: 1.5rem;
}

html, body {
  background-color: var(--background-subtle);
  margin: 0;
}

body {
  color: var(--content-primary);
  font: 400 1em/1.5 var(--system-ui);
  font-kerning: normal;
  overflow-wrap: break-word;
}

main {
  width: 100%;
  margin: 0;
  padding: 0;
}

main .search-container,
main #icon-grid .flex-grid {
  max-width: var(--container-max-width);
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding);
  box-sizing: border-box;
}

header {
  width: 100%;
  margin: var(--s-112) 0 var(--s-64);
  padding: 0;
  text-align: center;
}

header .header-content {
  max-width: var(--container-max-width);
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding);
  box-sizing: border-box;
}

header h1 {
  font: 400 1.75rem/2.25rem var(--serif);
  margin-bottom: var(--s-12);
}

.flex-grid {
  display: flex;
  flex-wrap: wrap;
}

.flex-grid-item {
  flex: 1 0 var(--s-64);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 var(--s-02) var(--s-04);
  height: 9.5rem;
}

.flex-grid-item img {
  width: 24px;
  height: 24px;
  position: absolute;
}

.flex-grid-item img[data-type="line"] { top: 1.25rem; }
.flex-grid-item img[data-type="duotone"] { top: 4rem; }
.flex-grid-item img[data-type="fill"] { top: 6.75rem; }

.search-container {
  margin: 0.75rem auto;
  text-align: center;
}

.details {
  max-width: var(--container-max-width);
  width: 100%;
  margin: 3rem auto;
  padding-inline: var(--container-padding);
  box-sizing: border-box;
}

footer {
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  text-align: center;
}

footer .footer-content {
  max-width: var(--container-max-width);
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding);
  box-sizing: border-box;
}

.top-nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
}

@media screen and (max-width: 639px) {
  :root {
    --container-padding: var(--container-padding-mobile);
  }
  
  header { margin: 2rem 0; }
}

[color-scheme="dark"] .flex-grid-item img {
  filter: invert(1) sepia(100%) hue-rotate(180deg);
}
  `;
}

const iconNames = getIconNames(path.join(__dirname, 'Icons', 'Line'));
const CDN_BASE_URL = 'https://cdn.jsdelivr.net/npm/sargam-icons@1.5.0/Icons/';
const criticalCSS = getCriticalCSS();

let iconGridContent = '';
iconNames.forEach(function(iconName, index) {
  iconGridContent += `
    <div class="flex-grid-item" data-icon-name="${iconName}" tabindex="0" aria-label="${iconName} icon - click to download" aria-describedby="icon-${index}-desc">
      <img class="downloadable-icon" data-type="line" data-name="${iconName}" src="${CDN_BASE_URL}Line/${iconName}.svg" width="24" height="24" alt="${iconName} line style" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div class="icon-placeholder" style="display:none; width:24px; height:24px; background:var(--border-muted); border-radius:2px; position:absolute; top:1.25rem; left:50%; transform:translateX(-50%);"></div>
      <img class="downloadable-icon" data-type="duotone" data-name="${iconName}" src="${CDN_BASE_URL}Duotone/${iconName}.svg" width="24" height="24" alt="${iconName} duotone style" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div class="icon-placeholder" style="display:none; width:24px; height:24px; background:var(--border-muted); border-radius:2px; position:absolute; top:4rem; left:50%; transform:translateX(-50%);"></div>
      <img class="downloadable-icon" data-type="fill" data-name="${iconName}" src="${CDN_BASE_URL}Fill/${iconName}.svg" width="24" height="24" alt="${iconName} fill style" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div class="icon-placeholder" style="display:none; width:24px; height:24px; background:var(--border-muted); border-radius:2px; position:absolute; top:6.75rem; left:50%; transform:translateX(-50%);"></div>
      <div id="icon-${index}-desc" class="sr-only">Available in line, duotone, and fill styles. Press Enter or Space to download.</div>
    </div>`;
});

const fullHtmlContent = `<!DOCTYPE html>
<html lang="en" color-scheme="light">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="preload" href="fonts/sargam.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Sargam Icons</title>
  <meta name="description" content="A collection of open-source icons crafted to match your exquisite designs.">
  <meta name="author" content="@planetabhi" />
  <meta property="og:title" content="Sargam Icons" />
  <meta property="og:url" content="https://sargamicons.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="A collection of open-source icons crafted to match your exquisite designs.." />
  <meta property="og:site_name" content="Sargam Icons" />
  <link rel="apple-touch-icon" href="icon.png">
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
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <a href="#icon-grid" class="skip-link">Skip to icon grid</a>
  
  <nav class="top-nav" aria-label="Primary">
    <div class="top-nav-inner">
      <div class="lhs">
        <a href="/" class="brand" aria-label="Sargam Icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="var(--content-primary)" clip-path="url(#a)"><path fill-rule="evenodd" d="M29.163 16.038a5.965 5.965 0 0 0-3.234-3.972 4.934 4.934 0 0 0-2.13-.429.134.134 0 0 1-.12-.206c.38-.625.614-1.329.686-2.057a5.97 5.97 0 0 0-1.821-4.802 5.487 5.487 0 0 0-2.247-1.348c-1.474-.443-2.637-.216-3.268.635-.35.504-.543 1.1-.552 1.714a2.86 2.86 0 0 0 .453 1.846 2.174 2.174 0 0 0 1.509.881 2.134 2.134 0 0 0 1.642-.531 2.077 2.077 0 0 0 .687-1.499.593.593 0 0 0-.498-.607.566.566 0 0 0-.635.562.932.932 0 0 1-.318.686.99.99 0 0 1-.762.25 1.027 1.027 0 0 1-.71-.414 1.77 1.77 0 0 1-.246-1.129c.004-.393.123-.775.342-1.1.443-.594 1.465-.399 2.034-.227a4.36 4.36 0 0 1 1.78 1.073 4.886 4.886 0 0 1 1.486 3.865 4.189 4.189 0 0 1-2.172 3.156l-.027.02-.147.086a.343.343 0 0 1-.447-.089 5.691 5.691 0 0 0-8.917 0 .343.343 0 0 1-.442.09l-.148-.087-.027-.02A4.194 4.194 0 0 1 8.743 9.23a4.908 4.908 0 0 1 1.484-3.865 4.37 4.37 0 0 1 1.784-1.073c.57-.172 1.592-.371 2.034.226.22.325.34.708.343 1.101.046.393-.04.79-.243 1.129a1.03 1.03 0 0 1-.71.414.98.98 0 0 1-.765-.25.933.933 0 0 1-.32-.686.565.565 0 0 0-.634-.562.593.593 0 0 0-.497.606 2.081 2.081 0 0 0 1.451 1.94 2.168 2.168 0 0 0 2.397-.773c.358-.544.52-1.194.456-1.842a3.13 3.13 0 0 0-.552-1.715c-.634-.85-1.794-1.077-3.268-.634a5.466 5.466 0 0 0-2.247 1.348 5.96 5.96 0 0 0-1.821 4.801c.071.729.306 1.432.686 2.058a.134.134 0 0 1-.12.206 4.929 4.929 0 0 0-2.127.429 5.978 5.978 0 0 0-3.237 3.971 5.519 5.519 0 0 0-.045 2.62c.343 1.5 1.132 2.401 2.185 2.511.092.007.185.007.278 0 .52-.012 1.03-.149 1.488-.398a2.83 2.83 0 0 0 1.372-1.313 2.164 2.164 0 0 0 0-1.746 2.123 2.123 0 0 0-2.12-1.254 2.093 2.093 0 0 0-.806.242.593.593 0 0 0-.278.738.566.566 0 0 0 .803.267.929.929 0 0 1 .765-.075.988.988 0 0 1 .682.948c0 .141-.029.28-.085.41-.19.347-.49.62-.854.775-.338.198-.728.291-1.119.267-.737-.085-1.076-1.07-1.213-1.65a4.36 4.36 0 0 1 .04-2.077 4.877 4.877 0 0 1 2.607-3.221 4.191 4.191 0 0 1 3.814.302l.178.103a.343.343 0 0 1 .144.428 5.703 5.703 0 0 0 4.761 7.752v.398a.517.517 0 0 0 0 .102 4.181 4.181 0 0 1-1.647 3.458 4.901 4.901 0 0 1-4.094.655 4.384 4.384 0 0 1-1.828-1.03c-.436-.407-1.118-1.196-.824-1.875.175-.351.45-.642.789-.837a1.773 1.773 0 0 1 1.098-.343 1.028 1.028 0 0 1 .717.404.993.993 0 0 1 .008 1.147.944.944 0 0 1-.29.267.562.562 0 0 0-.144.86.593.593 0 0 0 .752.094 2.077 2.077 0 0 0 .946-1.349 2.122 2.122 0 0 0-.36-1.687 2.178 2.178 0 0 0-1.52-.864 2.822 2.822 0 0 0-1.82.528c-.53.313-.954.78-1.215 1.337-.422.974-.034 2.093 1.084 3.149a5.463 5.463 0 0 0 2.291 1.269 6.198 6.198 0 0 0 1.687.233 5.785 5.785 0 0 0 3.372-1.05 4.859 4.859 0 0 0 1.433-1.632.14.14 0 0 1 .193-.052c.021.012.04.03.051.052a4.87 4.87 0 0 0 1.437 1.633 5.769 5.769 0 0 0 3.369 1.049c.57 0 1.138-.078 1.686-.234a5.463 5.463 0 0 0 2.292-1.268c1.122-1.056 1.506-2.175 1.084-3.149a3.086 3.086 0 0 0-1.211-1.337 2.84 2.84 0 0 0-1.825-.528 2.163 2.163 0 0 0-1.516.864 2.11 2.11 0 0 0-.36 1.687 2.059 2.059 0 0 0 .947 1.348.593.593 0 0 0 .751-.093.568.568 0 0 0-.144-.86.92.92 0 0 1-.446-.628.982.982 0 0 1 .165-.786 1.027 1.027 0 0 1 .713-.404c.394-.012.78.109 1.098.343.34.195.616.486.792.837.292.686-.391 1.468-.823 1.876a4.396 4.396 0 0 1-1.821 1.005 4.902 4.902 0 0 1-4.092-.649 4.198 4.198 0 0 1-1.647-3.453v-.207a.343.343 0 0 1 .299-.342 5.713 5.713 0 0 0 4.85-5.615 5.652 5.652 0 0 0-.392-2.057.344.344 0 0 1 .145-.429l.181-.107a4.199 4.199 0 0 1 3.818-.302 4.892 4.892 0 0 1 2.603 3.221c.178.679.19 1.39.035 2.075-.138.58-.478 1.564-1.212 1.65a1.979 1.979 0 0 1-1.121-.268 1.755 1.755 0 0 1-.853-.775 1.029 1.029 0 0 1 0-.82.987.987 0 0 1 .596-.538.944.944 0 0 1 .717.048.617.617 0 0 0 .761-.096.562.562 0 0 0-.148-.857 2.084 2.084 0 0 0-1.68-.172 2.115 2.115 0 0 0-1.28 1.142 2.164 2.164 0 0 0 0 1.746 2.84 2.84 0 0 0 1.372 1.313 3.06 3.06 0 0 0 1.767.381c1.05-.12 1.828-1.029 2.181-2.51a5.487 5.487 0 0 0-.038-2.617ZM16 11.421a4.57 4.57 0 0 1 3.379 1.496.342.342 0 0 1-.086.531l-2.95 1.715a.685.685 0 0 1-.686 0l-2.95-1.715a.342.342 0 0 1-.082-.531A4.562 4.562 0 0 1 16 11.42Zm-4.579 4.589c.002-.465.074-.928.213-1.371a.342.342 0 0 1 .5-.192l2.957 1.714a.686.686 0 0 1 .343.594v3.409a.342.342 0 0 1-.419.343 4.585 4.585 0 0 1-3.594-4.497Zm9.158 0a4.582 4.582 0 0 1-3.591 4.459.343.343 0 0 1-.415-.343V16.72a.686.686 0 0 1 .343-.593l2.953-1.715a.344.344 0 0 1 .5.195c.143.454.214.928.21 1.403Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0ZM1.132 16C1.132 7.789 7.789 1.132 16 1.132S30.868 7.789 30.868 16 24.211 30.868 16 30.868 1.132 24.211 1.132 16Z" clip-rule="evenodd"/><path d="M4.727 8.981a1.029 1.029 0 1 1 1.144 1.711 1.029 1.029 0 0 1-1.144-1.71Zm21.974-.173a1.029 1.029 0 1 0 0 2.057 1.029 1.029 0 0 0 0-2.057ZM16 27.328a1.029 1.029 0 1 0 0 2.059 1.029 1.029 0 0 0 0-2.058Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></svg>
        </a>
        <span class="version-pill" aria-label="Version">v1.5.0</span>
      </div>
      <div class="rhs">
        <a href="https://www.figma.com/community/file/1152296792728333709/sargam-icons" target="_blank" rel="noopener noreferrer" aria-label="Figma">Figma</a>
        <a href="https://github.com/planetabhi/sargam-icons" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        <a href="https://github.com/SargamDesign/sargam-icons-react" target="_blank" rel="noopener noreferrer" aria-label="ReactJS">React</a>
        
        <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" aria-pressed="false">
        <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256"/>
        </svg>
        <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" style="display:none">
          <g clip-path="url(#a)">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556-1.414-1.414M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/>
          </g>
          <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z"/>
          </clipPath>
          </defs>
        </svg>
        </button>
      </div>
    </div>
  </nav>
  
  <header>
    <div class="header-content">
      <h1>It Takes a Pro to Know the Difference Between Sargam & Just Icons</h1>
      <div class="CTAs">
        <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-1.5.0.tgz" aria-label="Download Sargam Icons"><span>Download All SVGs (1080)</span></a>
      </div>
    </div>
  </header>

  <main id="main-content">
    <div class="search-container">
      <label for="icon-search" class="sr-only">Search icons</label>
      <div class="search-wrapper">
        <input id="icon-search" type="search" placeholder="Search sargam icons ..." aria-label="Search icons" autocomplete="off" inputmode="search" />
        <button id="icon-search-clear" type="button" class="clear-search" aria-label="Clear search" hidden>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"/>
          </svg>
        </button>
      </div>
    </div>
    <section id="icon-grid" aria-labelledby="icon-grid-heading">
      <h2 id="icon-grid-heading" class="sr-only">Icon Collection</h2>
      <div class="flex-grid" aria-label="Collection of 300+ icons">
        ${iconGridContent}
      </div>
    </section>
  </main>
  <div class="details">
    <p>With simplicity, consistency, and flexibility in mind, each icon has been designed on a 24 x 24 grid to meet your essential digital needs.</p>
    <ul>
      <li>Built using SVG stroke, providing maximum flexibility on styling.</li>
      <li>Optimized for better web performance.</li>
      <li>Install for <a href="https://www.figma.com/community/file/1152296792728333709">Figma</a>, <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-1.5.0.tgz">optimized SVGs</a>, and <a href="https://github.com/SargamDesign/sargam-icons-react">React</a>.</li>
      <li>To request a new icon, please <a href="https://github.com/planetabhi/sargam-icons/issues">open a GitHub issue</a>.</li>
      <li>Support us on <a href="https://buymeacoffee.com/planetabhi">Buy Me a Coffee</a>.</li>
    </ul>
  </div>
  <footer>
    <div class="footer-content">
      ABHIMANYU RANA 2025 ©<br /> MIT License &middot; By <a href="https://planetabhi.com/">@planetabhi</a> (^０^)ノ <br /> <a href="https://www.jsdelivr.com/package/npm/sargam-icons"><img src="https://data.jsdelivr.com/v1/package/npm/sargam-icons/badge" alt="jsdelivr package download stats" style="margin: 0 auto; padding-top: 0.5rem; aspect-ratio: auto;"></a>
    </div>
  </footer>

   <script>
    function initFontLoading() {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
          document.body.classList.add('font-loaded');
          document.body.classList.remove('font-loading');
        });
        
        document.body.classList.add('font-loading');
        
        setTimeout(function() {
          if (document.body.classList.contains('font-loading')) {
            document.body.classList.add('font-loaded');
            document.body.classList.remove('font-loading');
          }
        }, 3000);
      }
    }
    
    function initProgressiveLoading() {
      const images = document.querySelectorAll('.downloadable-icon');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              
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
              
              observer.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.1
        });
        
        images.forEach(img => imageObserver.observe(img));
      } else {
        images.forEach(img => {
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
        });
      }
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initFontLoading();
        initProgressiveLoading();
      });
    } else {
      initFontLoading();
      initProgressiveLoading();
    }
    
    function downloadIcon(iconElement) {
      const iconName = iconElement.getAttribute("data-name");
      const iconType = iconElement.getAttribute("data-type");
      const iconUrl = iconElement.src;
      
      fetch(iconUrl)
        .then(function(response) { return response.blob(); })
        .then(function(blob) {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = iconName + "-" + iconType + ".svg";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        })
        .catch(function(error) { 
          console.error("Failed to download the icon:", error);
          alert("Failed to download the icon. Please try again."); 
        });
    }
    
    document.querySelector(".flex-grid").addEventListener("click", function(e) {
      if (e.target.classList.contains("downloadable-icon")) {
        downloadIcon(e.target);
      }
    });
    
    document.querySelector(".flex-grid").addEventListener("keydown", function(e) {
      if (e.target.classList.contains("flex-grid-item")) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const firstIcon = e.target.querySelector(".downloadable-icon");
          if (firstIcon) {
            downloadIcon(firstIcon);
          }
        }
      }
    });

    (function initThemeToggle() {
      var KEY = 'color-scheme';
      var el = document.documentElement;
      var saved = localStorage.getItem(KEY);
      var media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      function apply(theme) {
        el.setAttribute('color-scheme', theme);
      }
      function currentSystemTheme() {
        return media && media.matches ? 'dark' : 'light';
      }

      if (saved === 'dark' || saved === 'light') {
        apply(saved);
      } else {
        apply('light');
      }
      var btn = document.getElementById('theme-toggle');
      function syncIcons() {
        var isDark = (el.getAttribute('color-scheme') || 'light') === 'dark';
        var sun = document.getElementById('icon-sun');
        var moon = document.getElementById('icon-moon');
        var btn = document.getElementById('theme-toggle');
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
          var current = el.getAttribute('color-scheme') || 'light';
          var next = current === 'light' ? 'dark' : 'light';
          apply(next);
          try { localStorage.setItem(KEY, next); } catch (e) {}
          syncIcons();
        });
      }
    })();

  </script>

</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'src', 'template.html'), fullHtmlContent);
console.log('template.html generated successfully');