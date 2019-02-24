/**
 * I mean... yea, it's dumb, but its gets a schema colors to what
 * we want than the actuall json itself. Many gaps needs to be filled
 * in after placing the output in a .schema file.
 * 
 * @TODO Perhaps get MTGJSON app to export a .schema file for us
 */
'use strict';

const fs = require('fs');

(() => {
  const file = JSON.parse(
    fs.readFileSync('./Card.schema.json', 'utf-8')
  ).properties;

  let output = [];

  for (let key in file) {
    let keyVal = file[key];
    let obj = {
      property: null,
      type: 'any',
      example: null,
      description: '',
    };

    obj.property = key;
    obj.type = !keyVal.items ? keyVal.type : keyVal.type + '()';
    obj.example = !keyVal.items
      ? keyVal.examples
        ? Array.isArray(keyVal.examples)
          ? JSON.stringify(keyVal.examples[0])
          : typeof keyVal.examples === 'object'
          ? JSON.stringify(Object.keys(keyVal.examples)[0])
          : typeof keyVal.examples === 'string'
          ? JSON.stringify(keyVal.examples)
          : ''
        : obj.type === 'string'
        ? ''
        : obj.type === 'array'
        ? '[]'
        : obj.type === 'object'
        ? '{}'
        : ''
      : '';

    output.push(obj);
  }

  fs.writeFileSync('schema.json', JSON.stringify(output), 'utf-8', res => {
    console.error('done');
  });
})();
