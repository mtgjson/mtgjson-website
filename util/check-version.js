// https://medium.com/@adambisek/how-to-check-minimum-required-node-js-version-4a78a8855a0f
const semver = require('semver');
const engines = require('../package.json').engines;

const version = engines.node;
const satisfactory = semver.satisfies(process.version, version);

if (satisfactory) {
  console.log(`Required Node version ${version} is satisfied with current version ${process.version}.`);
} else {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`);
  process.exit(1);
}
