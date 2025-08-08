import React from 'react'
import Whatsnew from './Whatsnew'
import './Whatsnewsection.css'

const Whatsnewsection = () => {
  return (
    <div className='Whatsnew-container'>
      
      <div className='heading-whatsnew'>
      <h1>What's new </h1>
      <img src="./Vector_5.svg" alt="" />

      </div>
      <Whatsnew image="teaching.jpg" heading="Speech given by founder" content="we had an event at IIIT Bhagalpur there we had invited the founder of Unnati welfare society...."/>
      <Whatsnew image="teaching.jpg" heading="Speech given by founder" content="we had an event at IIIT Bhagalpur there we had invited the founder of Unnati welfare society...."/>
      <Whatsnew image="teaching.jpg" heading="Speech given by founder" content="we had an event at IIIT Bhagalpur there we had invited the founder of Unnati welfare society...."/>
      
    </div>
  )
}

export default Whatsnewsection
