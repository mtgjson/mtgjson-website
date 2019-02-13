/**
 * In order to have each documentation page to have its own meta data
 * and URI we break them out in to individual routes.
 */
fs = require('fs');

module.exports = route => {
  const files = fs.readdirSync(`./docs${route}`, (err, list) => {
    // Ignore hidden? Not working.
    return list.filter(item => !/(^|\/)\.[^\/\.]/g.test(item));
  });

  return (
    files
      // Get rid of the index page from the list
      // On development we may get errors about invisible files
      .filter(file => file !== 'README.md')
      // Return the rest
      .map(file => (file = `${route}${file}/`))
  );
};
