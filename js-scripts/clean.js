const path = require('path');
const exec = require('./exec');

const foldersToClean = [
  path.resolve(process.cwd(), 'dist'),
  path.resolve(process.cwd(), 'lib'),
  path.resolve(process.cwd(), 'lib-commonjs'),
  path.resolve(process.cwd(), 'lib-amd')
];

for (const folder of foldersToClean) {
  exec(`rimraf ${folder}`)
}