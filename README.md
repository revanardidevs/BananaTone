# 🐰 BananaTone — Free Online Ear Training for Musicians

BananaTone is a modern, fast, and beautiful in-browser ear training web application designed to help musicians improve their relative pitch and musical ear. Features include practice exercises for intervals, chords, single notes, and scales, complete with keyboard shortcuts, visual feedback, dark/light theme support, and responsive layouts.

## ✨ Key Features

- **Interval Training**: Recognize minor seconds up to octaves.
- **Chord Training**: Identify triads, sevenths, and extensions.
- **Note Training**: Train your perfect or relative pitch with single notes.
- **Scale Training**: Learn to identify major, minor, pentatonic, and modal scales.
- **No Setup Needed**: Zero dependencies, runs directly in your web browser.
- **Beautiful Design**: Smooth dark and light mode styling with premium interactive elements.

## 🛠 Tech Stack & Architecture

This is a **pure static site** with no build steps or complex framework dependencies:
- **HTML5**: Structured semantic pages.
- **Vanilla CSS**: Premium modern styling, dynamic glassmorphism, responsive grid layouts, and custom interactive themes.
- **Vanilla JavaScript**: Pure ES6 logic driving client-side audio synthesis, scoring, state management, and keyboard shortcuts.

### No Build Step Required
Because the project uses standard web technologies, there is **no build step required**. You do not need to run `npm install` or compile assets to run it locally or deploy it.

## 🚀 How to Run Locally

Simply clone the repository and open the entrypoint in any modern browser:

1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/bananatone.git
   ```
2. Open the file in your browser:
   - Double-click `index.html` in your file explorer, OR
   - Run a simple static file server from the repository root:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node/npx
     npx serve
     ```

## 🎨 Logo Assets

All brand and logo files live in `/assets/`:

| File | Size | Purpose |
|------|------|---------|
| `bananatone-logo.svg` | Source | Original vector logo (icon-only, no wordmark) |
| `logo-icon.svg` | Vector | Clean vector copy for general use |
| `logo-icon-512.png` | 512×512 | High-res icon for topbar, PWA, etc. |
| `apple-touch-icon.png` | 180×180 | iOS home-screen icon |
| `favicon.svg` | Vector | SVG favicon for modern browsers |
| `favicon-32.png` | 32×32 | PNG favicon fallback |
| `og-image.png` | 1200×630 | Open Graph / Twitter Card sharing image |

## 🌐 Deployment

- **Deploy Target**: [Cloudflare Pages](https://pages.cloudflare.com/) (or any other static hosting platform like Vercel, Netlify, or GitHub Pages).
- **Build Configuration**:
  - **Framework preset**: None / Static HTML
  - **Build command**: (Leave empty / None)
  - **Build output directory**: Root (`/`)
