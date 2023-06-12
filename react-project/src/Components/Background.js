import React from 'react'
import { Link } from 'react-router-dom'
const Background = () => {
  return (
    <div className='background d-flex justify-content-center align-items-center'>
      <div className="h-50 text-center text-white">
        <h1><img style={{width:'40px'}} src="logo.png" alt="" /><b> SIMPLYREAD</b></h1>
        <h1 className='mt-5'>OVER 100 BOOKS</h1>
        <a href="#input-search" style={{textDecoration:'none'}}>
         <button class="button m-auto mt-5" style={{width:"100%",background:"white",color:"black",height:"70px",fontSize:"larger"}}><span><b>Search for books</b></span></button>
      </a>

      </div>
    </div>
  )
}

export default Background
