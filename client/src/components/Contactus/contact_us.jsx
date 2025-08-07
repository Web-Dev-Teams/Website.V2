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
    <div style={{
      width: '100vw',
      minWidth: '100vw',
      maxWidth: '100vw',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      boxSizing: 'border-box',
    }}>
      <img
        src="/Group 427321218.png"
        alt="FAQ Image"
        style={{
          width: '100vw',
          minWidth: '100vw',
          maxWidth: '100vw',
          height: 'auto',
          minHeight: '180px',
          maxHeight: '45vh',
          display: 'block',
          objectFit: 'cover',
          borderRadius: 0,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        }}
      />

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isSmallScreen ? 'center' : 'flex-start',
          padding: isSmallScreen ? '1rem' : '1.4%',
          gap: isSmallScreen ? '2rem' : '0',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <DetailBox />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Helpdesk />
        </div>
      </div>

      <LocationBox />
    </div>
  );
};

export default ContactUs;
