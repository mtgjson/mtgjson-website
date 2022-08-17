<div align="center">

# MTGJSON Documentation Application

<img src="./docs/public/logo-mtgjson.svg" height="100px">
<br />
<br />

[![Actions Status](https://github.com/mtgjson/mtgjson-website/workflows/Node%20CI/badge.svg)](https://github.com/mtgjson/mtgjson-website/actions)
![CodeQL](https://github.com/mtgjson/mtgjson-website/workflows/CodeQL/badge.svg)
[![codecov](https://codecov.io/gh/mtgjson/mtgjson-website/branch/main/graph/badge.svg)](https://codecov.io/gh/mtgjson/mtgjson-website)

[![PayPal](https://img.shields.io/static/v1.svg?label=PayPal&message=Support%20MTGJSON&color=Blue&logo=paypal)](https://paypal.me/zachhalpern)
[![Patreon](https://img.shields.io/static/v1.svg?label=Patreon&message=Support%20MTGJSON&color=Orange&logo=patreon)](https://patreon.com/mtgjson)

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/mtgjson/mtgjson-website/blob/master/LICENSE)

</div>

## Getting Started

### **Installation**

Install Node with [brew](https://brew.sh):

```
brew install n
sudo n 16.16
```

### **Developing**

Runs the local build server with hot module reloading and eslint watcher.

```
npm run dev
```

### **Linting**

Manually lint the files for any breaking changes.

```
npm run lint
```

### **Testing**

Run all tests.

```
npm run test
```

or run all the tests and a test build.

```
npm run test:full
```

### **Building**

Build out the entire site as a static project.

**Note:** This is done via the GitHub Action and pushed to a Release Tag so no need to do this unless you are testing the actual build. Additionally, when submitting a PR, Heroku will deploy an environment to test your Pull Request.

```
npm run build
```

### **Purging**

Clean out all Node packages.

```
npm run purge
```
