import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import html from "@rollup/plugin-html"
import dev from 'rollup-plugin-dev'

export default {
  input: './index.ts',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  external: ['lodash/add', 'futil'],
  plugins: [dev('dist') , html(), resolve(), commonjs(), typescript()]
};