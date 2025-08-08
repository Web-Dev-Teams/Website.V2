import React , {useRef} from 'react'
import { motion, useInView} from "framer-motion";

import Header from '../components/Header/Header';
import Photos from '../components/Photos/Photos';
import FirstAward from '../components/AwardSuccess/FirstAward';
import Footer from '../components/Footer/Footer';
import AboutUWS from '../components/Aboutuws/Aboutuws';
import Whatsnew from '../components/Whatsnew/Whatsnew';
import Whatsnewsection from '../components/Whatsnew/Whatsnewsection';
import SuccessStory from '../components/AwardSuccess/SuccessStory';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = () => {

  return (
    <div>
      <Header />
      <FadeInWhenVisible>
        <Photos />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <AboutUWS />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <FirstAward />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3}>
        <SuccessStory />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <Whatsnewsection />
      </FadeInWhenVisible>



      <Footer />

    </div>
  )
}

export default Homepage
