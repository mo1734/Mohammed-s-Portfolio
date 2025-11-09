import React from 'react'
import Lottie from 'lottie-react';
import Erorr from "../assets/Lotti/Error 404.json"
import { NavLink } from 'react-router-dom';
function Error() {
  return (

    <div className='d-flex w-100 h-100 justify-content-center align-items-center' >
      <Lottie
      className='w-50'
      animationData={Erorr}
      loop={true}
      autoPlay={true}
      />
      <NavLink to={"/"} style={{fontSize : "18px" , textDecoration : "none"}} className= "text-warning">Back To Home Page</NavLink>
    </div>
  )
}

export default Error
