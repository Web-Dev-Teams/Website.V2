import React from 'react'
import { NavLink } from 'react-router-dom'
import './ContactMenu.css'

const ContactMenu = ({ closemenu }) => {
  return (
    <div className='classmenu'>
      <ul>
        <li>
          <NavLink
            to='/contactus'
            className={({isActive}) => (isActive ?  "menu-not-actice-class contactus-link": "menu-actice-class contactus-link")}
            onClick={e => { if (closemenu) closemenu(); }}
          >Contact Us</NavLink>
        </li>
        <li>
          <NavLink
            to='/faq'
            className={({isActive}) => (isActive ? "menu-actice-class faq-link" : "menu-not-actice-class faq-link")}
            onClick={e => { if (closemenu) closemenu(); }}
          >FAQ</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default ContactMenu
