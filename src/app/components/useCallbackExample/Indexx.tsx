"use client";
import React, { useState } from "react";
import App from "./App";
import { useCallback } from "react";

const Indexx = () => {
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([]);

  const add = () => {
    setCounter((val) => val + 1);
  };

  const addtodo = useCallback(() => {
    setArr((prev) => [...prev, "newtodo"]);
  }, [arr]);

  return (
    <>
      <App addtodo={addtodo} arr={arr} />
      Count is {counter}
      <button onClick={add}>+</button>
    </>
  );
};

export default Indexx;
