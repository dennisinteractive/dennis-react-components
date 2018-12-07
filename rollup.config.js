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
    'src/components/card/Card.js',
    'src/components/heading/Heading.js',
    'src/components/image/Image.js',
    'src/components/link/Link.js',
    'src/components/list/List.js',
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
