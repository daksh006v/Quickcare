const fs = require('fs');
const path = require('path');

function getActualCase(dir) {
    if (!fs.existsSync(dir)) return null;
    const parent = path.dirname(dir);
    if (parent === dir) return dir;
    const actualParent = getActualCase(parent);
    if (!actualParent) return null;
    const base = path.basename(dir);
    const files = fs.readdirSync(actualParent);
    const actualBase = files.find(f => f.toLowerCase() === base.toLowerCase());
    if (!actualBase) return null;
    return path.join(actualParent, actualBase);
}

function checkFiles(dir) {
    let errors = 0;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if(file !== 'node_modules' && file !== 'dist') errors += checkFiles(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            const lines = content.split('\n');
            lines.forEach((line, index) => {
                const match = line.match(/import\s+.*?\s+from\s+['"](\..*?)['"]/);
                if (match) {
                    const importPath = match[1];
                    let resolved = path.resolve(path.dirname(fullPath), importPath);
                    
                    let toCheck = [resolved, resolved + '.js', resolved + '.jsx', path.join(resolved, 'index.js'), path.join(resolved, 'index.jsx')];
                    let found = false;
                    for(let c of toCheck) {
                        if(fs.existsSync(c)) {
                            const actual = getActualCase(c);
                            if(actual && actual !== c) {
                                console.log(`Case mismatch in ${fullPath}:${index + 1}`);
                                console.log(`  Imported as: ${importPath}`);
                                console.log(`  Expected actual case: ${path.basename(actual)} or similar in path`);
                                errors++;
                            }
                            found = true;
                            break;
                        }
                    }
                }
            });
        }
    }
    return errors;
}

const errs = checkFiles(path.join(__dirname, 'src'));
if (errs === 0) console.log('No case mismatches found.');
