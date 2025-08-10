import React, { useState, useEffect } from 'react';
import DetailBox from './template';
import Helpdesk from './HelpDesk';
import LocationBox from './Location';
import './contact_us.css';

const ContactUs = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="contactus-root">
      <img
        src="Frame 2610660.png"
        alt="FAQ Image"
        className="contactus-hero-img"
      />
      <div className="contactus-main-row">
        <div className="contactus-main-col">
          <DetailBox />
        </div>
        <div className="contactus-main-col">
          <Helpdesk />
        </div>
      </div>
      <LocationBox />
    </div>
  );
};

export default ContactUs;
