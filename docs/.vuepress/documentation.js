fs = require('fs');

const routes = () => {
  const files = fs.readdirSync('./docs/documentation/');

  return files
    // Get rid of the index page
    .filter(file => file !== 'README.md')
    .map(file => (file = '/documentation/' + file + '/'));
};

module.exports = routes;
