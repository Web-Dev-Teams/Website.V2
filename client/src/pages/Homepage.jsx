import React from 'react'
import Header from '../components/Header/Header';
import Photos from '../components/Photos/Photos';
import FirstAward from '../components/AwardSuccess/FirstAward';
import Footer from '../components/Footer/Footer';
import AboutUWS from '../components/Aboutuws/Aboutuws';
import Whatsnew from '../components/Whatsnew/Whatsnew';
import Whatsnewsection from '../components/Whatsnew/Whatsnewsection';
import SuccessStory from '../components/AwardSuccess/SuccessStory';

const Homepage = () => {
  return (
    <div>
      <Header/>
       <Photos/>  
      <AboutUWS/>
      {/* <FirstAward/>
      <SuccessStory/>
      <Whatsnewsection/> */}
      {/* <Footer/> */}
      
    </div>
  )
}

export default Homepage
