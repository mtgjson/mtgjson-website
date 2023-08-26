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
          const fileNameDirty = file.replace(/-/g, ' ');
          const fileName = fileNameDirty.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
          const fileNameSplit = fileName.split(' ');
          const isCardRoute = fileNameSplit[0] === 'Card';
          const isSealedProductRoute = fileNameSplit[0] === 'Sealed';
          const isTypesRoute = fileNameSplit[1] === 'Types';
          let fileNameClean = fileName;

          if (isCardRoute && !isTypesRoute) {
            fileNameClean = `${fileNameSplit[0]} (${fileNameSplit[1]})`;
          }

          if (isSealedProductRoute && fileNameSplit[2]) {
            fileNameClean = `${fileNameSplit[0]} ${fileNameSplit[1]} (${fileNameSplit[2]})`;
          }

          return {
            text: fileNameClean,
            link: `${route}${file}/`,
          };
        })
    );
  }

  return newRoutes;
};
