import React from 'react';
import './Layout6.css';

const Layout6 = (props) => {
  return (
    <div className='Layout6-container'>
      <h1>Imapct</h1>
      <div className='Layout6' >
        <img src={props.image} alt={props.title} />
        <div>
            <h1 style={{color: props.color}}>{props.num1}+</h1>
            <p>{props.subtitle1}</p>
        </div>
        <div>
            <h1 style={{color: props.color}}>{props.num2}+</h1>
            <p>{props.subtitle2}</p>
        </div>

      </div>
    </div>
   )

}

export default Layout6
