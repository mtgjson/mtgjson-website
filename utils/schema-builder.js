/**
 * SchemaBuilder is a tool to interpret our *.schema.json files
 * in order to mass adjust fields, add new ones and any other extensions
 * we may need for future releases
 */
'use strict';

const fs = require('fs');

(() => {
  const config = require('../.schemarc');
  const { srcDir, outDir, fields } = config;
  const { insert } = fields;

  if (typeof config === 'object') {
    const schemas = fs.readdirSync(srcDir);

    if (insert) {
      const { field, ignore } = insert;
      let newSchema = {};

      schemas
        .filter(file => !ignore.includes(file))
        .forEach(file => {
          const schema = require(`.${srcDir}/${file}`);

          for (let fieldName in schema) {
            if (hasOwnProperty.call(schema, fieldName)) {
              const { name, value } = field;
              const obj = schema[fieldName];

              if (!obj[name]) {
                obj[name] = value;
              }

              newSchema[fieldName] = obj;
            }
          }

          fs.writeFileSync(
            `${outDir}/${file}`,
            JSON.stringify(newSchema, null, 2),
            'utf-8',
            res => {
              console.error('done');
            }
          );

          newSchema = {};
        });
    }
  }
})();
