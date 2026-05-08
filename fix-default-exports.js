const fs = require('fs');
const path = require('path');

const srcDir = './demo/src';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx') && !f.includes('layout/') && !f.includes('hooks/') && !f.includes('dump/'));

const filesToFix = [];

for (const file of files) {
    const filePath = path.join(srcDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('export default')) {
        // Find the named export
        const exportMatch = content.match(/export const (\w+)/);
        if (exportMatch) {
            const componentName = exportMatch[1];
            filesToFix.push({ file, filePath, componentName });
        }
    }
}

console.log('Files needing default export:', filesToFix.length);
console.log(filesToFix.map(f => `${f.file}: ${f.componentName}`).join('\n'));