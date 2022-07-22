<div align="center">

# MTGJSON Documentation Application

<img src="./docs/public/images/assets/logo-mtgjson-dark-blue.svg" height="100px">
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

**Option #1 (Preferred)**: Install Node with [brew](https://brew.sh).

```
brew install n
sudo n 16.16
```

**Option #2:** Install Node using the [official resources](https://nodejs.org/en/download/releases/) installer.

Install project dependencies.

```
npm install
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

or run the full tests that Husky will test for.

```
npm run test:full
```

### **Building**

Build out the entire site as a static project.

```
npm run build
```

### **Purging**

Clean out all Node packages.

```
npm run purge
```
