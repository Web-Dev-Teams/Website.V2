import React from 'react'
import './Layout3.css'

const Layout3 = (props) => {
  return (
    <div className='Layout3' style={{ borderBottom: `4px solid ${props.bg}`}}>
      <h1 style={{backgroundColor: props.bg, color:props.color}}>{props.heading}<span style={{backgroundColor: props.bg2}}><img src="./Vector_5.svg" alt="" /></span></h1>
      
    </div>
  )
}

export default Layout3
