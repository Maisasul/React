import React, { Component } from 'react'
import Cards from './Cards'
import Team from './Team'
import img1 from '../person_5.jpg.webp'
import img2 from '../person_6.jpg.webp'
import img3 from '../person_7.jpg.webp'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='dots-frame'>
            <div className='dot'></div>
        </div>
        {/* <Cards name='Maisa' age= '25'/> */}
        <div className='maindiv'>
          <Team img={img1} name='Kaiara Spencer' job='PRODUCT MANAGER'/>
          <Team img={img2} name='Dave Simpson' job='PRODUCT MANAGER'/>
          <Team img={img3} name='Ben Thompson' job='PRODUCT MANAGER'/>
        </div>
      </>
    )
  }
}
