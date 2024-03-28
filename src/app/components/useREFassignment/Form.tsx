"use client"
import React, { useRef } from 'react'

const Form = () => {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    }
  return (
    <>
    <div style={{display : "flex" , flexDirection: "column", width: "100vw", alignItems: "center"}}>

    <input type="text"placeholder='name' />
    <input ref={inputRef} type="email" placeholder='Your email' />
    <input type="text" placeholder='Age'/>
    <input type="text" placeholder='Address' />
    <input type="text" placeholder='Phone Number' />
    <button onClick={handleClick}>Go to email</button>
    </div>

    </>
  )
}

export default Form