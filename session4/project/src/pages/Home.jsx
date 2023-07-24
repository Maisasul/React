import React, { useState } from 'react'
import axios from 'axios'
export default function Home() {
    let [data,setData] = useState([])
  return (
    <>
        <button onClick={getuser}>get data</button>
        <ul>
            {data.map((user) => <li>{user.name}</li>)}
        </ul>
    </>
  )

  function getuser(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        setData(res.data)
    })
  }
}
