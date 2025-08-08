import React from 'react';
import './Volunteers.css';

import RecentActivity from "../../components/recentActivities/RecentActivities";
import Community from '../../components/community/Community';
import Top from '../../components/top-page/Top-Page';
import Banner from '../../components/banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FadeUp from '../FadeUp'; // ✅ Import scroll animation


function Volunteers() {
  return (
    <div className="volunteers-fullwidth-bg">
      <Header />
      <FadeUp><Top /></FadeUp>
      <FadeUp><Banner /></FadeUp>
      <FadeUp><RecentActivity /></FadeUp>
      <FadeUp><Community /></FadeUp>
      <Footer />
    </div>
  );
}

export default Volunteers;
