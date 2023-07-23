import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            name: "Maisa",
            age: 25
        }
    }
  render() {
    return (
      <div>
        <div class="header">
            <a href="#" class="logo"> Portfolio.</a>
            <nav class="navbar">
                    <a href="#" class="active">Home</a>
                    <a href="aboutMe.html">About me</a>
                    <a href="Skills.html">Skills</a>
                    <a href="Experience.html">Experience</a>
                    <a href="Projects.html">Projects</a>
            </nav>
        </div>
      </div>
    )
  }
}
