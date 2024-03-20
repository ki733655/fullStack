"use client";
import React from "react";
const Example3 = () => {

    const handle = (e:any) => {
        if(e.target){
          e.target.style.color = "red";
        }
    }
    const handleOut = (e:any) => {
      if(e.target){
        e.target.style.color = "";
      }
    }
    
  return (
    <div>
      <button  onMouseOver={handle} onMouseOut={handleOut} >Hover me</button>
    </div>
  );
};

export default Example3;
