const fs = require('fs');
const path = require('path');
const sass = require('sass');

function getIconNames(directory) {
  return fs.readdirSync(directory)
    .filter(function(file) { return file.endsWith('.svg'); })
    .map(function(file) { return path.basename(file, '.svg'); });
}

function getCriticalCSS() {
  // Extract only the essential styles needed for initial render
  // This prevents CLS without duplicating your existing base.scss
  return `
    :root {
      font-size: 16px;
      --serif: "EB Garamond 12", 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif;
      --serif-sc: "EB Garamond SC 12", 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif;
      --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      scroll-behavior: smooth;
      scroll-padding-top: 2rem;
    }
    
    html, body {
      background-color: #f8f7f7;
      margin: 0;
      padding: 0;
    }
    
    body {
      color: #100f0f;
      font: 400 1em/1.5 var(--serif);
      font-kerning: normal;
      overflow-wrap: break-word;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--serif-sc);
      font-synthesis: none;
    }
    
    
    main {
      margin: 0 1.5rem;
    }
    
    header {
      margin: 6rem auto 4rem;
      text-align: center;
      max-inline-size: 32.5rem;
    }
    
    .flex-grid {
      display: flex;
      flex-wrap: wrap;
    }
    
    .flex-grid-item {
      flex: 1 0 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      margin: 0 0.125rem 0.25rem;
      height: 9.5rem;
      border: 1px dotted #c4bdbf;
      border-radius: 0.25rem;
      background: #f8f7f7;
      content-visibility: auto;
      contain-intrinsic-size: 0 9.5rem;
    }
    
    .flex-grid-item img {
      width: 24px;
      height: 24px;
      position: absolute;
      object-fit: contain;
      aspect-ratio: 1 / 1;
      cursor: pointer;
      opacity: 0.3;
      transition: opacity 0.3s ease;
      will-change: opacity;
    }
    
    .flex-grid-item img[data-type="line"] { top: 1.25rem; }
    .flex-grid-item img[data-type="duotone"] { top: 4rem; }
    .flex-grid-item img[data-type="fill"] { top: 6.75rem; }
    
    .github-button {
      position: absolute;
      top: 24px;
      right: 24px;
    }
    
    @media screen and (max-width: 639px) {
      header { margin: 2rem auto; padding: 0 1.5rem; }
      main { margin: 0 0.75rem; }
    }
    
    .skip-link {
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
      font-size: 14px;
    }
    
    .skip-link:focus {
      top: 6px;
    }
    
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    
  `;
}

const iconNames = getIconNames(path.join(__dirname, 'Icons', 'Line'));
const CDN_BASE_URL = 'https://cdn.jsdelivr.net/npm/sargam-icons@1.4.11/Icons/';
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
  <!-- Critical font preloading - prioritize most important fonts -->
  <link rel="preload" href="fonts/EBGaramondSC12-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/EBGaramond12-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <!-- Non-critical font - load after initial render -->
  <link rel="preload" href="fonts/EBGaramond12-Italic.woff2" as="font" type="font/woff2" crossorigin media="print" onload="this.media='all'">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Sargam Icons</title>
  <meta name="description" content="300+ open-source icons">
  <meta name="author" content="@planetabhi" />
  <meta property="og:title" content="Sargam Icons" />
  <meta property="og:url" content="https://sargamicons.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="300+ open-source icons." />
  <meta property="og:site_name" content="Sargam Icons" />
  <link rel="apple-touch-icon" href="icon.png">
  <style>${criticalCSS}</style>
</head>
<body>
  <!-- Skip Links for Accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <a href="#icon-grid" class="skip-link">Skip to icon grid</a>
  
  <header>
    <h1>A Collection <span>of</span> 300+ Open-source Icons <wbr> Devoted <span>to</span> Match Your Exquisite Designs</h1>
    <div class="CTAs">
      <a href="https://www.figma.com/community/file/1152296792728333709"><span>Get a Figma Copy</span></a>
      <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-1.4.11.tgz" aria-label="Download Sargam Icons"><span>Download SVGs</span></a>
    </div>
  </header>

  <div class="github-button" style="position: absolute; top: 24px; right: 24px;" aria-label="Star planetabhi/sargam-icons on GitHub" tabindex="-1">
    <iframe src="https://ghbtns.com/github-btn.html?user=planetabhi&repo=sargam-icons&type=star&count=true" frameborder="0" scrolling="0" width="100" height="30" title="GitHub" tabindex="-1"></iframe>
  </div>

  <main id="main-content">
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
      <li>Optimized SVG exports for better web performance.</li>
      <li>Install for <a href="https://www.figma.com/community/file/1152296792728333709">Figma</a>, <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-1.4.11.tgz">optimized SVGs</a>, and <a href="https://github.com/SargamDesign/sargam-icons-react">React</a>.</li>
      <li>Also available in the <a href="https://www.framer.com/updates/icon-set-sargam" target="_blank" rel="noopener noreferrer">Framer</a> insert panel.</li>
    </ul>
  </div>
  <footer>ABHIMANYU RANA 2025 ©<br /> MIT License &middot; By <a href="https://planetabhi.com/">@planetabhi</a> (^０^)ノ <br /> <a href="https://www.jsdelivr.com/package/npm/sargam-icons"><img src="https://data.jsdelivr.com/v1/package/npm/sargam-icons/badge" alt="jsdelivr package download stats" style="margin: 0 auto; padding-top: 0.5rem; aspect-ratio: auto;"></a></footer>

   <script>
    // Font loading optimization
    function initFontLoading() {
      // Check if fonts are already loaded
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
          document.body.classList.add('font-loaded');
          document.body.classList.remove('font-loading');
        });
        
        // Add loading class initially
        document.body.classList.add('font-loading');
        
        // Fallback timeout in case fonts fail to load
        setTimeout(function() {
          if (document.body.classList.contains('font-loading')) {
            document.body.classList.add('font-loaded');
            document.body.classList.remove('font-loading');
          }
        }, 3000);
      }
    }
    
    // Progressive image loading with Intersection Observer
    function initProgressiveLoading() {
      const images = document.querySelectorAll('.downloadable-icon');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              
              // Image is already styled with opacity 0.3 in CSS
              
              // Preload the image
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
          rootMargin: '50px 0px', // Start loading 50px before entering viewport
          threshold: 0.1
        });
        
        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
          // Image is already styled with opacity 0.3 in CSS
          
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
    
    // Initialize font and image loading when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initFontLoading();
        initProgressiveLoading();
      });
    } else {
      initFontLoading();
      initProgressiveLoading();
    }
    
    // Download functionality with keyboard support
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
    
    // Click handler
    document.querySelector(".flex-grid").addEventListener("click", function(e) {
      if (e.target.classList.contains("downloadable-icon")) {
        downloadIcon(e.target);
      }
    });
    
    // Keyboard handler
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

  </script>

</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'src', 'template.html'), fullHtmlContent);
console.log('template.html generated successfully');