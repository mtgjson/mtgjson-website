import fs from 'fs';
import { pages } from '../docs/.vitepress/config';

const shiki = require('shiki');

// Convert some incompatible types that we use for documentation clarity but differs from TypeScript types
const convertIncompatibleTypes = (value) => {
  if (value === 'float') {
    return 'number';
  } else {
    return value;
  }
}

// Convert page title to become a type name
const convertPageNameToNamedType = (name) => {
  return name?.replace(/[\s()]/g, '');
}

// JSON TypeScript types for documentation
const awaitJSONTypes = async () => new Promise(async (resolve, reject) => {
  const jsonTypes = {};

  for(let page of pages) {
    const propName = convertPageNameToNamedType(page.title);

    if (propName && page.model && page.model.length > 0) {
      let propValues = '';
      let isFirst = true;

      page.model.forEach((property) => {
        const propertyName = property.name.includes(' ') ? `"${property.name}"` : property.name;
        const propertyType = convertIncompatibleTypes(property.type);
        const propertyOptional = !!property.optional ? '?' : '';

        if( isFirst ) {
          isFirst = false;
          propValues += `${propertyName}${propertyOptional}: ${propertyType};`;
        } else {
          propValues += `\n  ${propertyName}${propertyOptional}: ${propertyType};`;
        }
      });

      const propString = `type ${propName} = {
  ${propValues}
}
  `.trim();

      const shikiHighlighter = await shiki.getHighlighter({ theme: 'material-palenight' });
      const shikiCode = shikiHighlighter.codeToHtml(`${propString}`, { lang: 'ts' });

      jsonTypes[propName] = shikiCode;
    }
  }

  resolve(jsonTypes);
});

// True TypeScript type generation
const generateTrueTypes = () => {
  let props = '';

  pages.forEach(async (page) => {
    const propName = convertPageNameToNamedType(page.title);

    if (propName && page.model && page.model.length > 0) {
      let propValues = '';
      let propString = '';

      page.model.forEach((property) => {
        const propertyName = property.name.includes(' ') ? `"${property.name}"` : property.name;
        const propertyType = convertIncompatibleTypes(property.type);
        const propertyOptional = !!property.optional ? '?' : '';

        propValues += `
  ${propertyName}${propertyOptional}: ${propertyType};
        `;
      });

      propString = `
export type ${propName} = {
  ${propValues}
}
  `;

      props += propString;
    }
  });

  fs.writeFileSync(
    `./docs/public/static/mtgjson-types.ts`,
    `${props}
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
