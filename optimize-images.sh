#!/bin/bash

echo "🖼️  Optimizing images for web deployment..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install imagemagick
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update && sudo apt-get install -y imagemagick
    else
        echo "❌ Please install ImageMagick manually: https://imagemagick.org/"
        exit 1
    fi
fi

# Create optimized versions of images
echo "📸 Optimizing company logo..."

# Optimize PNG logo
if [ -f "public/image (3).png" ]; then
    convert "public/image (3).png" -strip -quality 85 "public/logo-optimized.png"
    echo "✅ Logo optimized: logo-optimized.png"
    
    # Create different sizes for responsive design
    convert "public/image (3).png" -resize 32x32 "public/logo-32x32.png"
    convert "public/image (3).png" -resize 64x64 "public/logo-64x64.png"
    convert "public/image (3).png" -resize 128x128 "public/logo-128x128.png"
    echo "✅ Responsive logo sizes created"
else
    echo "❌ Logo file not found: public/image (3).png"
fi

echo ""
echo "🎯 Image optimization complete!"
echo "📁 Optimized files:"
echo "   - logo-optimized.png (main logo)"
echo "   - logo-32x32.png (favicon size)"
echo "   - logo-64x64.png (header size)"
echo "   - logo-128x128.png (high-res)"
echo ""
echo "💡 Update your components to use optimized images:"
echo "   - Replace 'image (3).png' with 'logo-optimized.png'"
echo "   - Use appropriate sizes for different contexts" 