import React, { useState } from 'react'
import Axios from 'axios';
import "./ls.css"
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
    <div className='main'>
        <div className='signup'>
        <label for="chk" aria-hidden="true">Signup</label>
            <input placeholder='user name' type="text" name="name"  value={name} onChange={(e)=>{
                setname(e.target.value)
            }} />
            <input placeholder='email' type="email" name="email" value={email}  onChange={(e)=>{
                setemail(e.target.value)
            }}/>
            <input placeholder='password' type="password" name="password" value={password}  onChange={(e)=>{
                setpassword(e.target.value)
            }} />
            <button style={{marginTop:"35px"}} onClick={addDetails}>Signup</button>
            <button style={{marginTop:"35px"}}><a style={{color:"white",textDecoration:"none"}} href='/login'>Login</a></button>

       </div>
  </div>
  )
}
