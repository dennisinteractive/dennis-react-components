import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: [
    'src/index.js',
    'src/components/card/Card.js'
  ],
  output: [
    // ES module version, for modern browsers
    {
      // file: pkg.main,
      dir: "dist/nomodule",
      format: "cjs",
      sourcemap: true
    },
    // SystemJS version, for older browsers
    {
      // file: pkg.module,
      dir: "dist/module",
      format: "es",
      sourcemap: true
    }
  ],
  // experimentalDynamicImport: true,
  experimentalCodeSplitting: true,
  external: [
    'react',
    'prop-types',
    '@loadable/component'
  ],
  plugins: [
    external(),
    postcss({
      minimize: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ],
      plugins: [ 
        '@babel/plugin-syntax-dynamic-import',
        '@loadable/babel-plugin'
      ]
    }),
    resolve(),
    commonjs()
  ]
}
