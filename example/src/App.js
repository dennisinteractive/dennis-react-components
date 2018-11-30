import React, { Component } from 'react'

import { Card } from 'dennis-react-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <Card 
          title='Example Card'
          path='https://placeimg.com/640/480/animals'
          image='https://placeimg.com/640/480/animals'
        />
      </div>
    )
  }
}
