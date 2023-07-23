import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            name: "Maisa"
        }
    }
  render() {
    return (
      <div>
        <h2>My name is {this.state.name}</h2>
      </div>
    )
  }
}
