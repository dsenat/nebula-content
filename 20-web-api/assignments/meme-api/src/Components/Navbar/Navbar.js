import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className = "Navbar">
        <div className = "container">
        <div className ="left">
            <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_logo.svg.png" alt =""
            />
            <span>Homepage</span>
            <span>Trending Movies</span>
            <span>Movies</span>
            <span>Series</span>
               </div>
        <div className = "right">
            </div>    
        </div>
    </div>
  )
}

export default Navbar