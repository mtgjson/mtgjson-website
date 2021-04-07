// https://medium.com/@adambisek/how-to-check-minimum-required-node-js-version-4a78a8855a0f
import semver from 'semver';
import { engines } from './package';

const version = engines.node;
if (!semver.satisfies(process.version, version)) {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`);
  process.exit(1);
}
