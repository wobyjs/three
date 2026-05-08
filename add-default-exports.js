const fs = require('fs');
const path = require('path');

const srcDir = './demo/src';
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx') && !f.includes('layout/') && !f.includes('hooks/') && !f.includes('dump/'));

let fixed = 0;

for (const file of files) {
    const filePath = path.join(srcDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('export default')) {
        // Find the named export
        const exportMatch = content.match(/export const (\w+)/);
        if (exportMatch) {
            const componentName = exportMatch[1];
            // Add default export at the end of the file
            content = content.trimEnd() + '\n\nexport default ' + componentName + '\n';
            fs.writeFileSync(filePath, content);
            console.log(`Fixed: ${file} -> ${componentName}`);
            fixed++;
        }
    }
}

console.log(`\nTotal files fixed: ${fixed}`);