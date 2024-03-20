"use client"

import React, { useState } from 'react'
const Example2 = () => {
const [counter, setCounter] = useState(0)

    const handleAdd = () => {
       setCounter(counter + 1)
    }
    const handleMinus = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
        else{
            setCounter(counter)
        }
         
    }
  return (
    <>
    <div>{counter}</div>
    <button onClick={handleMinus}>-</button>
    <button onClick={ handleAdd}>+</button>
    </>
  )
}

export default Example2;