import React, { useState } from 'react'

export default function Counter() {
    let [x,setX] = useState(0)
  return (
    <>
        <div className='jj'>
            <div className='cccc'>
                <h1>{x} :التسبيح</h1>
                </div>
            <div className='nnnn'>
                <button onClick={increment} className='btn btn-success'>أستغفر الله</button>
                <button onClick={set} className='btn btn-secondary'>أعد التسبيح</button>
                <button onClick={increment} className='btn btn-danger'>سبحان الله</button>
            </div>
        </div>
    </>
  )

  function increment(){
    setX(++x)
  }
  function decrement(){
    setX(--x)
  }
  function set(){
    setX(0)
  }
}
