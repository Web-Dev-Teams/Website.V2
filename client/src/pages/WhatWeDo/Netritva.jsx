import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Layout1 from '../../components/WhatWeDo/Layout1'
import Layout2 from '../../components/WhatWeDo/Layout2'
import Layout3 from '../../components/WhatWeDo/Layout3'
import Layout4 from '../../components/WhatWeDo/Layout4'
import Layout5 from '../../components/WhatWeDo/Layout5'
import Layout6 from '../../components/WhatWeDo/Layout6'
import Layout7 from '../../components/WhatWeDo/Layout7'

const Netritva = () => {
  return (
    <div>
      <Header/>
      <Layout1 image="./netritva.png" heading="Netritva" bg="#FF832C"/>
      <Layout2 content="Netritva – Guiding Career Journeys
“Shaping futures through mentorship and direction.”
Netritva focuses on providing career guidance and mentorship to students from under-resourced communities. Our sessions cover everything from personality development and goal setting to career exploration and college readiness. With the right direction and support, Netritva helps students identify their strengths and build a roadmap to achieve their aspirations.
" bg2="#F3E8FB" color="#FF832C"  image2="./Polygon-2.png"/>
      <Layout3 bg="#FF832CDB" bg2="#FF832CDA" color="#FFFFFF" heading="Our Journey" />
      <Layout4 heading="Netritva" image="./netritva2.png" content="Bhagalpur, Bihar, is a region brimming with potential but faces significant challenges in terms of career awareness and guidance for students. Many young minds in this area grow up unaware of diverse career opportunities due to limited exposure and traditional mindsets that often prioritize conventional paths. Socioeconomic constraints further compound the issue, with families relying on agriculture or small-scale businesses, leading to a focus on immediate earning rather than long-term educational goals. Despite efforts to improve government schools, access to modern resources and career counseling remains limited, leaving students unprepared for the demands of a rapidly evolving world. This lack of guidance often results in talented students migrating out of the region in search of opportunities, contributing to a brain drain. "/>
      <Layout5 content="Under the Netritva program, Unnati Welfare Society provides personalized and structured career guidance to students, focusing on their aspirations, strengths, and opportunities. We organize interactive workshops, counseling sessions, and career awareness events in schools and communities, covering diverse fields such as technology, healthcare, entrepreneurship, government services, and creative industries.
Our team conducts aptitude and interest-based assessments to help students identify their strengths and align them with potential career paths. We also invite professionals and experts from various fields to share real-world insights, inspiring students and broadening their horizons. Through one-on-one mentoring and group discussions."/>
      <Layout6 image="./netritva3.png" num1="1000" num2="6" subtitle1="children received guidance " subtitle2="Schools" color="#FF832C"/>
      <Layout7 name="Mukesh" name2="Rakesh" contPara1="Mukesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" contPara2=" weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." image= "./pic1.png" image2="./pic2.png" cont2Para1="Rakesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" cont2Para2="weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." color="#FF832C" />
      <Footer/>
    </div>
  )
}

export default Netritva
