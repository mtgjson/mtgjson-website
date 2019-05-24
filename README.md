# MTGJSON Website

Built using [VuePress](https://vuepress.vuejs.org/), JS and Markdown on Node

## Dependencies
- Node
- Yarn
- VuePress

## Installation

Install project dependencies. You'll notice all of them are non-dev, this is because on Heroku you can run in to errors. Heroku prunes what is needed on its own.

```sh
yarn install
```

## Development Server

```
yarn dev
```

or, with a testing watcher

```
yarn test:dev
```

_Every now and then when making major changes be sure to kill your server and rebuild to verify everything is still working. The following code will kill all node instances on linux-based systems. When adding new components or modules the server watch may not pick up on changes._

```
killall node
```

## Building for Distribution

```
yarn build
```

## Notes

We use the `.schema.json` format for documentation on structures. In some IDE's this will lead to JSON lint errors. Do ignore them.

## Landcycle

Landcycle is a JS class that allows JSON to take mustache variables such as `{{link:variable}}` (creating an internal link), `{{external:display-text$url}}` (creating an external link) and `{{code:variable}}` (creating an inline-code style) and then intercepts the JSON in Vue to hydrate the data in to data of your choosing. On the website we use this to change data structures in to anchor tags that link to other documentation.