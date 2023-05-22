import React, { useState } from 'react'
import Axios from 'axios';
export default function Signup() {
 const [name,setname]=useState("");
 const [email,setemail]=useState("");

 const [password,setpassword]=useState("");
 async function addDetails(e){
    // e.prevetDefault();
    await Axios.post("http://localhost:5000/add",{
        name:name,
        email:email,
        password:password
    }).then(()=>{
        console.log("api hit")
    }).catch((err)=>{
        console.log(err);
    })

}
 
  return (
    <div>
        <>
            <label htmlFor="name" >Name: </label>
            <input type="text" name="name"  value={name} onChange={(e)=>{
                setname(e.target.value)
            }} />
            <br />
            <label htmlFor="email">email: </label>
            <input type="email" name="email" value={email}  onChange={(e)=>{
                setemail(e.target.value)
            }}/>
            <br />
            <label htmlFor="password">password: </label>
            <input type="password" name="password" value={password}  onChange={(e)=>{
                setpassword(e.target.value)
            }} />
            <br />
            <button onClick={addDetails}>submit</button>
       </>
  </div>
  )
}
