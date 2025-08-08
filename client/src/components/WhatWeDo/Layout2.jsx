import React from 'react'
import './Layout2.css';

const Layout2 = (props) => {
  return (
    <div className='Layout2'>
        <div className='Layout2-left'>
            <p style={{borderTop: `4px solid ${props.color}`}}>{props.content}</p>

        </div>
        <div className='Layout2-right'> 
            <ul>
                <li style={{backgroundColor: props.bg1, border:`1px solid ${props.color}`}}> DigiXplore</li>
                <li style={{backgroundColor: props.bg2, border:`1px solid ${props.color}`}}>Netritva</li>
                <li style={{backgroundColor: props.bg3, border:`1px solid ${props.color}`}}>Akshar</li>
                <li style={{backgroundColor: props.bg4, border:`1px solid ${props.color}`}}>Prayaas</li>
                <li style={{backgroundColor: props.bg5, border:`1px solid ${props.color}`}}>eSafe</li>
                <li style={{backgroundColor: props.bg5, border:`1px solid ${props.color}`}}>Prakriti Path</li>
            </ul>

        </div>
      
    </div>
  )
}

export default Layout2
