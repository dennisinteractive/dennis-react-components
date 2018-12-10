# dennis-react-components

> Reusable React components for Dennis brands

Built with https://github.com/transitive-bullshit/create-react-library

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

export const Heading = loadable(() => import('../../../../node_modules/dennis-react-components/dist/Heading'));
export const Image = loadable(() => import('../../../../node_modules/dennis-react-components/dist/Image'));
export const Link = loadable(() => import('../../../../node_modules/dennis-react-components/dist/Link'));
export const List = loadable(() => import('../../../../node_modules/dennis-react-components/dist/List'))
```

_The verboise relative path is unavoidable unfortunately, as neither variables or aliases are accepted as an argument for dynamic imports_

Using this method components from both the library and at app level can import components using a simple named import syntax, without having to be aware of the dynamic loading

If an app needs to override a library component then the export from the Atomic folder index.js file can just be changed to use a local copy

```jsx
import { Heading, Image, Link } from 'Atoms';
```

## Adding components to the library

* Add new component in it's own folder to [src/components](src/components)
* Add new component's path to [rollup.config.js](rollup.config.js)
* `yarn build`

Any external libraries needed by components should be added to the external section of [rollup.config.js](rollup.config.js) and added as a dependency (instead of a dev dependency) to the project. This is to ensure those components don't get bundled into the component

## Importing components within other components

Any child components imported in other components should be added as an external to [rollup.config.js](rollup.config.js) (for our Atomic named import approach this can be done just by adding the top level Atomic folder - e.g. _Atoms_). This ensures that the child components aren't bundled up with the parent, allowing them to by dynamically loaded by the app.

## ToDos

* __CSS bundling__

  The [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss) package used to handle css modules imports uses [style-inject](https://github.com/egoist/style-inject) to add the compiled sass to the head when a component is used. This results in a FOUC for any components from the library when used in SSR
  
  We need to find a way to bundle the component CSS in the app using `MiniCssExtractPlugin` to be able to render the css on the server

* __Styleguidist__

  Set up [styleguidist](https://github.com/styleguidist/react-styleguidist) - this may provide some issues where styleguidist needs to be told the Atomic paths for specific components