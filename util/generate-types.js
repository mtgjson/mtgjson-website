import fs from 'fs';
import { pages } from '../docs/.vitepress/config';

// Convert some incompatible types that we use for documentation clarity but differs from TypeScript types
const convertIncompatibleTypes = (value) => {
  if (value === 'float') {
    return 'number';
  } else {
    return value;
  }
};

// Convert page title to become a type name
const convertPageNameToNamedType = (name) => {
  return name?.replace(/[\s()]/g, '');
};

// True TypeScript type generation
const generateTrueTypes = () => {
  let props = '';
  let propsAll = '';
  let propTypeName = '';

  pages.forEach(async (page) => {
    props = '';
    const propName = (propTypeName = convertPageNameToNamedType(page.title));

    if (propName && page.model && page.model.length > 0) {
      let propValues = '';
      let propString = '';

      page.model.forEach((property, index) => {
        const isLastLine = index === page.model.length - 1;
        const propertyName = property.name.includes(' ') ? `"${property.name}"` : property.name;
        const propertyType = convertIncompatibleTypes(property.type);
        const propertyOptional = !!property.optional ? '?' : '';
        const propertyValue = `  ${propertyName}${propertyOptional}: ${propertyType};${isLastLine ? '' : '\n'}`;

        propValues += propertyValue;
      });

      propString = `
export type ${propName} = {
${propValues}
};`;

      props += propString;
      propsAll += propString;

      if (props) {
        fs.writeFileSync(`./docs/public/types/${propTypeName}.ts`, `${props.trim()}`);
      }
    }
  });

  fs.writeFileSync(`./docs/public/types/AllMTGJSONTypes.ts`, `${propsAll.replace(/};/g, '};\n').trim()}`);

  // Legacy file
  fs.writeFileSync(`./docs/public/static/mtgjson-types.ts`, `${propsAll.replace(/};/g, '};\n').trim()}`);
};

generateTrueTypes();
