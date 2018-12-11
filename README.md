# dennis-react-components

> Reusable React components for Dennis brands

## Install

```bash
yarn add dennis-react-components
```

## Usage

Currently designed to be used with [@loadable/component](https://github.com/smooth-code/loadable-components) to dynamically import components

Both the library and app should use the same [Atomic](http://bradfrost.com/blog/post/atomic-web-design/) folder structure

At the app level each atomic folder (e.g. *Atoms*) should contain an index.js file that exports dynamically loaded components from the component library, e.g:

```jsx
import loadable from '@loadable/component';

export const Heading = loadable(() => import('../../../../node_modules/dennis-react-components/src/components/atoms/heading/Heading'));
export const Image = loadable(() => import('../../../../node_modules/dennis-react-components/src/components/atoms/image/Image'));
export const Link = loadable(() => import('../../../../node_modules/dennis-react-components/src/components/atoms/link/Link'));
export const List = loadable(() => import('../../../../node_modules/dennis-react-components/src/components/atoms/list/List'));
```

_The verboise relative path is unavoidable unfortunately, as neither variables or aliases are accepted as an argument for dynamic imports_

Using this method the app can import components using a simple named import syntax, without having to be aware of the dynamic loading

```jsx
import { Heading, Image, Link } from 'Atoms';
```

If an app needs to override a library component then the export from the Atomic folder index.js file can just be changed to use a local copy

## App Babel configuration

All transpiling of the component code is done by the app (as opposed to the library providing commonjs output itself). This requires a few modifications to the app setup

### babel.config.js

In order to allow the app to transpile code from the node_modules folder it needs to use the newer `babel.config.js` config method instead of `.babelrc`

https://babeljs.io/docs/en/config-files#project-wide-configuration

### babel/register

When using [babel/register](https://babeljs.io/docs/en/babel-register) we need to override the default [ignore configuration](https://babeljs.io/docs/en/babel-register#ignores-node-modules-by-default) to tell it to still ignore node_modules (which it does by default) but to not ignore our dennis-react-components package

```js
require("@babel/register")({
  // Ignore node_modules folder except for dennis-react-components library
  ignore: [
    /node_modules\/(?!dennis-react-components)/
  ],
});
```

### webpack loader configuration

We use the same regex as above in the `babel-loader` section of our webpack config

```js
{
  test: /\.(js|jsx)$/,
  use: "babel-loader",
  exclude: /node_modules\/(?!dennis-react-components)/
},
```

## Adding components to the library

* Add new component in it's own folder to [src/components](src/components)

Any external libraries needed by components should be added as a dependency (instead of a dev dependency) to the project

## ToDos

* __Styleguidist__

  Set up [styleguidist](https://github.com/styleguidist/react-styleguidist) - need to setup webpack config for this to work
