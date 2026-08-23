const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace remaining emojis
html = html.replace(/📋 ללא סוג/g, '<svg class="icon icon-xs icon-inline"><use href="#icon-tag"></use></svg> ללא סוג');
html = html.replace(/📅/g, '<svg class="icon icon-xs icon-inline"><use href="#icon-calendar"></use></svg>');
html = html.replace(/📋/g, '<svg class="icon icon-xs icon-inline"><use href="#icon-tag"></use></svg>');
html = html.replace(/✅/g, '');
html = html.replace(/🗑/g, '');
html = html.replace(/🗑️/g, '');
html = html.replace(/✓/g, '<svg class="icon icon-xs"><use href="#icon-check"></use></svg>');
html = html.replace(/✏/g, '<svg class="icon icon-xs"><use href="#icon-edit"></use></svg>');
html = html.replace(/✕/g, '<svg class="icon icon-md"><use href="#icon-x"></use></svg>');
html = html.replace(/✕️/g, '<svg class="icon icon-md"><use href="#icon-x"></use></svg>');
html = html.replace(/☁️/g, '<svg class="icon icon-md"><use href="#icon-sync"></use></svg>');
html = html.replace(/☁/g, '<svg class="icon icon-md"><use href="#icon-sync"></use></svg>');
html = html.replace(/✕/g, '<svg class="icon icon-md"><use href="#icon-x"></use></svg>');

fs.writeFileSync('index.html', html);
console.log('Done fixing remaining emojis');