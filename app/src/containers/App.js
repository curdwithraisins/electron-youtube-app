import React, { Component } from 'react'
import Menu from '../components/Menu'

export default class App extends Component {
  render () {
    return (
      <div className="container">
        <Menu/>
        { this.props.children }
      </div>
    )
  }
}