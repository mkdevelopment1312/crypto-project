<!--- Copyright © 2025 Kamil Maslanka -->

# XAXACURRENCY - Anonymous Cryptocurrency Project

A modern, single-page React application showcasing XAXACURRENCY - the future of anonymous cryptocurrency. Built with React, TypeScript, and TailwindCSS using CDN-hosted dependencies for optimal GitHub Pages compatibility.

## 🚀 Features

- **Single Page Application**: Complete React app in one HTML file
- **CDN-Based Dependencies**: No build process required
- **GitHub Pages Ready**: Optimized for GitHub Pages hosting
- **Modern Design**: Clean, professional cryptocurrency-themed UI
- **Responsive Layout**: Works perfectly on all devices
- **TypeScript Support**: Type-safe development with Babel
- **TailwindCSS Styling**: Utility-first CSS framework

## 📁 Project Structure

```
public/
├── index.html          # Main single-page application
└── favicon.svg         # Custom favicon (stylized 'K')

src/
└── App.tsx            # TypeScript React components (reference)

README.md              # This file
```

## 🌐 GitHub Pages Deployment

### Option 1: Automatic Deployment via GitHub Actions

1. **Fork or Clone** this repository to your GitHub account

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. **Create GitHub Actions Workflow**:
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: './public'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v3
   ```

4. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Deploy XAXACURRENCY to GitHub Pages"
   git push origin main
   ```

5. **Access Your Site**:
   Your site will be available at: `https://yourusername.github.io/yourrepository`

### Option 2: Manual Deployment

1. **Enable GitHub Pages**:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

2. **Upload Files**:
   - Ensure your `public/index.html` and `public/favicon.svg` are in the root directory
   - Commit and push changes

3. **Access Your Site**:
   Your site will be available at: `https://yourusername.github.io/yourrepository`

## 🛠️ Local Development

Since this is a CDN-based application, you can simply:

1. **Open the HTML file** directly in your browser:
   ```bash
   # Navigate to the project directory
   cd crypto-project
   
   # Open in default browser (Windows)
   start public/index.html
   
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000/public/
   ```

2. **Live Server Extension** (VS Code):
   - Install the Live Server extension
   - Right-click on `public/index.html`
   - Select "Open with Live Server"

## 🎨 Customization

### Favicon
The favicon is a custom SVG featuring a stylized 'K' for Kamil Maslanka. To customize:
1. Edit `public/favicon.svg`
2. Modify the SVG path and colors as needed

### Styling
All styles are handled via TailwindCSS CDN. Custom colors are defined in the HTML file:
- `crypto-dark`: #0a0a0a
- `crypto-blue`: #00d4ff
- `crypto-purple`: #8b5cf6
- `crypto-green`: #10b981

### Content
Edit the React components directly in the `<script type="text/babel">` section of `public/index.html`.

## 🔧 Technical Details

- **React**: 18.x via CDN
- **ReactDOM**: 18.x via CDN
- **TailwindCSS**: Latest via CDN
- **Babel**: Standalone for JSX transformation
- **TypeScript**: Supported via Babel

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📄 License

Copyright © 2025 Kamil Maslanka. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

**Built with ❤️ for the future of anonymous cryptocurrency.**
