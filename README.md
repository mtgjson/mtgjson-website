<div align="center">

# MTGJSON Documentation Application
## AN AMAZING PROJECT
<img src="./docs/.vuepress/public/images/assets/logo-mtgjson-dark-blue.svg" height="100px">
<br />
<br />

[![Actions Status](https://github.com/mtgjson/mtgjson-website/workflows/Node%20CI/badge.svg)](https://github.com/mtgjson/mtgjson-website/actions)
[![codecov](https://codecov.io/gh/mtgjson/mtgjson-website/branch/master/graph/badge.svg)](https://codecov.io/gh/mtgjson/mtgjson-website)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/mtgjson/mtgjson-website/blob/master/LICENSE)

[![PayPal](https://img.shields.io/static/v1.svg?label=PayPal&message=Support%20MTGJSON&color=Blue&logo=paypal)](https://paypal.me/zachhalpern)
[![Patreon](https://img.shields.io/static/v1.svg?label=Patreon&message=Support%20MTGJSON&color=Orange&logo=patreon)](https://patreon.com/mtgjson)

</div>

## Getting Started

### **Installation**

Install `node`, `n`, and `yarn`.

**Option #1 (Preferred)**: Install Node with [brew](https://brew.sh).

```
brew install n yarn
sudo n 12.8.0
```

**Option #2:** Install Node using the [official resource](https://nodejs.org/en/) installer.

Install global dependencies. (Optional. May need admin rights.)

```
yarn boostrap
```

Install project dependencies.

```
yarn install
```

### **Developing**

Runs the local build server with hot module reloading.

```
yarn dev
```

### **Linting**

Lint's the files for any breaking changes.

```
yarn lint
```

### **Testing**

Tests project using Jest tests and attempts to run a build. This command will also automatically run during Husky's pre-commit checks.

```
yarn test
```

### **Building**

Build out the entire site as a static project.

```
yarn build
```

### **Purging**

Clean out all Node packages.

```
yarn purge
```
