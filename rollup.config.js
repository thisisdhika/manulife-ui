/* eslint-disable import/no-anonymous-default-export */
import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import styles from 'rollup-plugin-styles'
import commonjs from '@rollup/plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'

// PKG
import pkg from './package.json'

export default {
  external: Object.keys(pkg.peerDependencies || {}),
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    del({ targets: ['dist/*'] }),
    resolve({ extensions: ['.jsx', '.js'] }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.jsx', '.js'],
      configFile: './.babelrc',
    }),
    styles({
      modules: true,
    }),
    alias({
      entries: [{ find: '@scss', replacement: './scss' }],
    }),
  ],
}
