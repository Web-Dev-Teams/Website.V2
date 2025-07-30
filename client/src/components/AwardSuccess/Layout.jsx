
import React from 'react';
import './Layout.css';

const Layout = (props) => {
  return (
    <section className="Award-container">
      <div className="award-left" style={{ backgroundColor: props.bg }}>
        <h1 style={{ color: props.color }}>{props.heading}</h1>
        <p>{props.content}</p>
      </div>

      <div className="award-right">
        <img src={props.image} alt="" />
      </div>
    </section>
  );
};

export default Layout;

