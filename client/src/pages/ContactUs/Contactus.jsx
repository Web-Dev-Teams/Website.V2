import React from 'react';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/Contactus/contact_us';
import Footer from '../../components/Footer/Footer';
import FadeUp from '../FadeUp';

const Contactus = () => {
  return (
    <div>
      <FadeUp>
        <Header />
      </FadeUp>

      <FadeUp>
        <ContactUs />
      </FadeUp>

      <FadeUp>
        <Footer />
      </FadeUp>
    </div>
  );
};

export default Contactus;
