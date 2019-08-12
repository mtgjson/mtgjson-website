module.exports = {
  srcDir: './docs/.vuepress/public/schemas',
  outDir: './utils/output',
  ignore: [
    'Modern.schema.json',
    'Vintage.schema.json',
    'Standard.schema.json',
    'AllSets.schema.json',
  ],
  insert: {
    fields: [
      // Add new field objects with a default value
      {
        name: 'introduced',
        defaultValue: 'v4.0.0',
      }
    ]
  },
};
