import React, { useState } from 'react'

export default function Counter() {
    let [x,setX] = useState(0)
  return (
    <>
        <div className='jj'>
            <div className='cccc'>
                <h1>count is: {x}</h1>
                </div>
            <div className='nnnn'>
                <button onClick={increment} className='btn btn-success'>Increment</button>
                <button onClick={set} className='btn btn-secondary'>set</button>
                <button onClick={decrement} className='btn btn-danger'>Decrement</button>
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
