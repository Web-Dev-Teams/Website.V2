import React, { use, useEffect, useState } from 'react'
import "./Photos.css"
import img from "./img.jpg"
import img2 from '../recentActivities/holi.jpg'
import digi9 from './HomePage/digi9.jpg'
import meet from '../recentActivities/meet.jpg'
import digi10 from './HomePage/digi10.jpg'
import digi12 from './HomePage/digi12.jpg'
import akshar1 from './HomePage/akshar1.jpg'
import akshar2 from './HomePage/akshar2.jpg'
import akshar3 from './HomePage/akshar3.jpg'
import net1 from './HomePage/net1.jpg'
import net2 from './HomePage/net2.jpg'

const Photos = () => {
    const [currentState, setCurrentState] = useState(1);
    const photos = [
        <img src={digi10} alt="" className='photo'/>,
        <img src={digi12} alt="" className='photo'/>,
        <img src={akshar1} alt="" className='photo'/>,
        <img src={akshar2} alt="" className='photo'/>,
        <img src={akshar3} alt="" className='photo'/>,
        <img src={net1} alt="" className='photo'/>,
        <img src={net2} alt="" className='photo'/>,
        <img src={digi9} alt="" className='photo'/>
        
        
    ];
    let length = photos.length;
  const handleNextClick = () => {
    setCurrentState(prev =>
        prev < length ? prev + 1 : 1
    );
};

    const handlePrevClick = () => {
        if(currentState > 1){
            setCurrentState(currentState-1);
        }
        else{
            setCurrentState(length);
        }
    }

 
  // 🔄 Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // change 3000 to adjust slide speed

    // cleanup on unmount
    return () => clearInterval(interval);
  }, []);

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
