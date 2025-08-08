import React from 'react'
import Header from '../../components/Header/Header'
import Layout3 from '../../components/WhatWeDo/Layout3'
import Layout from '../../components/AwardSuccess/Layout'
import Whatsnew from '../../components/Whatsnew/Whatsnew'
import Card from '../../components/Mainpage/Card'
import Footer from '../../components/Footer/Footer'
import ScrollReveal from './ScrollReveal'  

const Mainpage = () => {
  return (
    <div>
      <Header/>

      <ScrollReveal>
        <Layout
          heading="Impact at Babupur Middle School"
          content="Unnati has brought a wave of hope and change to our school. Many of our students come from families that struggle to meet even basic needs, and often miss out on opportunities to learn and grow. Through their programs – DigiXplorea and Netritva– Unnati has opened new doors for our children. They are now confident using digital tools, thinking about their future careers, and strengthening their basics in reading, writing, and math."
          color="#008080"
          bg="#FFFFFF"
          image="wedo.jpg"
        />
      </ScrollReveal>

      <ScrollReveal>
        <Layout3 heading="Upcoming" color="#000000" bg="#E8A13E" bg2="#E8A12E" />
      </ScrollReveal>

      <ScrollReveal>
        <Whatsnew
          image="digi16.jpg"
          heading="Organizing sports events"
          content="We had an event at IIIT Bhagalpur where we invited the founder of Unnati Welfare Society...."
        />
      </ScrollReveal>

      <ScrollReveal>
        <Whatsnew
          image="digi16.jpg"
          heading="Contests in schools"
          content="We had an event at IIIT Bhagalpur where we invited the founder of Unnati Welfare Society...."
        />
      </ScrollReveal>

      <ScrollReveal>
        <Whatsnew
          image="digi16.jpg"
          heading="Awareness Programs"
          content="We had an event at IIIT Bhagalpur where we invited the founder of Unnati Welfare Society...."
        />
      </ScrollReveal>

      <div className='mainpage-card-container'>
        <ScrollReveal>
          <Card
            image="digi15.jpg"
            heading="DigiXplore"
            date="12 JAN 2025"
            content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
            title="DigiXplore"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Card
            image="akshar1.jpg"
            heading="Akshar"
            date="12 JAN 2025"
            content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
            title="Akshar"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Card
            image="net2.jpg"
            heading="Netritva"
            date="12 JAN 2025"
            content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
            title="Netritva"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Card
            image="akshar2.jpg"
            heading="Prayaas"
            date="12 JAN 2025"
            content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
            title="Prayaas"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Card
            image="net1.jpg"
            heading="eSafe"
            date="12 JAN 2025"
            content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
            title="eSafe"
          />
        </ScrollReveal>

        <ScrollReveal>
          <Card
            image="digi11.jpg"
            heading="Prakriti Path"
            date="12 JAN 2025"
            content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
            title="Prakriti Path"
          />
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  )
}

export default Mainpage;
