module.exports = {
  srcDir: './docs/.vuepress/public/schemas',
  outDir: './utils/output',
  fields: {
    insert: {
      field: {
        name: 'introduced',
        value: 'v4.0.0',
      },
      ignore: [
        'Modern.schema.json',
        'Vintage.schema.json',
        'Standard.schema.json',
        'AllSets.schema.json',
      ],
    },
  },
};
