"use client"
import React from "react";
const Example2 = () => {
  const handle = () => {
    alert("form submitted")
  };
  return (
    <>
      <form onSubmit={handle}>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Age</label>
        <input type="number" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Example2;
