# MTGJSON Website

Built using [VuePress](https://vuepress.vuejs.org/) with Vue, JS/TS and Markdown on Node

## Installation

Install project dependencies. You'll notice all of them are non-dev, this is because on Heroku you can run in to errors. Heroku prunes what is needed on its own.

> _One thing to know is that the only production dependency is `vuepress`_

```sh
yarn i
```

## Development Server

```sh
yarn dev
```


_Every now and then when making major changes be sure to kill your server and rebuild to verify everything is still working. The following code will kill all node instances on linux-based systems. When adding new components or modules the server watch may not pick up on changes._

```sh
killall node
```

## Building for Distribution

```sh
yarn build
```