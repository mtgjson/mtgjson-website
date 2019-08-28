<img src="./docs/.vuepress/public/images/assets/logo-mtgjson-dark-blue.svg" width="100px">

# MTGJSON Website (Documentation)

[![Build Status](https://travis-ci.org/staghouse/js-essentials.png?branch=master)](https://travis-ci.org/mtgjson/mtgjson-website)
[![codecov](https://codecov.io/gh/staghouse/js-essentials/branch/master/graph/badge.svg)](https://codecov.io/gh/mtgjson/mtgjson-website)

[![Generic badge](https://img.shields.io/badge/Made_with_Node-latest-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Made_with_Vuepress-1.x-green.svg)](https://shields.io/)
[![Maintenance](https://img.shields.io/badge/Maintained-Yes-green.svg)](https://GitHub.com/mtgjson/mtgjson-website/graphs/commit-activity)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/mtgjson/mtgjson-website/blob/master/LICENSE)

[![PayPal](https://img.shields.io/static/v1.svg?label=PayPal&message=Support%20MTGJSON&color=Blue&logo=paypal)](https://paypal.me/zachhalpern)
[![Patreon](https://img.shields.io/static/v1.svg?label=Patreon&message=Support%20MTGJSON&color=Orange&logo=patreon)](https://patreon.com/mtgjson)

## Getting Started

### **Installation**

Install `node`, `n` + `yarn` (optional).

**Note**: We like to use the latest version unless there is a serious issue.

**Option #1 (Preferred)**: Install Node with [brew](https://brew.sh).

```bash
$ brew install node n yarn
$ sudo n latest
```

**Option #2:** Install Node using the [official resource](https://nodejs.org/en/) installer.

Install project dependencies.

```bash
Via Yarn: $ yarn bootstrap
Via NPM: $ npm run bootstrap
```

### **Developing**

Runs the local build server with hot module reloading.

```bash
Via Yarn: $ yarn dev
Via NPM: $ npm run dev
```

### **Linting**

Lint's the files for any breaking changes.

```bash
Via Yarn: $ yarn lint
Via NPM: $ npm run lint
```

### **Testing**

Tests project using Jest tests and attempts to run a build. This command will also automatically run during Husky's pre-commit checks.

```bash
Via Yarn: $ yarn test
Via NPM: $ npm run test
```

### **Building**

Build out the entire site as a static project.

```bash
Via Yarn: $ yarn build
Via NPM: $ npm run build
```

### **Purging**

Clean out all Node packages.

```bash
Via Yarn: $ yarn purge
Via NPM: $ npm run purge
```

## Notes

### **Landcycle, what is it?**

Landcycle is a JS class that allows JSON to take mustache variables such as `{{link:variable}}` (creating an internal link), `{{external:display-text$url}}` (creating an external link) and `{{code:variable}}` (creating an inline-code style) and then intercepts the JSON in Vue to hydrate the data in to HTML of your choosing. On the website we mainly use this to change data links in to anchor tags that route to other documentation links to maintain our Single Page Application.
