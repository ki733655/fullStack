"use client"
import React, { useRef, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(null)
    const [start, setStart] = useState(null)
    const intervalRef = useRef(null)
    const startTime = () => {
        
        setStart(Date.now())
        setCount(Date.now())
         intervalRef.current = setInterval(() => {
            setCount(Date.now())
        },1000)
    }

    const stopTime = () => {
        clearInterval(intervalRef.current)
    }
   
    let minutepassed = 0;
    if (count != null && start != null) {

        minutepassed = (count - start)/1000
    }


  return (
    <>
    <div>{Math.round(minutepassed)}</div>
    <button onClick={startTime}>Start</button>
    <button onClick={stopTime}>Stop</button>
    </>
  )
}

export default Timer;
// import { useState, useRef } from 'react';

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         Start
//       </button>
//       <button onClick={handleStop}>
//         Stop
//       </button>
//     </>
//   );
// }
