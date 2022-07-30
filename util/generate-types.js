import fs from 'fs';
import { pages } from '../docs/.vitepress/config';

const shiki = require('shiki');

// JSON Interfaces
const awaitJSONTypes = async () => new Promise(async (resolve, reject) => {
  const jsonTypes = {};

  for(let page of pages) {
    const interfaceName = page.title.replace(/[\s()]/g, '');

    if (page.model && page.model.length > 0) {
      let interfaceValues = '';
      let isFirst = true;

      page.model.forEach((property) => {
        const propertyName = property.name.includes(' ') ? `"${property.name}"` : property.name;
        let type = '';

        if (property.type === 'float') {
          type = 'number';
        } else {
          type = property.type;
        }

        if( isFirst ) {
          isFirst = false;
          interfaceValues += `${propertyName}${property.optional ? '?' : ''}: ${type};`;
        } else {
          interfaceValues += `\n  ${propertyName}${property.optional ? '?' : ''}: ${type};`;
        }
      });

      const interfaceString = `type ${interfaceName} = {
  ${interfaceValues}
}
  `.trim();

      const shikiHighlighter = await shiki.getHighlighter({ theme: 'material-palenight' });
      const shikiCode = shikiHighlighter.codeToHtml(`${interfaceString}`, { lang: 'ts' });

      jsonTypes[interfaceName] = shikiCode;
    }
  }

  resolve(jsonTypes);
});

// True Interface generation
const generateTrueTypes = () => {
  let interfaces = '';

  pages.forEach(async (page) => {
    if (page.model && page.model.length > 0) {
      const interfaceName = page.title.replace(' ', '').replace('(', '').replace(')', '');
      let interfaceValues = '';
      let interfaceString = '';

      page.model.forEach((property) => {
        const propertyName = property.name.includes(' ') ? `"${property.name}"` : property.name;
        let type = '';

        if (property.type === 'float') {
          type = 'number';
        } else {
          type = property.type;
        }

        interfaceValues += `
  // ${propertyName}
  ${propertyName}${property.optional ? '?' : ''}: ${type};
        `;
      });

      interfaceString = `
export type ${interfaceName} = {
  ${interfaceValues}
}
  `;

      interfaces += interfaceString;
    }
  });

  fs.writeFileSync(
    `./packages/mtgjson-types/index.ts`,
    `${interfaces}
  `
  );
};

const generateJSONTypes = () => {
  Promise.all([awaitJSONTypes()]).then(result => {
    fs.writeFileSync(
      `./docs/.vitepress/theme/static/types.json`,
      `${JSON.stringify(result[0])}`
    );
  })
}

generateTrueTypes();
generateJSONTypes();
