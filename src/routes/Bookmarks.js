import React, { Component } from 'react'
import Home from './Home'

export default class Bookmarks extends Component {
  render() {
    // You found a secret: Bookmarks is the same as Home. Let's talk
    // about that in class ...
    return <Home {...this.props} />
  }
}
