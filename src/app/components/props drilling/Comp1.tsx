"use client";
import React, { useState } from "react";
import Comp2 from "./Comp2";
import { createContext } from "react";
export const UserContext = createContext("");

const Comp1 = () => {
  const [name, setName] = useState("khairul");
  return (
    <>
      <UserContext.Provider value={name}>
        <Comp2  />
      </UserContext.Provider>
    </>
  );
};

export default Comp1;