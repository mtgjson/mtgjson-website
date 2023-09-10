// import ModelBadge from './theme/components/ModelBadge.vue';
/**
 * In order to have each documentation page to have its own meta data
 * and URI we break them out in to individual routes.
 */
import fs from 'fs';

const filterDirectories = (arr = []) => {
  return arr.filter((file) => !/(^|\/)\.[^.]/g.test(file)).filter((file) => file !== 'index.md');
};

const cleanFileName = (file) => {
  const fileNameClean = file.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  const fileNameSplit = fileNameClean.split(' ');

  return {
    fileNameSplit,
    fileNameClean,
  };
};

const parseFileName = (fileName, fileNameSplit) => {
  const isCardRoute = fileNameSplit[0] === 'Card';
  const isDeckRoute = fileNameSplit[0] === 'Deck' && fileNameSplit[1];
  const isSealedProductRoute = fileNameSplit[0] === 'Sealed';
  const isSealedProductConfigRoute = fileName === 'Sealed Product Config';
  const isAllPricesRoute = fileNameSplit[0] === 'All' && fileNameSplit[1] === 'Prices';
  const isTypesRoute = fileNameSplit[1] === 'Types' || fileNameSplit[1] === 'Type';
  const isListRoute = fileNameSplit[1] === 'List';
  const is3Words = fileNameSplit[2];

  let newFileName = fileName;

  // First check if were looking at a Card or Deck route that is a variation
  // like Card (Set) or Deck (Set), but not Deck or Deck List, then put them in parens
  if ((!isAllPricesRoute && isCardRoute && !isTypesRoute) || (isDeckRoute && !isListRoute)) {
    newFileName = `${fileNameSplit[0]} (${fileNameSplit[1]})`;
  }

  // Next, if the route has 3 words default to just putting all other words in parens
  if (is3Words && !isTypesRoute && !isAllPricesRoute && !isSealedProductConfigRoute) {
    newFileName = `${fileNameSplit[0]} (${fileNameSplit[1]} ${fileNameSplit[2]})`;

    // If we have a Sealed Product we needs to account for two
    // initial words and a single variation in parens
    if (isSealedProductRoute) {
      newFileName = `${fileNameSplit[0]} ${fileNameSplit[1]} (${fileNameSplit[2]})`;
    }
  }

  return newFileName;
};

const createNestedRoute = (dirFiles, fileName, fileNameClean, route) => {
  let nestedRoutes = [];

  filterDirectories(dirFiles).forEach((file) => {
    const text = cleanFileName(file).fileNameClean;
    const textSplit = cleanFileName(file).fileNameSplit;

    nestedRoutes.push({
      text: parseFileName(text, textSplit),
      link: `${route}${fileName}/${file}/`,
    });
  });

  const sortedNestedRoutes = nestedRoutes.reduce((nestedRoutes, route) => {
    if (route.text === 'Sealed Product Config') {
      nestedRoutes.unshift(route);
    } else {
      nestedRoutes.push(route);
    }

    return nestedRoutes;
  }, []);

  return {
    text: fileNameClean,
    link: `${route}${fileName}/`,
    collapsed: true,
    items: sortedNestedRoutes,
  };
};

export default (routes) => {
  const newRoutes = [];

  for (const route of routes) {
    const files = fs.readdirSync(`./docs${route}`);

    newRoutes.push(
      filterDirectories(files).reduce((reducer, file) => {
        const { fileNameClean, fileNameSplit } = cleanFileName(file);
        const newFileName = parseFileName(fileNameClean, fileNameSplit);

        const isBoosterRoute = fileNameClean === 'Booster';
        const isSealedProductRoute = fileNameClean === 'Sealed Product';
        const isCardRoute = fileNameClean === 'Card';
        const isPricesRoute = fileNameClean === 'Price';

        if (isBoosterRoute) {
          reducer.push(createNestedRoute(fs.readdirSync(`./docs${route}/booster`), file, fileNameClean, route));
        } else if (isSealedProductRoute) {
          reducer.push(createNestedRoute(fs.readdirSync(`./docs${route}/sealed-product`), file, fileNameClean, route));
        } else if (isCardRoute) {
          reducer.push(createNestedRoute(fs.readdirSync(`./docs${route}/card`), file, fileNameClean, route));
        } else if (isPricesRoute) {
          reducer.push(createNestedRoute(fs.readdirSync(`./docs${route}/price`), file, fileNameClean, route));
        } else {
          reducer.push({
            text: newFileName,
            link: `${route}${file}/`,
          });
        }

        return reducer;
      }, [])
    );
  }

  return newRoutes;
};
