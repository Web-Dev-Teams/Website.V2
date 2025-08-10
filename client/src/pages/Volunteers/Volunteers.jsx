import React from 'react';
import './Volunteers.css';

import RecentActivity from "../../components/recentActivities/RecentActivities";
import Community from '../../components/community/Community';
import Top from '../../components/top-page/Top-Page';
import Banner from '../../components/banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FadeUp from '../FadeUp';

function Volunteers() {
  return (
    <div className="volunteers-fullwidth-bg">
      <Header />
      <main>
        <section className="volunteers-section">
          <FadeUp><Top /></FadeUp>
        </section>
        {/* Uncomment if you want the banner */}
         <section className="volunteers-section">
          <FadeUp><Banner /></FadeUp>
        </section> 
        <section className="volunteers-section">
          <FadeUp><RecentActivity /></FadeUp>
        </section>
        <section className="volunteers-section">
          <FadeUp><Community /></FadeUp>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Volunteers;