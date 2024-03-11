"use client"
import React from 'react'
const Example4 = () => {
    const handle = (e:any) => {
        console.log(e.target.value)
    }
  return (
    <div>
        <input onChange= {handle} type="text" placeholder='Type anything' />
    </div>
  )
}

export default Example4;