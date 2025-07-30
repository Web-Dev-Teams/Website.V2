import React from 'react'
import { NavLink } from 'react-router-dom'
import './ContactMenu.css'

const ContactMenu = (closemenu) => {
  return (
    <div className='classmenu'>
      <ul>
        <li style={{backgroundColor:"#9A41DA"}}>
          <NavLink
           to='/contactus'
            className={({isActive}) => (isActive ? "menu-actice-class" : "menu-not-actice-class")}
            onClick={closemenu}
            >Contact Us
            </NavLink>
          </li>
        <li style={{backgroundColor:"#FF832C"}}>
          <NavLink
           to='/faq'
           onClick={closemenu}
           >
            FAQ
            </NavLink>
            </li>
      </ul>
    </div>
  )
}

export default ContactMenu
