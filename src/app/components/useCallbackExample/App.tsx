"use client"
import React from 'react'
import {memo} from "react"
 
const App = ({addtodo,arr}) => {
    console.log("child render")
  return (
    <div>
        {arr.map(( item, idx) => {
           return (
            <p key={idx}> {item}</p>
           )
        })}
        <button onClick={addtodo}>Add Todo</button>
    </div>
  )
}

export default memo(App);