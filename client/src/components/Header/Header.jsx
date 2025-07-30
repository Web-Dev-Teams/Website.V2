import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from '../WhatWeDo/Menu';
import ContactMenu from '../Contactus/ContactMenu';
import './Header.css';

const Header = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => setIsOpen(v => !v);
  const toggleContactMenu = () => setIsContactOpen(v => !v);
  const toggleMobileMenu = () => setMobileMenuOpen(v => !v);

  // Close on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false);
      if (contactRef.current && !contactRef.current.contains(e.target)) setIsContactOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  return (
    <header className='HeaderContainer'>
      <div className='logo'></div>
      <div className='logo2'>
        <img src="./group.png" alt="Unnati Welfare Society Logo" />
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
          <NavLink to='/' className="donate-link">
            <button onClick={() => window.open('/', '_blank')}>Donate</button>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className='UWS-about desktop-nav'>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Home</NavLink>
            </li>

            <li>
              <NavLink to='/aboutus' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>
                About us <span><img src="../Polygon-1.svg" alt="dropdown" /></span>
              </NavLink>
            </li>

            {/* WHAT WE DO dropdown */}
            <li ref={menuRef} className="header-dropdown-wrapper">
              <div
                className={`header-dropdown-toggle ${isOpen ? 'open' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleMenu(); }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
              >
                <span className="not-active-class" onClick={() => navigate('/whatwedo')}>
                  What we do? <img src="../Polygon-1.svg" alt="dropdown" />
                </span>
              </div>

              {isOpen && (
                <div className="header-dropdown-menu">
                  <Menu closeMenu={() => setIsOpen(false)} />
                </div>
              )}
            </li>

            <li>
              <NavLink to='/resources' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>
                Resources <span><img src="../Polygon-1.svg" alt="dropdown" /></span>
              </NavLink>
            </li>

            <li>
              <NavLink to='/media' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Media</NavLink>
            </li>

            <li>
              <NavLink to='/volunteer' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Volunteer</NavLink>
            </li>

            {/* CONTACT dropdown (optional same pattern) */}
            <li ref={contactRef} className="header-dropdown-wrapper">
              <div
                className={`header-dropdown-toggle ${isContactOpen ? 'open' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleContactMenu(); }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleContactMenu()}
              >
                <span className="not-active-class" onClick={() => navigate('/contactus')}>
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
        </nav>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
          <ul>
            <li><NavLink to='/' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Home</NavLink></li>
            <li><NavLink to='/aboutus' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>About us</NavLink></li>
            <li><NavLink to='/whatwedo' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>What we do?</NavLink></li>
            <li><NavLink to='/resources' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Resources</NavLink></li>
            <li><NavLink to='/media' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Media</NavLink></li>
            <li><NavLink to='/volunteer' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Volunteer</NavLink></li>
            <li><NavLink to='/contactus' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

