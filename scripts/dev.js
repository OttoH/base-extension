#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Development script for SOULVET Content Extractor Extension

console.log('🐾 Starting SOULVET Content Extractor development build...\n');
console.log('📦 Running webpack in watch mode...');
console.log('🔄 Files will rebuild automatically when changed\n');

const webpack = spawn('npx', ['webpack', '--mode=development', '--watch'], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..')
});

webpack.on('close', (code) => {
  if (code !== 0) {
    console.error(`\n❌ Development build exited with code ${code}`);
    process.exit(code);
  }
});

webpack.on('error', (error) => {
  console.error('\n❌ Development build failed:', error.message);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping development build...');
  webpack.kill();
  process.exit(0);
});