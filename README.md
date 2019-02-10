# MTGJSON Website

## Installation

```sh
yarn install
```

## Development Server

```sh
yarn dev
```

## Building (You may need to do this in development when adding new files that the server has not parsed as available)

```sh
yarn build
```

## Deployment

If you are deploying to GitHub pages, see the `deploy.sh` file, otherwise you will want to want the index directory to live at `docs/.vuepress/dist`

The default host and port may also need to be changed in the `config.js` file in `.vuepress`