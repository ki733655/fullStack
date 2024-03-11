"use client"

import React from 'react'


const Example1 = () => {
    const handle = () => {
        alert("You clicked the button")
    }
  return (
    <div>
        <button onClick={handle}>Click</button>
    </div>
  )
}

export default Example1;