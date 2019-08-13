
<img src="./docs/.vuepress/public/images/assets/logo-mtgjson-dark-blue.svg" width="100px">

# MTGJSON Website

[![Generic badge](https://img.shields.io/badge/Made_with_Vuepress-1.0-green.svg)](https://shields.io/)
[![Maintenance](https://img.shields.io/badge/Maintained-Yes-green.svg)](https://GitHub.com/ericlakatos/windfish-app/graphs/commit-activity)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/ericlakatos/windfish-app/blob/master/LICENSE.md)

## Dependencies
- [Node](https://www.nodejs.com)
  - You can directly download Node but if you are able to use [Brew](https://brew.sh/) then you can quickly switch between Node version using the `n` package that Brew provides.

## Installation

```
npm run bootstrap
```

## Developing

```
npm run dev
```

## Linting

```
npm run test
```

## Testing

Tests project using Jest tests and attempts to run a build. This command will also automatically run during Husky's pre-commit checks.

```
npm run lint
```

## Building

```
npm run build
```

## Purging

Remove all packages

```
npm run purge
```

## Notes

### Landcycle

Landcycle is a JS class that allows JSON to take mustache variables such as `{{link:variable}}` (creating an internal link), `{{external:display-text$url}}` (creating an external link) and `{{code:variable}}` (creating an inline-code style) and then intercepts the JSON in Vue to hydrate the data in to data of your choosing. On the website we use this to change data structures in to anchor tags that link to other documentation while maintaining our Single Page Application.
