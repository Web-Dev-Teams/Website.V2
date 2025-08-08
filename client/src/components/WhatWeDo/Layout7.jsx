import React from 'react'
import './Layout7.css'

const Layout7 = (props) => {
  return (
    <div className='Layout7'> 
       <div className='Layout7-about' style={{borderBottom: `5px solid ${props.color}`}}>
          <h1>{props.name}</h1>
          <div className='content-wrapper'>
            <img src={props.img} alt="" className='content-img'/>
            <p>{props.content}</p>
          </div>
          <button style={{border: `1px solid ${props.color}`, color:props.color }}>
            Button
          </button>
       </div>
       <div className='Layout7-about' style={{borderBottom: `5px solid ${props.color}`}}>
          <h1>{props.name2}</h1>
          <div className='content-wrapper'>
            <img src={props.img2} alt="" className='content-img'/>
            <p>{props.content2}</p>
          </div>
          <button style={{border: `1px solid ${props.color}`, color:props.color }}>
            Button
          </button>
       </div>
    </div>
  )
}

export default Layout7
