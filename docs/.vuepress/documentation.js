fs = require('fs');

module.exports = () => {
  const files = fs.readdirSync('./docs/documentation/');

  return files
    .map(file => file.replace('.md', ''))
    .filter(file => file !== 'README')
    .map(file => (file = 'documentation/' + file));
};
