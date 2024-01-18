import React, { useState } from 'react'
import "./NavBar.scss"
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const basket = useSelector((state) => state.basket.basket)
console.log(basket);
const [newbasket, setnewbasket] = useState([])
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
              <li>basket <sub>{basket.length}</sub></li>

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