/**
 * In order to have each documentation page to have its own meta data
 * and URI we break them out in to individual routes.
 */
import fs from 'fs';

export default (routes) => {
  const newRoutes = [];

  for (const route of routes) {
    const files = fs.readdirSync(`./docs${route}`);
    newRoutes.push(
      files
        .filter((file) => !/(^|\/)\.[^.]/g.test(file))
        .filter((file) => file !== 'index.md')
        .map((file) => {
          let fileNameDirty = file.replace(/-/g, ' ');
          let fileName = fileNameDirty.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

          return {
            text: fileName,
            link: `${route}${file}/`,
          };
        })
    );
  }

  return newRoutes;
};
