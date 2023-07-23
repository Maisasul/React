import React, { Component } from 'react'

export default class Slider extends Component {
    constructor(){
        super()
        this.state = {
            workat: "Code Academy"
        }
    }
  render() {
    return (
      <div>
        Slider
        <h3>work at: {this.state.workat}</h3>
      </div>
    )
  }
}
