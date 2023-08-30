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
          const isDeckRoute = fileNameSplit[0] === 'Deck' && fileNameSplit[1];
          const isSealedProductRoute = fileNameSplit[0] === 'Sealed';
          const isTypesRoute = fileNameSplit[1] === 'Types';
          const isListRoute = fileNameSplit[1] === 'List';
          const is3Words = fileNameSplit[2];

          let fileNameClean = fileName;
          let badgeText = '';

          // First check if were looking at a Card or Deck route that is a variation
          // like Card (Set) or Deck (Set), but not Deck or Deck List put them in parens
          if ((isCardRoute && !isTypesRoute) || (isDeckRoute && !isListRoute)) {
            fileNameClean = `${fileNameSplit[0]} (${fileNameSplit[1]})`;
          }

          // Next, if the route has 3 words default to just putting all other words in parens
          if (is3Words) {
            fileNameClean = `${fileNameSplit[0]} (${fileNameSplit[1]} ${fileNameSplit[2]})`;

            // If we have a Sealed Product we needs to account for two
            // initial words and a single variation in parens
            if (isSealedProductRoute) {
              fileNameClean = `${fileNameSplit[0]} ${fileNameSplit[1]} (${fileNameSplit[2]})`;
            }
          }

          // switch (fileNameDirty) {
          //   case 'all prices':
          //   case 'booster':
          //   case 'card types':
          //   case 'enum values':
          //   case 'sealed product variable':
          //     badgeText = 'A';
          //     break;

          //   default:
          //     break;
          // }

          let badgeElement = !!badgeText ? `<span class="badge">${badgeText}</span>` : '';

          return {
            text: `${badgeElement}${fileNameClean}`,
            link: `${route}${file}/`,
          };
        })
    );
  }

  return newRoutes;
};
