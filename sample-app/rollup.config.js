import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
module.exports = {
  input: './src/index.ts',
  output:{
    file: './dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ]
}