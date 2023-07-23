import React, { Component } from 'react'

export default class About extends Component {
    constructor(){
        super()
        this.state = {
            email:"maisa@gmail.com"
        }
    }
  render() {
    return (
      <div>
        About Component
        <h5>email {this.state.email}</h5>
      </div>
    )
  }
}
