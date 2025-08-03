import React, { useState, useEffect } from 'react';
import DetailBox from './template';
import Helpdesk from './HelpDesk';
import LocationBox from './Location';

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
    <div>
     <img
  src="/Group 427321218.png"
  alt="FAQ Image"
  style={{
    width: '100%',
    height: 'auto',
    minHeight: '180px',
    maxHeight: '45vh',
    display: 'block',
    objectFit: 'contain',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: 'clamp(0.5rem, 2vh + 1rem, 2rem)',   // smaller on mobile, smooth growth
    marginBottom: 'clamp(1rem, 4vw, 2rem)',   
    paddingInline: 'clamp(0.5rem, 4vw, 2rem)',
    boxSizing: 'border-box',
  }}
/>




      <div
        style={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isSmallScreen ? 'center' : 'flex-start',
          padding: isSmallScreen ? '1rem' : '1.4%',
          gap: isSmallScreen ? '2rem' : '0',
        }}
      >
        <DetailBox />
        <Helpdesk />
      </div>

      <LocationBox />
    </div>
  );
};

export default ContactUs;
