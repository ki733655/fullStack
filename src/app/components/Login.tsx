"use client";
import React from "react";

const Login = () => {
  const handle = (e: any) => {
    e.preventDefault();
    const data = e.target[1].value==123 && e.target[0].value=="Khairul";

   data ? (alert("You logged in")) : (alert("Wrong password"));

  };
  return (
    <div>
      <form onSubmit={handle}>
        <label>Name</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
