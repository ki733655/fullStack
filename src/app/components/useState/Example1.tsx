"use client";
import React, { useState } from "react";
const Example1 = () => {
  const [color, setColor] = useState("");
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: color }} className="main">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
      </div>
    </>
  );
};

export default Example1;
