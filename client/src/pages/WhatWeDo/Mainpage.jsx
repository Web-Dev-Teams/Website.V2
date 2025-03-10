import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Layout3 from '../../components/WhatWeDo/Layout3'
import Layout from '../../components/AwardSuccess/Layout'
import Whatsnew from '../../components/Whatsnew/Whatsnew'
import Card from '../../components/Mainpage/Card'


const Mainpage = () => {
    
  return (
    <div>
        <Header/>
        <Layout heading="Marching Together for a Greener Tomorrow." content="Marching alongside children to spread awareness and inspire action for saving the environment, we strive to cultivate a sense of responsibility and stewardship for our planet. Together, we empower the next generation to become advocates for a greener, cleaner future, one step at a time." color="#008080" bg="#FFFFFF"  image="./pic3.png"/>
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


    </div>
  )
}

export default Mainpage
