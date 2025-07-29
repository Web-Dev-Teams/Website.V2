// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Menu.css'

// const Menu = () => {
//   return (
//     <div className='menu'>
//       <ul>
//         <li style={{backgroundColor:"#9A41DA"}}><NavLink to='/digiXplore' className={({isActive}) => (isActive ? "menu-actice-class" : "menu-not-actice-class")}>DigiXplore</NavLink></li>
//         <li style={{backgroundColor:"#FF832C"}}><NavLink to='/netritva'>Netritva</NavLink></li>
//         <li style={{backgroundColor:"#228B22"}}><NavLink to='/prayaas'>Prayaas</NavLink></li>
//         <li style={{backgroundColor:"#3741A2"}}><NavLink to='/esafe'>eSafe</NavLink></li>
//         <li style={{backgroundColor:"#008080"}}><NavLink to='/akshar'>Akshar</NavLink></li>
//       </ul>
//     </div>
//   )
// }

// export default Menu

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = ({ closeMenu }) => {
  return (
    <div className="menu">
      <ul>
        <li style={{ backgroundColor: '#9A41DA' }}>
          <NavLink
            to="/digiXplore"
            className={({ isActive }) => (isActive ? 'menu-active-class' : 'menu-not-active-class')}
            onClick={closeMenu}
          >
            DigiXplore
          </NavLink>
        </li>

        <li style={{ backgroundColor: '#FF832C' }}>
          <NavLink to="/netritva" className="menu-not-active-class" onClick={closeMenu}>
            Netritva
          </NavLink>
        </li>

        <li style={{ backgroundColor: '#228B22' }}>
          <NavLink to="/prayaas" className="menu-not-active-class" onClick={closeMenu}>
            Prayaas
          </NavLink>
        </li>

        <li style={{ backgroundColor: '#3741A2' }}>
          <NavLink to="/esafe" className="menu-not-active-class" onClick={closeMenu}>
            eSafe
          </NavLink>
        </li>

        <li style={{ backgroundColor: '#008080' }}>
          <NavLink to="/akshar" className="menu-not-active-class" onClick={closeMenu}>
            Akshar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
