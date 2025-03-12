const fs = require('fs');
const path = require('path');

function getIconNames(directory) {
  return fs.readdirSync(directory)
    .filter(function(file) { return file.endsWith('.svg'); })
    .map(function(file) { return path.basename(file, '.svg'); });
}

const iconNames = getIconNames(path.join(__dirname, 'Icons', 'Line'));
const CDN_BASE_URL = 'https://cdn.jsdelivr.net/npm/sargam-icons@1.4.8/Icons/';

let iconGridContent = '';
iconNames.forEach(function(iconName) {
  iconGridContent += `
    <div class="flex-grid-item" data-icon-name="${iconName}">
      <img class="downloadable-icon" data-type="line" data-name="${iconName}" src="${CDN_BASE_URL}Line/${iconName}.svg" width="24" height="24" alt="${iconName}">
      <img class="downloadable-icon" data-type="duotone" data-name="${iconName}" src="${CDN_BASE_URL}Duotone/${iconName}.svg" width="24" height="24" alt="${iconName}">
      <img class="downloadable-icon" data-type="fill" data-name="${iconName}" src="${CDN_BASE_URL}Fill/${iconName}.svg" width="24" height="24" alt="${iconName}">
    </div>`;
});

const fullHtmlContent = `<!DOCTYPE html>
<html lang="en" color-scheme="light">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
</head>
<body>
  <header>
    <h1>A Collection <span>of</span> 300+ Open-source Icons <wbr> Devoted <span>to</span> Match Your Exquisite Designs</h1>
    <div class="CTAs">
      <a href="https://www.figma.com/community/file/1152296792728333709"><span>Get a Figma Copy</span></a>
      <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-1.4.8.tgz" aria-label="Download Sargam Icons"><span>Download SVGs</span></a>
    </div>
  </header>

  <div class="github-button" style="position: absolute; top: 24px; right: 24px;" aria-label="Star planetabhi/sargam-icons on GitHub" tabindex="-1">
    <iframe src="https://ghbtns.com/github-btn.html?user=planetabhi&repo=sargam-icons&type=star&count=true" frameborder="0" scrolling="0" width="100" height="30" title="GitHub" tabindex="-1"></iframe>
  </div>

  <main>
    <div class="flex-grid">
      ${iconGridContent}
    </div>

  </main>
  <div class="details">
    <p>With simplicity, consistency, and flexibility in mind, each icon has been designed on a 24 x 24 grid to meet your essential digital needs.</p>
    <ul>
      <li>Built using SVG stroke, providing maximum flexibility on styling.</li>
      <li>Optimized SVG exports for better web performance.</li>
      <li>Install for <a href="https://www.figma.com/community/file/1152296792728333709">Figma</a>, <a href="https://registry.npmjs.org/sargam-icons/-/sargam-icons-1.4.8.tgz">optimized SVGs</a>, and <a href="https://github.com/SargamDesign/sargam-icons-react">React</a>.</li>
    </ul>
  </div>
  <footer>ABHIMANYU RANA 2025 ©<br /> MIT License &middot; By <a href="https://planetabhi.com/">@planetabhi</a> (^０^)ノ <br /> <a href="https://www.jsdelivr.com/package/npm/sargam-icons"><img src="https://data.jsdelivr.com/v1/package/npm/sargam-icons/badge" style="margin: 0 auto; padding-top: 0.5rem;"></a></footer>

   <script>
    document.querySelector(".flex-grid").addEventListener("click", function(e) {
      if (e.target.classList.contains("downloadable-icon")) {
        const iconName = e.target.getAttribute("data-name");
        const iconType = e.target.getAttribute("data-type");
        const iconUrl = e.target.src;
        
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
    });

  </script>

</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'src', 'template.html'), fullHtmlContent);
console.log('template.html generated successfully');