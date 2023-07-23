import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div className='card'>
        <h1>Name: {this.props.name}</h1>
        <h1>Age: {this.props.age}</h1>
      </div>
    )
  }
}
