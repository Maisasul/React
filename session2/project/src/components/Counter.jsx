import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
  render() {
    return (
      <>
        <h1>count is : {this.state.count}</h1>
        <button onClick={this.increment}>أستغفر الله</button>
        <button onClick={this.reSet}>أعد التسبيح</button>
      </>
    )
  }

  increment = ()=> {
    this.setState({'count':++this.state.count})
  }
  reSet = ()=> {
    this.setState({'count':0})
  }
}
