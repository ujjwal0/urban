import React from 'react'
import {useNavigate} from "react-router-dom"
import "./home.css"

import shoe from "./images/Shoe.png"
export default function Home(props) {
  const navigate = useNavigate();
  // if(props.alllow!=true){
  //     navigate("/")
  // }
  return (
    
    <div>
        <div className='logo'>
            <p className='logo-left'>URBANKICKS</p>
        </div>
        <div className='left'>
          <h1 className='left-heading'>Find your<br/> dream Sneakers</h1>
          <p className='left-para'>Find your shoes from various collections.<br/>Here shoes are endless and porfit is endless</p>
          <button onClick={()=>{navigate('/Subscription')}} className='left-button'>Explore now</button>
        </div>
        <div className='circle'>
          <div className='shoecont'>
          <img  className='shoe bounce' src={shoe} />
          </div>  
          <div className='shadow'></div> 
        </div>
    </div>
  )
}
