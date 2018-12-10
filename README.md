# dennis-react-components

> Reusable React components for Dennis brands

Built with https://github.com/transitive-bullshit/create-react-library

## Install

```bash
yarn add dennis-react-components
```

## Usage

Currently designed to be used with [@loadable/component](https://github.com/smooth-code/loadable-components) to dynamically import components

```jsx
import loadable from '@loadable/component';

const Card = loadable(() => import('../../../../node_modules/dennis-react-components/dist/Card'));
```

The verboise relative path is unavoidable unfortunately, as neither variables or aliases are accepted as an argument for dynamic imports

## Adding components

* Add new component in it's own folder to [src/components](src/components)
* Add new component's path to [rollup.config.js](rollup.config.js)
* `yarn build`

Any external libraries needed by components should be added to the external section of [rollup.config.js](rollup.config.js) and added as a dependency (instead of a dev dependency) to the project. This is to ensure those components don't get bundled into the component

## Importing components within other components

Rather than importing other components directly using relative paths we should use the app's defined Atomic paths

e.g. In the Card component, using:

```jsx
import { Heading, Image, Link } from 'Atoms';
```

instead of:

```jsx
const Heading = loadable(() => import('./Heading'));
const Image = loadable(() => import('./Image'));
const Link = loadable(() => import('./Link'));
```

Ensures that the dynamic loading is handled at the app level instead of the child components getting bundled up unecessarrily inside the Card component

## ToDos

* __CSS bundling__

  The [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss) package used to handle css modules imports uses [style-inject](https://github.com/egoist/style-inject) to add the compiled sass to the head when a component is used. This results in a FOUC for any components from the library when used in SSR
  
  We need to find a way to bundle the component CSS in the app using `MiniCssExtractPlugin` to be able to render the css on the server

* __Styleguidist__

  Set up [styleguidist](https://github.com/styleguidist/react-styleguidist) - this may provide some issues where styleguidist needs to be told the Atomic paths for specific components