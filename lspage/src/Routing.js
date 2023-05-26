import {Route,BrowserRouter,Routes} from "react-router-dom"
import React, { useState } from 'react'
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Subscription from "./components/Subscription"
import CartPage from "./components/CartPage"

export default function Routing(props) {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}/>
          <Route path="/home" element={<Home allow={props.allow}/>} />
          <Route path="/login" element={<Login setallow={props.setallow()}/>} />
          <Route path="/Subscription" element={<Subscription/>} />
          <Route path="/CartPage" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
    
  )
}
