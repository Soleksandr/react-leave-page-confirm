import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json';

const name = packageJson.main.replace(/\.js$/, '');
const input = './src/index.ts';

export default [
  {
    input,
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
    external: ['react', 'react-dom'],
  },
  {
    input,
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
    plugins: [dts()],
  },
];
