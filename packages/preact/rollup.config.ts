import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { RollupOptions } from 'rollup';

const config: RollupOptions = {
  input: {
    index: 'src/index.ts',
    line: 'src/Line/index.js',
    duotone: 'src/Duotone/index.js',
    fill: 'src/Fill/index.js'
  },
  output: [
    {
      format: 'cjs',
      dir: 'dist',
      entryFileNames: '[name].cjs'
    },
    {
      format: 'esm',
      dir: 'dist',
      entryFileNames: '[name].mjs'
    }
  ],
  external: [/@babel\/runtime/, /^preact/],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    filesize(),
  ],
};

export default config;
