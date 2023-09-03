import fs from 'fs';
import { pages } from '../docs/.vitepress/config';

const preDeterminedTypes = fs.readFileSync('docs/types.ts', { encoding: 'utf8' });

let typesAll = '';

// Convert page title to become a type name
const convertPageNameToNamedType = (name) => {
  return name?.replace(/[\s()]/g, '');
};

// Generate types from the pages type models generated at build time
const generatePageModelTypes = (_pages) => {
  let props = '';
  let propTypeName = '';

  _pages.forEach(async (page) => {
    props = '';
    const propName = (propTypeName = convertPageNameToNamedType(page.title));

    if (propName && page.model?.length > 0) {
      let propValues = '';
      let propString = '';

      page.model.forEach((property, index) => {
        const isLastLine = index === page.model.length - 1;
        const propertyName = property.name.includes(' ') ? `"${property.name}"` : property.name;
        const propertyType = property.type;
        const propertyOptional = !!property.optional ? '?' : '';
        const propertyValue = `  ${propertyName}${propertyOptional}: ${propertyType};${isLastLine ? '' : '\n'}`;

        propValues += propertyValue;
      });

      propString = `
export type ${propName} = {
${propValues}
};`;

      props += propString;
      typesAll += propString;

      if (props) {
        fs.writeFileSync(`./docs/public/types/${propTypeName.replace(/ /g, '')}.ts`, `${props.trim()}`);
      }
    }
  });
};
generatePageModelTypes(pages);

// Generate types from a static file for models we do not declare
const generateFileModelTypes = (_types) => {
  const fileModels = _types.split('\n').filter((line) => line !== '');

  fileModels.forEach((model) => {
    const modelName = model.match(/(?<=type )(.*)(?= =)/)[0];

    fs.writeFileSync(`./docs/public/types/${modelName.replace(/ /g, '')}.ts`, `${model.trim()}`);
  });

  typesAll += '\n' + _types;
};
generateFileModelTypes(preDeterminedTypes);

fs.writeFileSync(`./docs/public/types/AllMTGJSONTypes.ts`, `${typesAll.trim()}`);
