import React from 'react'
import './Layout1.css';

const Layout1 = (props) => {
  return (
    <div className='Layout1'>
      <img src={props.image} alt="image" />
      <h1 style={{backgroundColor: props.bg}}>{props.heading}</h1>
    </div>
  )
}

export default Layout1
