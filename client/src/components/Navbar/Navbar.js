import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        
    <header>
        <div className="nav1">
            <div className="nav1-1">
                <div>
                    <img src="https://www.code-x.in/images/logo.bmp" alt=""/>
                    </div>
                    <div className='nav1-1-1'>
                    <i class="fa fa-envelope"></i>
                        <span>support@codex.in </span>
                    <i class="fa fa-phone"></i>
                    <span class="reach-us-font"> 0731-4088816, 93019-70501</span>
                        </div>
                    </div>
            <div className="nav2">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                     
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Clients">Clients</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Services">Services</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/Solutions'>Solutions</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/SurveySolutions">Survey Solution</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/Aboutus">About Us</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="contact_us.html">Contact Us</NavLink>
                          </li>
                         
                        </ul>
                        
                      </div>
                    </div>
                  </nav>
           </div>
        </div>
    </header>

    </>
  )
}

export default Navbar