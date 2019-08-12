/**
 * In order to have each documentation page to have its own meta data
 * and URI we break them out in to individual routes.
 */
const fs = require('fs');

module.exports = routes => {
  const newRoutes = [];

  for(const route of routes) {
    const files = fs.readdirSync(`./docs${route}`);
    newRoutes.push(
      files
        .filter(file => !/(^|\/)\.[^.]/g.test(file))
        .filter(file => file !== 'README.md')
        .map(file => (file = `${route}${file}/`))
    );
  }

  return newRoutes;
};
