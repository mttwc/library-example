const path = require('path');
const exec = require('./exec');
const typescriptPath = 'node ' + require.resolve('typescript/lib/tsc');
const libPath = path.resolve(process.cwd(), 'lib');
const srcPath = path.resolve(process.cwd(), 'src');

const isProduction = process.argv.indexOf('--production') > -1;
const commonParams =
  '--pretty' + (isProduction ? ` --inlineSources --sourceRoot ${path.relative(libPath, srcPath)}` : '');

// Flag to keep track of if we already logged errors.
// Since we run the ts builds in parallel, we do not want
// to flood the user with the same error messages for
// each process.
let hasLoggedErrors = false;

// We wait for all compilations to be done to report success
const runPromises = [];

runPromises.push(runTscFor('lib-commonjs', 'commonjs', commonParams));
runPromises.push(runTscFor('lib', 'es2015', commonParams));
runPromises.push(runTscFor('lib-amd', 'amd', commonParams));

return Promise.all(runPromises);

function logFirstStdOutAndRethrow(process) {
  if (!hasLoggedErrors) {
    hasLoggedErrors = true;
    console.log(process.stdout.toString('utf8'));
  }
  return Promise.reject(process);
}

function logSuccessFor(target) {
  return () => console.log(`- TS: '${target}' done!`);
}

function runTscFor(outDir, moduleType, commonParams) {
  return exec(typescriptPath + ` -outDir ${outDir} -t es2017 -m ${moduleType} ` + commonParams).then(
    logSuccessFor(outDir),
    logFirstStdOutAndRethrow
  );
}