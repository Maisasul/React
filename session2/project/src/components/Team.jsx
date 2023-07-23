import React, { Component } from 'react'

export default class Team extends Component {
  render() {
    return (
      <>
        <div className='all'>
            <div className='team'>
                <img src={this.props.img}/>
                <div className='rectangle'></div>
            </div>
            <div className='text'>
                <p className='namep'>{this.props.name}</p>
                <p className='jobb'>{this.props.job}</p>
            </div>
        </div>
      </>
    )
  }
}
