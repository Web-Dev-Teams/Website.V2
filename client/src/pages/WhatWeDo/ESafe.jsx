import React from 'react'
import Header from '../../components/Header/Header'
import Layout1 from '../../components/WhatWeDo/Layout1'
import Layout2 from '../../components/WhatWeDo/Layout2'
import Layout3 from '../../components/WhatWeDo/Layout3'
import Layout4 from '../../components/WhatWeDo/Layout4'
import Layout5 from '../../components/WhatWeDo/Layout5'
import Layout6 from '../../components/WhatWeDo/Layout6'
import Layout7 from '../../components/WhatWeDo/Layout7'
import Footer from '../../components/Footer/Footer'

const ESafe = () => {
  return (
    <div>
      <Header/>
      <Layout1 image="./eSafe2.png" heading="eSafe" bg="#3741A2"/>
      <Layout2 content="our foundation has  taken the initiative to launch an educational program called eSafe, focusing on empowering students up to the matriculation level with essential knowledge about online safety and technical literacy. This program will aim to bridge the digital knowledge gap among students, especially those with limited exposure to technology. It will cover topics like safe internet usage, recognizing and avoiding online fraud, protecting personal information, and understanding the ethical use of technology. By conducting interactive workshops, hands-on activities, and real-world examples, eSafe Awareness will equip students with the skills needed to navigate the digital world securely and responsibly, fostering a safer online environment for the next generation" bg5="#D9ECEC" color="#3741A2"  image5="./Polygon-2.png"/>
      <Layout3 bg="#3741A2" bg2="#3741B2" color="" heading="Our Journey" />
      <Layout4 heading="eSafe Awareness" image="./eSafe1.png" content="
eSafe Awareness is a program aimed at educating students up to the matriculation level about online safety and basic technical literacy. It focuses on equipping students with the knowledge to navigate the digital world securely and responsibly. The program addresses critical topics such as safe internet practices, identifying and avoiding online fraud, protecting personal information, and understanding the ethical use of technology. Through engaging workshops, practical demonstrations, and real-life examples, eSafe Awareness seeks to empower students, particularly those with limited technical exposure, to recognize potential online threats and make informed decisions, ensuring a safer and more confident digital experience."/>
      <Layout5 content="To begin the eSafe program, start by identifying schools or communities with students who have limited exposure to technology. Form a team of educators and cybersecurity experts to develop an age-appropriate curriculum focusing on online safety, recognizing scams, protecting personal information, and ethical online behavior. Partner with schools, parents, and local organizations to promote the program and gather necessary resources like laptops or educational materials. Launch the program with interactive workshops and practical demonstrations to make learning engaging and impactful. Continuously collect feedback to refine the content and ensure the program remains relevant and effective in addressing emerging online challenges."/>
      <Layout6 image="./netritva3.png" title="eSafe" num1="67" num2="6" subtite1="children received quality education" subtitle2="branches opened " color="#3741A2" />
      <Layout7 name="Mukesh" name2="Rakesh" contPara1="Mukesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" contPara2=" weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." image= "./pic1.png" image2="./pic2.png" cont2Para1="Rakesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" cont2Para2="weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." color="#3741A2" />
      <Footer/>

    </div>
  )
}

export default ESafe
