import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link" style={{color:"white" ,fontSize:"large"}} href="#"><img style={{width:'30px'}} src="logo.png" alt="" /> <b>SIMPLYREAD</b></a>
            </li>
            <li className="nav-item">

              <a className="nav-link" style={{color:"white",fontSize:"large"}} href="/">All books</a>
            </li>
          </ul>
          

        </div>
      </div>
    </nav>
  
  )
}

export default Nav
