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
  src="/Frame 2610660.png"
  alt="CONTACT US IMAGE"
  style={{
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
    maxHeight: '45vh',
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
