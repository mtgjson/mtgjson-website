const data = require('../docs/.vuepress/src/schemas/card.schema.json');

let markdown = '';

for(const key in data){
  const desc = data[key].description
    .replace('{{link@', '[')
    .replace('@', '](')
    .replace('}}', ')')

  markdown += `> ### ${key}  \n`;
  markdown += `> ${desc}  \n`;
  markdown += `>\n`;
  markdown += `> **Type:** \`${data[key].type}\`  \n`;
  markdown += `> **Introduced:** \`${data[key].introduced}\`  \n`;

  if(data[key].attributes){
    markdown += `> **Attributes:** \`${data[key].attributes[0]}\`  \n`
  }
  markdown += `\n`;
}

console.log(markdown);
