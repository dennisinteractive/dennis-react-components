# dennis-react-components

> Reusable React components for Dennis brands

Built with https://github.com/transitive-bullshit/create-react-library

## Install

```bash
yarn add dennis-react-components
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'dennis-react-components'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## Issues

The [create-react-library](https://github.com/transitive-bullshit/create-react-library) this has been built with is aimed at standard single page apps, and as such integrating it with SSR poses a few issues which will need further attention

* __CSS bundling__

  The [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss) package used to handle css modules imports uses [style-inject](https://github.com/egoist/style-inject) to add the compiled sass to the head when a component is used. This results in a FOUC for any components from the library when used in SSR
  
  We'd need to find a way to bundle the component CSS in the app using `MiniCssExtractPlugin` to be able to render the css on the server

* __Dynamic Loading__

  We're able to dynamically load our app level components easily with [loadable-components](https://github.com/smooth-code/loadable-components), however I've not managed to get it working with external components. It should be possible by importing as a [named import](https://github.com/smooth-code/loadable-components/issues/97#issuecomment-396792618), but I've not been able to get it to work.

  Dynamic imports do seem to work when done directly in the component library, however when used in the app this just results in them ending up in the main bundle which defeats the point of them