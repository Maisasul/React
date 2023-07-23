import React, { Component } from 'react'

export default class Data extends Component {
    constructor(){
        super()
        this.state = {
            animal: ["Dog","Cow","Horse","Tiger"],
            color: ["red","green","black"]
        }
    }
  render() {
    let {color} = this.state //distruzct
    return (
      <>
        <h3>list of animal</h3>
        <ul>
            {this.state.animal.map((a)=> <li>{a}</li>)}
        </ul>
        <h3>list of colors</h3>
        <ol>
            {color.map((c)=> <li>{c}</li>)}
        </ol>
      </>
    )
  }
}
