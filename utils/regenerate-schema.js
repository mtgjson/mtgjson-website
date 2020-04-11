/**
 * SchemaBuilder is a tool to interpret our *.schema.json files
 * in order to mass adjust fields, add new ones and any other extensions
 * we may need for future releases
 */
'use strict';

const fs = require('fs');

(() => {
  const config = {
    srcDir: './docs/.vuepress/public/schemas',
    /** This is the testing outDir, when validated, change to srcDir */
    outDir: './utils/output',
    /** schemas that have no intrinsic values */
    ignore: [
    ],
    insert: {
      fields: [
        // Add new field objects with a default value
        {
          /** example */
          // name: 'introduced',
          // defaultValue: 'v4.0.0',
        }
      ]
    },
  };
  const { srcDir, outDir, insert, ignore } = config;

  if (typeof config === 'object') {
    const schemas = fs.readdirSync(srcDir);

    if (insert) {
      const { fields } = insert;
      let newSchema = {};

      schemas
        .filter(file => !ignore.includes(file))
        .forEach(file => {
          const schema = require(`.${srcDir}/${file}`);

          for (let fieldName in schema) {
            if (hasOwnProperty.call(schema, fieldName)) {
              for(let field of fields){
                const { name, defaultValue } = field;
                const obj = schema[fieldName];

                if (!obj[name]) {
                  obj[name] = defaultValue;
                }

                newSchema[fieldName] = obj;
              }
            }
          }

          fs.writeFileSync(
            `${outDir}/${file}`,
            JSON.stringify(newSchema, null, 2),
            'utf-8',
            res => {
              console.warn(res);
            }
          );

          newSchema = {};
        });
    }
  }
})();
