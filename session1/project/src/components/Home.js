import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            live: "Oman"
        }
    }
  render() {
    return (
      <div>
        Home Component<br/>
        <h3>Live in {this.state.live}</h3>
        <button>Button</button>
      </div>
    )
  }
}
