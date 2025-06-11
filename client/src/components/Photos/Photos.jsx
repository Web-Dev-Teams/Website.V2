import React, { use, useEffect, useState } from 'react'
import "./Photos.css"
import img from "./img.jpg"

const Photos = () => {
    const [currentState, setCurrentState] = useState(1);
    const photos = [
        <img src={img} alt="" className='photo'/>,
        <img src="./Photos/slide.png" alt="" className='photo'/>,
        <img src="./Photos/slide.png" alt="" className='photo'/>,
        <img src="./Photos/slide.png" alt="" className='photo'/>
    ];
    let length = photos.length;
    const handleNextClick = () => {
        if(currentState < length){
            setCurrentState(currentState+1);
        }
        else{
            setCurrentState(1);
        }  
    }
    const handlePrevClick = () => {
        if(currentState > 1){
            setCurrentState(currentState-1);
        }
        else{
            setCurrentState(length);
        }
    }
  return (
    <div className='PhotosContainer'>
        {photos[currentState-1]}
        <img src="./Photos/Vector-2.svg" id='icon-2' onClick={handlePrevClick}/>
        <img src="./Photos/Vector-1.svg" id='icon-1' onClick={handleNextClick}/>
        <p>{currentState} of {length}</p>
    </div>
  )
}

export default Photos
