import React from 'react'
import "./NavBar.scss"
const NavBar = () => {
  return (
   <>
   <nav>
    <div className="container">
        <div className="nav">
            <div className="nav_left">
             <h1>Tasty</h1>
            </div>
            <ul className="nav_right">
              <li>Home</li>
              <li>Menu</li>
              <li>Specialities</li>
              <li>Reservation</li>
              <li>Blog</li>
              <li>About</li>  
              <li>Contact</li>  
        
            </ul>
            <div className="menu">
              Menu
            </div>
        </div>
    </div>
   </nav>
   </>
  )
}

export default NavBar