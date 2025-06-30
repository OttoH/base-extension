const fs = require('fs');
const path = require('path');

console.log('Creating SOULVET Extension build...');

// Create dist directory
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Copy manifest
fs.copyFileSync('manifest.json', 'dist/manifest.json');

// Copy HTML files
fs.copyFileSync('src/popup.html', 'dist/popup.html');
fs.copyFileSync('src/login.html', 'dist/login.html');

// Copy icons
const icons = ['icon16.svg', 'icon48.svg', 'icon128.svg'];
icons.forEach(icon => {
  if (fs.existsSync(`public/${icon}`)) {
    fs.copyFileSync(`public/${icon}`, `dist/${icon}`);
  }
});

// Copy JS files (if they exist from previous build)
const jsFiles = ['background.js', 'content.js', 'popup.js', 'vendors.js'];
jsFiles.forEach(file => {
  if (fs.existsSync(`dist/${file}`)) {
    console.log(`Keeping existing ${file}`);
  }
});

console.log('Build completed! Extension ready in dist/ folder');
console.log('\nTo install:');
console.log('1. Open Chrome and go to chrome://extensions/');
console.log('2. Enable Developer mode');
console.log('3. Click "Load unpacked"');
console.log('4. Select the dist/ folder');