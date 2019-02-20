# MTGJSON Website

Built using [VuePress](https://vuepress.vuejs.org/) with Vue, JS/TS and Markdown on Node

## Dependencies
- Node
- Yarn

## Installation

Install project dependencies. You'll notice all of them are non-dev, this is because on Heroku you can run in to errors. Heroku prunes what is needed on its own.

> _One thing to know is that the only production dependency is `vuepress`_

```sh
yarn install
```

## Development Server

```sh
yarn docs:dev
```


_Every now and then when making major changes be sure to kill your server and rebuild to verify everything is still working. The following code will kill all node instances on linux-based systems. When adding new components or modules the server watch may not pick up on changes._

```sh
killall node
```

## Building for Distribution

```sh
yarn docs:build
```

## Misc

# Notes

We use the `.schema` format for docuemntation on structures. In some IDE's this will lead to linting errors. Do ignore them.

# Landcycle

Landcycle is a Typescript/JS class that allows JSON to take mustache variables such as `{{example-variable}}` and then intercepts the JSON in Vue to hydrate the data in to data of your choosing. On the website we use this to change data structures in to anchor tags that link to other documentation.

# Todo

- Add keyword highlighting to schema `description`.
- Nest files and structures in to documentation route
- Resolve routing for card-types and set-types