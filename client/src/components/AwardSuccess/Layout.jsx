// import React from 'react'
// import './Layout.css'

// const Layout = (props) => {


//   return (
//     <div className='Award-container'>
//         <div className='award-left' style={{backgroundColor: props.bg}} >
//             <h1 style = {{color: props.color}}>{props.heading}</h1>
//             <p>{props.content}</p>
//             <p id="view" ><a href="#">view all</a> <span><img src="./Vector-3.png" alt="" /></span>
//             </p>

//         </div>
//         <div className='award-right'>
//             <img src={props.image} alt="" />


//         </div>
//     </div>
//   )
// }

// export default Layout


import React from 'react';
import './Layout.css';

const Layout = (props) => {
  return (
    <section className="Award-container">
      <div className="award-left" style={{ backgroundColor: props.bg }}>
        <h1 style={{ color: props.color }}>{props.heading}</h1>
        <p>{props.content}</p>
        <p id="view">
          <a href="#">view all</a>
          <span><img src="./Vector-3.png" alt="" /></span>
        </p>
      </div>

      <div className="award-right">
        <img src={props.image} alt="" />
      </div>
    </section>
  );
};

export default Layout;

