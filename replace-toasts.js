const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const patterns = [
  "toast('❌ ",
  "toast('☁️ ",
  "toast('✅ ",
  "toast('🔄 ",
  "toast('🗑 ",
  "toast('📅 ",
  "toast('📥 ",
  "toast('🔒 ",
  "toast('🔓 ",
  "toast('😴 ",
  "toast('🌅 ",
  "toast('😊 ",
  "toast('😕 ",
  "toast('✓ ",
  "toast('➕ ",
  "toast`❌ ",
  "toast`☁️ ",
  "toast`✅ ",
  "toast`🔄 ",
  "toast`🗑 ",
  "toast`📅 ",
  "toast`📥 ",
  "toast`🔒 ",
  "toast`🔓 ",
];

for (const p of patterns) {
  html = html.split(p).join(p.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ''));
}

fs.writeFileSync('index.html', html);
console.log('Done replacing toast emojis');