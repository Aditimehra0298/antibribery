#!/bin/bash

echo "🚀 Building Eurocert Anti-Bribery Platform..."

# Clean previous build
rm -rf dist

# Install dependencies
npm install

# Build the project
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output: dist/"
echo ""
echo "🌐 To deploy to Netlify:"
echo "1. Drag and drop the 'dist' folder to Netlify"
echo "2. Or use Netlify CLI: netlify deploy --prod --dir=dist"
echo ""
echo "📋 Make sure to upload these files to Netlify manually:"
echo "- public/image (3).png"
echo "- public/invideo-anti-bribery-compliance.mp4"
echo ""
echo "🔧 Configuration files created:"
echo "- netlify.toml (Netlify settings)"
echo "- public/_redirects (SPA routing)" 