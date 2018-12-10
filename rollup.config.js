import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import alias from 'rollup-plugin-alias';
import path from 'path';

import pkg from './package.json'

export default {
  input: [
    // could probably write a function to generate these paths
    'src/components/atoms/heading/Heading.js',
    'src/components/atoms/image/Image.js',
    'src/components/atoms/link/Link.js',
    'src/components/atoms/list/List.js',
    'src/components/molecules/card/Card.js',
  ],
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true
    }
  ],
  experimentalCodeSplitting: true,
  external: [
    'classnames',
    'is-url-external',
    'prop-types',
    'react',
    'react-dom',
    'react-lazyload',
    'react-router-dom'
  ],
  plugins: [
    external(),
    alias({
      Helpers: path.resolve(__dirname, './src/helpers/index'),
      Atoms: path.resolve(__dirname, './src/components/atoms/index'),
      Molecules: path.resolve(__dirname, './src/components/molecules/index'),
    }),
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
      ]
    }),
    resolve(),
    commonjs()
  ]
}
