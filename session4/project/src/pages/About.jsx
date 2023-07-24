import React, { useState } from 'react'
import axios from 'axios'

export default function About() {
    let [git,setGit] = useState()
  return (
    <>
        <button onClick={click}>GitHub</button>
        <img src= {git}/>
    </>
  )
  function click(){
    axios.get("http://api.github.com/users/Maisasul").then((res)=>{
        console.log(res.avatar_url)
        // setGit(res.avatar_url)
        setGit(res.data.avatar_url)
    })
  }
}
