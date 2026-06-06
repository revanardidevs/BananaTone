const fs = require('fs');
const path = require('path');

function replaceInHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                replaceInHtmlFiles(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const oldLink = '<link rel="icon" href="/BananaTone%20Logo%20New.svg" sizes="32x32" type="image/png" />';
            const newLink = '<link rel="icon" href="/BananaTone%20Logo%20New.svg" type="image/svg+xml" />';
            
            if (content.includes(oldLink)) {
                content = content.split(oldLink).join(newLink);
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Modified:', fullPath);
            }
        }
    }
}

replaceInHtmlFiles('d:/BananaTone');
console.log('Done.');
