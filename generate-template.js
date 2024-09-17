const fs = require('fs');
const path = require('path');

function getIconNames(directory) {
  return fs.readdirSync(directory)
    .filter(file => file.endsWith('.svg'))
    .map(file => path.basename(file, '.svg'));
}

const iconNames = getIconNames(path.join(__dirname, 'Icons', 'Line'));

const CDN_BASE_URL = 'https://cdn.jsdelivr.net/npm/sargam-icons@1.4.6/Icons/';

let iconGridContent = '';
iconNames.forEach(iconName => {
  iconGridContent += `
    <div class="flex-grid-item">
      <img data-type="line" src="${CDN_BASE_URL}Line/${iconName}.svg" width="24" height="24" alt="${iconName}">
      <img data-type="duotone" src="${CDN_BASE_URL}Duotone/${iconName}.svg" width="24" height="24" alt="${iconName}">
      <img data-type="fill" src="${CDN_BASE_URL}Fill/${iconName}.svg" width="24" height="24" alt="${iconName}">
    </div>`;
});

const fullHtmlContent = `<!DOCTYPE html>
<html lang="en" color-scheme="light">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title><%= htmlWebpackPlugin.options.title %></title>
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
  <div class="github-button" style="position: absolute; top: 24px; right: 24px;" aria-label="Star planetabhi/sargam-icons on GitHub">
    <iframe src="https://ghbtns.com/github-btn.html?user=planetabhi&repo=sargam-icons&type=star&count=true" frameborder="0" scrolling="0" width="100" height="30" title="GitHub"></iframe>
  </div>
  <header>
    <h1>A Collection <span>of</span> 300+ Open-source Icons <wbr> Devoted <span>to</span> Match Your Exquisite Designs</h1>
    <div class="CTAs">
      <a href="https://www.figma.com/community/file/1152296792728333709"><button>Get a Figma Copy</button></a>
      <a href="https://github.com/planetabhi/sargam-icons/archive/HEAD.zip" aria-label="Download Sargam Icons"><button>Download SVGs</button></a>
    </div>
  </header>
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
      <li>Install for <a href="https://www.figma.com/community/file/1152296792728333709">Figma</a>, <a href="https://github.com/planetabhi/sargam-icons">optimized SVGs</a>, and <a href="https://github.com/SargamDesign/sargam-icons-react">React</a>.</li>
      <li>Request a new icon by creating <a href="https://github.com/planetabhi/sargam-icons/issues">an issue here</a>.</li>
      <li>For more open-source design foundations, explore <a href="https://new-ui.com/docs/getting-started/installation">New UI</a>.</li>
    </ul>
  </div>
  <footer>MIT License, Copyright (c) 2024 Method Black. <br /> Brought to you by <a href="https://planetabhi.com/">@planetabhi</a>. <br /> <a href="https://www.jsdelivr.com/package/npm/sargam-icons"><img src="https://data.jsdelivr.com/v1/package/npm/sargam-icons/badge" style="margin: 0 auto; padding-top: 0.5rem;"></a></footer>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'src', 'template.html'), fullHtmlContent);

console.log('template.html has been generated successfully.');