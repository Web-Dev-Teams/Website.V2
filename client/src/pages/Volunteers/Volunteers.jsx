import React from 'react';
import './Volunteers.css';

import RecentActivity from "../../components/recentActivities/RecentActivities"
import Community from '../../components/community/Community';
import Top from '../../components/top-page/Top-Page'
import Banner from '../../components/banner/Banner'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



function Volunteers() {
  return (
    <div>
      <Header/>
      <Top/>
      <Banner/>

     
      
      <RecentActivity/>
      
      <Community/>
      <Footer/>
      
      
    </div>
  );
}

export default Volunteers;
