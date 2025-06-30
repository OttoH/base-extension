#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Building SOULVET Extension...\n');

try {
  // Clean dist directory
  const distPath = './dist';
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true });
  }
  fs.mkdirSync(distPath, { recursive: true });

  // Run webpack build
  console.log('Running webpack...');
  execSync('npx webpack --mode=production', { stdio: 'inherit' });
  
  console.log('\nBuild completed successfully!');
  console.log('Extension ready in dist/ folder');
  console.log('\nTo test:');
  console.log('1. Open chrome://extensions/');
  console.log('2. Enable Developer mode');
  console.log('3. Click "Load unpacked"');
  console.log('4. Select the dist/ folder');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}