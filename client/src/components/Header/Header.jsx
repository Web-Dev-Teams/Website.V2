import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../WhatWeDo/Menu';
import ContactMenu from '../Contactus/ContactMenu';
import './Header.css';

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleContactMenu = () => setIsContactOpen(!isContactOpen);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <header className='HeaderContainer'>
            <div className='logo'></div>
            <div className='logo2'>
                <img src="../logo.svg" alt="Unnati Welfare Society Logo" />
            </div>

            

            <button
                        className="hamburger"
                        onClick={toggleMobileMenu}
                        aria-label="Menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <svg width="15" height="15" viewBox="0 0 30 30">
                            <path
                                d="M3 9H27M3 15H27M3 21H27"
                                stroke="#FFFFFF"

                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>

            <div className='UWS'>
                <div className='UWS-Heading'>
                    <div className='UWS-Header'>
                        <h1>UNNATI WELFARE SOCIETY</h1>
                        <p>Revolutionizing present, Transforming Future</p>
                    </div>
                    <NavLink to='/' className="donate-link">
                        <button onClick={() => window.open('http://localhost:5173/', '_blank')} >Donate</button>
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
                        <li>
                            <NavLink to='/whatwedo' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>
                                What we do? <span onClick={(e) => { e.stopPropagation(); toggleMenu(); }}><img src="../Polygon-1.svg" alt="dropdown" /></span>
                            </NavLink>
                            {isOpen && <Menu />}
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
                        <li>
                            <NavLink to='/contactus' className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>
                                Contact Us <span onClick={(e) => { e.stopPropagation(); toggleContactMenu(); }}><img src="../Polygon-1.svg" alt="dropdown" /></span>
                            </NavLink>
                            {isContactOpen && <ContactMenu />}
                        </li>
                    </ul>
                </nav>

                {/* Mobile Navigation */}
                <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
                    <ul>
                        <li>
                            <NavLink to='/' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutus' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/whatwedo' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>What we do?</NavLink>
                        </li>
                        <li>
                            <NavLink to='/resources' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Resources</NavLink>
                        </li>
                        <li>
                            <NavLink to='/media' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Media</NavLink>
                        </li>
                        <li>
                            <NavLink to='/volunteer' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Volunteer</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactus' onClick={toggleMobileMenu} className={({ isActive }) => isActive ? "active-class" : "not-active-class"}>Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;