import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import banner from './banner.jpeg'
import mission from './mission2.jpeg'
import vision from './vision.jpg'
import './About-us.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const FadeUp = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export const AboutUs = () => {
  return (
    <>
      <Header />

      <div id="wrapper">
      
          <div id="intro">
            <h1>Empowering Dreams: <br /> Unnati Welfare Society’s <br /> Compassionate Journey.</h1>
            <p>At UNNATI WELFARE SOCIETY, we are dedicated to bridging the digital divide by providing underprivileged students with essential technology education and basic knowledge. Our mission is to empower these young minds, equipping them with the skills and confidence needed to excel in the digital age. By revolutionizing the present with hands-on tech training and nurturing a passion for learning, we aim to transform their futures, creating a brighter, more inclusive world for the next generation. Join us in making a difference today and shaping a better tomorrow.</p>
          </div>
        
          <div id="banner">
            <img src={banner} alt="" />
          </div>
        
      </div>

      <FadeUp>
        <div id="vision">
          <div id="img">
            <img src={vision} alt="" />
          </div>
          <div id="text">
            <h1>Our Vision</h1>
            <p>We envision a society where every individual has equitable opportunities to thrive in our rapidly evolving world. Our goal is to create a platform for all, fostering a fair chance for personal growth and success in the face of constant revolution and development.</p>
          </div>
        </div>
      </FadeUp>

      <FadeUp>
        <div id="mission">
          <div id="text">
            <h1>Our Mission</h1>
            <p>Our mission is to provide free, quality education for underprivileged students, emphasizing holistic development. Our curriculum spans academics, life skills, and practical knowledge. We are helping students to tackle the hindrances faced by them which obstructs them to get up to their potential.</p>
          </div>
          <div id="img">
            <img src={mission} alt="" />
          </div>
        </div>
      </FadeUp>

      <Footer />
    </>
  )
}
