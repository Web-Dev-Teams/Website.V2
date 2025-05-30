import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    const navigate = useNavigate();
    
    function handleClick(title){
        navigate(`/${title}`);

    }

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.image} alt="" />
        <h1>{props.heading}</h1>
      </div>
      <h4>{props.date}</h4>
      <p>{props.content}</p>
      <button onClick={() => handleClick(props.title)}>Know More</button>

    </div>
  )
}

export default Card
