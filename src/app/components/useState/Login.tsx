"use client"
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({
   username : "",
   password: ""
  })
  // const [pass, setPass] = useState("")

// const handleChange1 = (e:any) => {
//       setData(e.target.value)
      
// }

// const handleChange2 = (e:any) => {
//   setData(e.target.value)
  
// }

  const handleSubmit = () => {
      alert(`Your id is ${data.username} and your pass is ${data.password}`)
  }
  return (
    <>
      <div className="login">
        <form className="form" onSubmit={handleSubmit} >
          <h1>Login page</h1>
          <div className="username">
            <label htmlFor="">User Id :</label>
            <input value={data.username} onChange={(e:any) => setData({...data, username: e.target.value})} type="text" />
          </div>
          <div className="password">
            <label htmlFor="">Password : </label>
            <input value= {data.password} onChange={(e:any) => setData({...data, password: e.target.value})} type="password" />
          </div>
          <div className="submit">
            <input type="submit"  value="Submit"/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
