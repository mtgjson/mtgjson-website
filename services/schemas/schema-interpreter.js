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
        : 'null'
      : '';

    output.push(obj);
  }

  fs.writeFileSync('schema.json', JSON.stringify(output), 'utf-8', res => {
    console.error('done');
  });
})();
