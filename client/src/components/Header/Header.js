import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <div className='HeaderContainer'>
      <div className='logo'>
        
      </div>
      <div className='logo2'>
      <img src="..\logo.svg" alt="logo"/>
      </div>
      <div className='UWS'>
        <div className='UWS-Heading'>
          <div className='UWS-Header'>
          <h1>Unnati Welfare Society</h1>
          <p>Revolutionizing present, Transforming Future</p>
          </div>
         <button>Donate</button>
        </div>
        <div className='UWS-about'>
         <ul>
            <li>Home</li>
            <li>About us <span><img src="../Polygon-1.svg"/></span> </li>
            <li>What we do?  <span><img src="../Polygon-1.svg"/></span></li>
            <li>Resources  <span><img src="../Polygon-1.svg"/></span></li>
            <li>Media</li>
            <li>Volunteer</li>
            <li>Contact us  <span><img src="../Polygon-1.svg"/></span> </li>
              
         </ul>
        </div>
      </div>

    </div>
  )
}

export default Header

