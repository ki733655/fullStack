"use client";
import React from "react";
const Example1 = () => {
  const arr = ["khairul", "Aiyan", "Rahul", "Sahil", "Salman"];
  return (
    <>
      {arr.map((item, idx) => {
        return (
          <>
            <h1 key={idx}>{item} </h1>
            
          </>
        );
      })}
    </>
  );
};

export default Example1;
