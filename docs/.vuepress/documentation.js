/**
 * In order to have each documentation page to have its own meta data
 * and URI we break them out in to individual routes.
 */
fs = require('fs');

const routes = () => {
  const files = fs.readdirSync('./docs/documentation/');

  return files
    // Get rid of the index page from the list
    .filter(file => file !== 'README.md')
    // Return the rest
    .map(file => (file = '/documentation/' + file + '/'));
};

module.exports = routes;
