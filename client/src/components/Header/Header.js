import React, { useState } from 'react'
import "./Header.css"
import DigiXplore from '../../pages/WhatWeDo/DigiXplore';
import Homepage from '../../pages/Homepage';
import { NavLink } from 'react-router-dom';
import Menu from '../WhatWeDo/Menu';
// import DigiXplore from 'src\pages\WhatWeDo\DigiXplore';
import ContactMenu from '../Contactus/ContactMenu';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
    const [isContactOpen, setIsContactOpen] = useState(false);  // For "Contact Us" dropdown state
    const toggleContactMenu = () => {
      setIsContactOpen(!isContactOpen);   // Toggle "Contact Us" dropdown
  }
  


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
          <h1>UNNATI WELFARE SOCIETY</h1>
          <p>Revolutionizing present, Transforming Future</p>
          </div>
         <NavLink to='/donation'><button>Donate</button></NavLink>
        </div>
        <div className='UWS-about'>
         <ul>
            <li>
              <NavLink to='/' className={({isActive}) => isActive ? "active-class" : "not-active-class "}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/aboutus' className={({isActive}) => isActive ? "active-class" : "not-active-class "}> About us 
              </NavLink><span ><img src="../Polygon-1.svg"/></span> 
            </li>
            <li> 
              <NavLink to='/whatwedo' className={({isActive}) => isActive ? "active-class" : "not-active-class "}>What we do? </NavLink> <span onClick={() => toggleMenu()} ><img src="../Polygon-1.svg"/></span>
              {isOpen && <Menu/>}
            </li>
            <li>
              <NavLink to='/resources' className={({isActive}) => isActive ? "active-class" : "not-active-class "}>Resources </NavLink><span><img src="../Polygon-1.svg"/></span>
              </li>
            <li>
              <NavLink to='/media' className={({isActive}) => isActive ? "active-class" : "not-active-class "}>Media</NavLink>
            </li>
            <li>
               <NavLink to='/volunteer' className={({isActive}) => isActive ? "active-class" : "not-active-class "}>Volunteer</NavLink>
            </li>
            <li>
                <NavLink to='/contactus' className={({ isActive }) => isActive ? "active-class" : "not-active-class "}>Contact Us</NavLink>
                <span onClick={toggleContactMenu}><img src="../Polygon-1.svg" /></span>
                {isContactOpen && <ContactMenu />} {/* This is the dropdown for "Contact Us" */}
              </li>
              
         </ul>
        </div>
      </div>

    </div>
  )
}

export default Header

