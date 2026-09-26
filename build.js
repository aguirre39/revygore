const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const partialsDir = path.join(rootDir, 'partials');

// Busca todos os arquivos .html na raiz
const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.html') && fs.statSync(path.join(rootDir, file)).isFile());

files.forEach(file => {
    const filePath = path.join(rootDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Expressão regular para achar blocos do tipo <!-- INCLUDE: nome-do-partial --> ... <!-- END INCLUDE -->
    const regex = /<!--\s*INCLUDE:\s*([a-zA-Z0-9_-]+)\s*-->([\s\S]*?)<!--\s*END INCLUDE\s*-->/g;

    const newContent = content.replace(regex, (match, partialName) => {
        const partialPath = path.join(partialsDir, `${partialName}.html`);
        if (fs.existsSync(partialPath)) {
            const partialContent = fs.readFileSync(partialPath, 'utf-8');
            return `<!-- INCLUDE: ${partialName} -->\n${partialContent}\n<!-- END INCLUDE -->`;
        } else {
            console.warn(`Aviso: Partial "${partialName}" não encontrado para inclusão em ${file}.`);
            return match;
        }
    });

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Atualizado: ${file}`);
    }
});

console.log('Build de includes concluído com sucesso!');
