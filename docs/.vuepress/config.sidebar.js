/**
 * In order to have each documentation page to have its own meta data
 * and URI we break them out in to individual routes.
 */
fs = require('fs');

module.exports = ( route ) => {
  const files = fs.readdirSync(`./docs${route}`);

  return files
    // Get rid of the index page from the list
    .filter(file => file !== 'README.md')
    // Return the rest
    .map(file => (file = `${route}${file}/`));
};