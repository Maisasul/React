import React, { Component } from 'react'
import Card from './Card'
import Person from './Person'
import img1 from '../member-2.jpg.webp'
import img2 from '../member-1.jpg.webp'
import img3 from '../member-8.jpg.webp'
import User from './User'
import Home2 from './Home2'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            cards: [
                {title:"Java", desc:"programming lang"},
                {title:"php", desc:"programming lang"},
                {title:"C#", desc:"programming lang"}
            ]
        }
    }
  render() {
    return (
      <>
        {/* <div className='container'>
            <div className='row'>
                {this.state.cards.map((card)=> <Card title={card.title} desc={card.desc}/>)}
            </div>
        </div> */}
        <div className='maindiv'>
            <Person img={img1} name='Emma Sandoval' desc='Speaker'/>
            <Person img={img2} name='Emma Sandoval' desc='Speaker'/>
            <Person img={img3} name='Emma Sandoval' desc='Speaker'/>
        </div>

        {/* <User title='php' desc='kkkkkkkkk'/> */}
        {/* <div className='container'>
            <div className='row'>
                {this.state.cards.map((card)=> <User title={card.title} desc={card.desc}/>)}
            </div>
        </div> */}
        <Home2 />
      </>
    )
  }
}
