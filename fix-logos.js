const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateLogos() {
    const svgPath = path.join(__dirname, 'assets', 'rabbitear_logo.svg');
    const svgContent = fs.readFileSync(svgPath, 'utf8');

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set content and wait for images to load
    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { margin: 0; padding: 0; background: transparent; display: flex; justify-content: center; align-items: center; height: 100vh; }
                svg { width: 100vmin; height: 100vmin; }
            </style>
        </head>
        <body>
            ${svgContent}
        </body>
        </html>
    `);
    
    // Wait a bit to ensure embedded base64 filters/images are fully rendered
    await new Promise(r => setTimeout(r, 2000));
    
    const svgElement = await page.$('svg');
    
    // Generate 512x512 logo
    await page.setViewport({ width: 512, height: 512, deviceScaleFactor: 1 });
    await svgElement.screenshot({ path: path.join(__dirname, 'assets', 'logo-icon-512.png'), omitBackground: true });
    
    // Generate 180x180 apple touch icon
    await page.setViewport({ width: 180, height: 180, deviceScaleFactor: 1 });
    await svgElement.screenshot({ path: path.join(__dirname, 'assets', 'apple-touch-icon.png'), omitBackground: true });
    
    // Generate 32x32 favicon
    await page.setViewport({ width: 32, height: 32, deviceScaleFactor: 1 });
    await svgElement.screenshot({ path: path.join(__dirname, 'assets', 'favicon-32.png'), omitBackground: true });
    
    // Generate OG image 1200x630
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Nunito:wght@700;800&display=swap" rel="stylesheet">
            <style>
                body {
                    margin: 0; padding: 0;
                    width: 1200px; height: 630px;
                    background-color: #504e76;
                    display: flex; flex-direction: column;
                    justify-content: center; align-items: center;
                    font-family: 'Nunito', sans-serif;
                }
                .logo-container {
                    width: 200px; height: 200px;
                    margin-bottom: 30px;
                }
                svg { width: 100%; height: 100%; }
                h1 {
                    font-family: 'Fredoka', sans-serif;
                    color: #fdf8e2;
                    font-size: 80px;
                    margin: 0 0 10px 0;
                    letter-spacing: -0.05em;
                }
                p {
                    color: #fcdd9d;
                    font-size: 36px;
                    margin: 0;
                    font-weight: 800;
                }
            </style>
        </head>
        <body>
            <div class="logo-container">
                ${svgContent}
            </div>
            <h1>RabbitEar</h1>
            <p>Free online ear training for musicians</p>
        </body>
        </html>
    `);
    
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(__dirname, 'assets', 'og-image.png') });
    
    await browser.close();
    console.log('Logos generated successfully.');
}

generateLogos().catch(console.error);
