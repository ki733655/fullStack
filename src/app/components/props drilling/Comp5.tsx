"use client";
import React from "react";
import { useContext } from "react";
import{ UserContext} from "./Comp1"

const Comp5 = () => {
  const data = useContext(UserContext);
  return (
    <>
      <h1>{data}</h1>
    </>
  );
};

export default Comp5;
