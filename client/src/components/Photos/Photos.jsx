import React, { use, useEffect, useState } from 'react'
import "./Photos.css"
import img from "./img.jpg"
import img2 from '../recentActivities/holi.jpg'
import rang from '../recentActivities/rang.jpg'
import meet from '../recentActivities/meet.jpg'

const Photos = () => {
    const [currentState, setCurrentState] = useState(1);
    const photos = [
        <img src={img} alt="" className='photo'/>,
        <img src={img2} alt="" className='photo'/>,
        <img src={rang} alt="" className='photo'/>,
        <img src={meet} alt="" className='photo'/>
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
