const fs = require('fs');

const files = ['public/styles.css', 'public/index.html', 'public/app.js'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content
      .replace(/--teal-dark/g, '--primary-dark')
      .replace(/--teal-glow/g, '--primary-glow')
      .replace(/--teal/g, '--primary')
      .replace(/class="teal"/g, 'class="primary-text"')
      .replace(/\.teal\b/g, '.primary-text');
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
