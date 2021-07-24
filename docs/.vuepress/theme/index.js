const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search',
  ]
})
