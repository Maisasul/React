import React, { useState } from 'react'
import User from './User'

export default function Home2() {
    let [user] = useState(
        [
            {title:"Java", desc:"programming lang"},
            {title:"php", desc:"programming lang"},
            {title:"C#", desc:"programming lang"}
        ]
    )
  return (
    <>
        <div className='container'>
            <div className='row'>
                {user.map((users)=> <User title={users.title} desc={users.desc}/>)}
            </div>
        </div>
    </>
  )
}
