import React, { useState } from 'react'
import Axios from 'axios';
import "./ls.css"
import {useNavigate} from "react-router-dom";
export default function Login({setallow}) {
  const history=useNavigate();
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  
  async function addDetails(e){
    // e.prevetDefault();
    await Axios.post("http://localhost:5000/get",{
      email,password
    }).then((res)=>{
        if(res.data=="exist"){
          // setallow(true);
            history("/home")
        }
        else if(res.data=="notexist"){
          history("/");
        }
    })
}

  return (
    <div className='main'>
      <div  class="signup">

      <label for="chk" aria-hidden="true">Login</label>
            <input placeholder="email"  type="email" name="email" value={email}  onChange={(e)=>{
                setemail(e.target.value)
            }}/>
            <br/>
            <input placeholder="password" type="password" value={password} name="password" onChange={(e)=>{
                setpassword(e.target.value)
            }}/>
            <br/>
            <button onClick={addDetails}>Login</button>
            <br/>
            <button><a href='/' style={{color:"white",textDecoration:"none"}}>Signup</a></button>

      
      </div>     
    </div>
  )
}
