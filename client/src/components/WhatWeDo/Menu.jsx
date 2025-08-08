import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Menu.css';

const Menu = ({ closeMenu }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  return (
    <div className="menu">
      <ul>
        <li style={
          {  
            color: hovered ?  "#ffffff" : '#9A41DA', 
            backgroundColor: hovered ? " #9A41DA" : " ",
            transition: "1s ease-in-out"
          }
          } 
          onClick={() => navigate('/digixplore')}
          onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
          >
         DigiXplore
        </li>

        <li 
        style={{ 
          color: hovered ?  "#ffffff" : '#FF832C', 
           backgroundColor: hovered ? " #FF832C" : " ",
            transition: "1s ease-in-out"
           }}
            onClick={() => navigate('/netritva')}
            onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
            >
            Netritva
        </li>

        <li 
        style={{
           color: hovered ?  "#ffffff" : '#228B22', 
           backgroundColor: hovered ? " #228B22" : " ",
            transition: "1s ease-in-out"

           }}
            onClick={() => navigate('/prayaas')}
            onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
            >
         Prayaas
        </li>

        <li 
        style={{ 
         color: hovered ?  "#ffffff" : '#3741A2', 
           backgroundColor: hovered ? " #3741A2" : " ",
            transition: "1s ease-in-out"
           }} 
           onClick={() => navigate('/esafe')}
           onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
           >
            eSafe
        </li>

        <li
         style={{
           color: hovered ?  "#ffffff" : '#008080', 
           backgroundColor: hovered ? " #008080" : " ",
            transition: "1s ease-in-out"
           }} 
         onClick={() => navigate('/akshar')}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         >
          Akshar
        </li>
      </ul>
    </div>
  );
};

export default Menu;
