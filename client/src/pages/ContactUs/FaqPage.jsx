import React from 'react';
import Faq from '../../components/Contactus/Faq';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FadeUp from '../FadeUp';

const FaqPage = () => {
  return (
    <div>
      <FadeUp>
        <Header/>
      </FadeUp>

      <FadeUp>
        <Faq />
      </FadeUp>

      <FadeUp>
        <Footer />
      </FadeUp>
    </div>
  );
};

export default FaqPage;
