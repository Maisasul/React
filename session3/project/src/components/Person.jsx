import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <>
        <div className='allP'>
            <div className='person'>
                <img src={this.props.img} />
                <div className='info'>
                    <h4>{this.props.name}</h4>
                    <h6>{this.props.desc}</h6>
                </div>
                <div className='boxIcon'></div>
            </div>
        </div>
      </>
    )
  }
}
