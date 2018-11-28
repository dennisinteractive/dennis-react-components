import React, { Component } from 'react'

import { Card } from 'dennis-react-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <Card 
          title='Example Card'
          link='/'
          image='https://placeimg.com/640/480/animals'
        />
      </div>
    )
  }
}
