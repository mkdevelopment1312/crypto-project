<!--- Copyright © 2025 Kamil Maslanka -->

# Favicon Instructions

## Current Favicon
The project uses a simple SVG favicon located at `/public/favicon.svg` which displays a stylized "K" for Kamil Maslanka.

## Creating a Proper ICO File
To create a proper `favicon.ico` file, you can:

1. **Online Converter**: Use tools like favicon.io or realfavicongenerator.net
   - Upload the SVG file
   - Download the generated ICO file
   - Replace `/public/favicon.svg` with `/public/favicon.ico`
   - Update the HTML link tag to `<link rel="icon" type="image/x-icon" href="/favicon.ico" />`

2. **Design Software**: Create a 32x32 pixel icon in:
   - Adobe Photoshop (Export as ICO)
   - GIMP (Export as ICO)
   - Figma/Sketch (Export as ICO via plugins)

3. **Command Line**: Use ImageMagick
   ```bash
   convert favicon.svg -resize 32x32 favicon.ico
   ```

## Favicon Specifications
- **Size**: 32x32 pixels (standard)
- **Format**: ICO (recommended) or PNG/SVG
- **Colors**: Dark blue background (#1a1a2e) with cyan text (#00d4ff)
- **Content**: Stylized letter "K" representing Kamil Maslanka
