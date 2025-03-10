import React from 'react'
import './Layout7.css'

const Layout7 = (props) => {
  return (
    <div className='Layout7'> 
       <div className='Layout7-about' style={{borderBottom: `5px solid ${props.color}`}}>
          <h1>{props.name}</h1>
          <div className='content-wrapper'>
            <div className='content-img'>
                <p>{props.contPara1}</p>
                <img src={props.image} alt="" />
            </div>
            <div className='content-2'>
                <p>{props.contPara2}</p>

            </div>
            
          </div>
          <button style={{border: `1px solid ${props.color}`, color:props.color }}>
            Button
          </button>
       </div>
       <div className='Layout7-about' style={{borderBottom: `5px solid ${props.color}`}}>
          <h1>{props.name2}</h1>
          <div className='content-wrapper'>
            <div className='content-img'>
                <p>{props.cont2Para1}</p>
                <img src={props.image2} alt="" />
            </div>
            <div className='content-2'>
                <p>{props.cont2Para2}</p>

            </div>
            
          </div>
          <button style={{border: `1px solid ${props.color}`, color:props.color }}>
            Button
          </button>
       </div>
       
       

    </div>
  )
}

export default Layout7
