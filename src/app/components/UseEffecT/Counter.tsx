"use client";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [counter]);
  return (
    <>
      <h1>Your count is {counter}</h1>
    </>
  );
};

export default Counter;
