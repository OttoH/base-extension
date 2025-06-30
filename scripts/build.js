#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Build script for SOULVET Content Extractor Extension

console.log('🐾 Building SOULVET Content Extractor Extension...\n');

// Check if dist directory exists, create if not
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

try {
  // Run webpack build
  console.log('📦 Running webpack build...');
  execSync('npx webpack --mode=production', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('\n✅ Build completed successfully!');
  console.log('\n📁 Extension files are ready in the dist/ folder');
  console.log('\n🔧 To load in Chrome/Edge:');
  console.log('   1. Go to chrome://extensions/ or edge://extensions/');
  console.log('   2. Enable "Developer mode"');
  console.log('   3. Click "Load unpacked"');
  console.log('   4. Select the dist/ folder');
  
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}