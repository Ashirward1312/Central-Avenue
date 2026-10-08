const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace fonts
    content = content.replace(/'Cormorant Garamond',\s*serif/g, "'Poppins', sans-serif");
    content = content.replace(/'Montserrat',\s*sans-serif/g, "'Poppins', sans-serif");
    content = content.replace(/'DM Sans',\s*sans-serif/g, "'Poppins', sans-serif");
    
    // Replace font-style: italic
    content = content.replace(/font-style:\s*italic;?/g, "");
    
    fs.writeFileSync(file, content);
});
console.log('Fonts updated successfully!');
