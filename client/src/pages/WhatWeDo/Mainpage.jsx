import React from 'react'
import Header from '../../components/Header/Header'
import Layout3 from '../../components/WhatWeDo/Layout3'
import Layout from '../../components/AwardSuccess/Layout'
import Whatsnew from '../../components/Whatsnew/Whatsnew'
import Card from '../../components/Mainpage/Card'
import Footer from '../../components/Footer/Footer'


const Mainpage = () => {
    
  return (
    <div>
        <Header/>
        <Layout heading="Impact at Babupur Middle School" content="Unnati has brought a wave of hope and change to our school. Many of our students come from families that struggle to meet even basic needs, and often miss out on opportunities to learn and grow. Through their programs – DigiXplorea and Netritva– Unnati has opened new doors for our children. They are now confident using digital tools, thinking about their future careers, and strengthening their basics in reading, writing, and math." color="#008080" bg="#FFFFFF"  image="../../components/community/digiexp.jpg"/>
        <Layout3 heading="Upcoming" color="#000000" bg="#E8A13E" bg2="#E8A12E"/>
        <Whatsnew image="./pic4.png" heading="Organizing sports events" content="we had an event at IIIT Bhagalpur there we had invited the founder of Unnati welfare society...."/>
        <Whatsnew image="./pic5.png" heading="Contests in schools" content="we had an event at IIIT Bhagalpur there we had invited the founder of Unnati welfare society...."/>
        <Whatsnew image="./pic6.png" heading="Awareness Programs" content="we had an event at IIIT Bhagalpur there we had invited the founder of Unnati welfare society...."/>
        <div className='mainpage-card-container'>

        <Card image="./digiXplore.png" heading="DigiXplore" date="12 JAN 2025" content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...." title="digiXplore"/>
        <Card image="./akshar.png" heading="Akshar"  date="12 JAN 2025" content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
        title="Akshar"/>
        <Card image="./netritva.png" heading="Netritva"  date="12 JAN 2025" content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
        title="Netritva" />
        <Card image="./akshar.png" heading="Prayaas"  date="12 JAN 2025" content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
        title="Prayaas"/>
        <Card image="./eSafe1.png" heading="eSafe"  date="12 JAN 2025" content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
        title="eSafe"/>
        <Card image="./prakritiPath.png" heading="Prakriti Path"  date="12 JAN 2025" content="At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered...."
        title="Prakriti path"/>
        </div>
        <Footer/>


    </div>
  )
}

export default Mainpage
