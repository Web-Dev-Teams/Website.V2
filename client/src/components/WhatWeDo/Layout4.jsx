import React from 'react'
import './Layout4.css'

const Layout4 = (props) => {
  return (
    <div className='Layout4'>
        <h2>Why {props.heading}</h2>
        <img src={props.image} alt="" />
        {Array.isArray(props.content) ? props.content.map((paragraph,index) => <p key={index}> {paragraph}</p>)
         
         : <p>{props.content}</p>}
        
      
    </div>
  )
}

export default Layout4
