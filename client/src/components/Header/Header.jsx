import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from '../WhatWeDo/Menu';
import ContactMenu from '../Contactus/ContactMenu';
import './Header.css';

const Header=()=>{
  return (
    <h1>HEADER</h1>
  )
}
/*
const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuRef = useRef(null);
  const contactRef = useRef(null);


  // const toggleMobileMenu = () => setMobileMenuOpen(v => !v);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleContactMenu = () => {
    setIsContactOpen(!isContactOpen);
  };
  const toggleMobileMenu = () => setMobileMenuOpen(v => !v);

    useEffect(() => {
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false);
      if (contactRef.current && !contactRef.current.contains(e.target)) setIsContactOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  return (
    <div className='HeaderContainer'>
      <div className='logo'></div>
      <div className='logo2'>
        <img src="./group.png" alt="logo" />
      </div>
      <button
        className="hamburger"
        onClick={toggleMobileMenu}
        aria-label="Menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg width="15" height="15" viewBox="0 0 30 30" aria-hidden="true">
          <title>Menu</title>
          <path d="M3 9H27M3 15H27M3 21H27" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
      <div className='UWS'>
        <div className='UWS-Heading'>
          <div className='UWS-Header'>
            <h1>UNNATI WELFARE SOCIETY</h1>
            <p>Revolutionizing present, Transforming Future</p>
          </div>
          //{ Modified Donate button to scroll to section  }

          <NavLink to='/donation#donate-form'>
            <button>Donate</button>
          </NavLink>
        </div>
        <div className='UWS-about'>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Home</NavLink>             
            </li>
            <li>
              <NavLink to='/aboutus' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>About us</NavLink>
              <span><img src="../Polygon-1.svg" alt="dropdown icon" /></span>
            </li>
             // {<NavLink to='/whatwedo' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>What we do?</NavLink>
             // <span onClick={toggleMenu}><img src="../Polygon-1.svg" alt="dropdown icon" /></span>
             // {isOpen && <Menu />} }
              <li ref={menuRef} className="header-dropdown-wrapper">
  <div
    className={`header-dropdown-toggle ${isOpen ? 'open' : ''}`}
    onClick={(e) => {
      e.stopPropagation();
      toggleMenu();
    }}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
  >
    <NavLink
      to="/whatwedo"
      className={({ isActive }) =>
        `${isActive ? 'active-class' : 'not-active-class'}`
      }
    >
      What we do? <img src="/Polygon-1.svg" alt="dropdown" />
    </NavLink>
  </div>

  {isOpen && (
    <div className="header-dropdown-menu">
      <Menu closeMenu={() => setIsOpen(false)} />
    </div>
  )}
</li>

            <li>
              <NavLink to='/resources' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Resources</NavLink>
              <span><img src="../Polygon-1.svg" alt="dropdown icon" /></span>
            </li>
            <li>
              <NavLink to='/media' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Media</NavLink>
               <span><img src="../Polygon-1.svg" alt="dropdown icon" /></span>
            </li>
            <li>
              <NavLink to='/volunteer' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Volunteer</NavLink>
               <span><img src="../Polygon-1.svg" alt="dropdown icon" /></span>
            </li>
            <li ref={contactRef} className="header-dropdown-wrapper">
               <div
                className={`header-dropdown-toggle ${isContactOpen ? 'open' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleContactMenu(); }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleContactMenu()}
              >
                 <span className={({ isActive }) => isActive ? "active-class" : "not-active-class"} onClick={() => navigate('/contactus')}>
                   Contact Us <img src="../Polygon-1.svg" alt="dropdown" />
                 </span>
               </div>
               {isContactOpen && (
                <div className="header-dropdown-menu">
                   <ContactMenu closeMenu={() => setIsOpen(false)} />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
*/
export default Header;

