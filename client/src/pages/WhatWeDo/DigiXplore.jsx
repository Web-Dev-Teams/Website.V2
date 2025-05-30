import React from 'react'
import './DigiXplore.css'
import Layout1 from '../../components/WhatWeDo/Layout1'
import Header from '../../components/Header/Header'
import Layout2 from '../../components/WhatWeDo/Layout2'
import Layout3 from '../../components/WhatWeDo/Layout3'
import Layout4 from '../../components/WhatWeDo/Layout4'
import Layout5 from '../../components/WhatWeDo/Layout5'
import Layout6 from '../../components/WhatWeDo/Layout6'
import Layout7 from '../../components/WhatWeDo/Layout7'
import Footer from '../../components/Footer/Footer'

const DigiXplore = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", margin: "0 auto"}}>
    <div  className='digixplore'>
      <Header/>
      <Layout1 image="./DigiXplore.png" heading="DigiXplore" bg="#9A41DA"/>
      <Layout2 content="Unnati Welfare Society has introduced a visionary program called &quot;Digixplore&quot;, dedicated to providing free digital education to students of government schools. Conducted with the aim of bridging the digital divide, this initiative empowers students with essential computer skills and knowledge, ensuring they are well-prepared for the demands of a technology-driven world. Through interactive sessions, hands-on activities, and practical learning, &quot;Digixplore&quot; makes complex digital concepts accessible and engaging. By fostering digital literacy, this program not only enhances students' career prospects but also nurtures their confidence to navigate the modern digital landscape. With a focus on inclusivity and empowerment, &quot;Digixplore&quot; paves the way for a brighter, tech-enabled future for every child." bg1="#F3E8FB" color="#9A41DA" image1="./Polygon-2.png"/>
      <Layout3 bg="#9A41DA" bg2="#A759DE" color="#FFFFFF" heading="Our Journey"/>
      <Layout4 heading="DigiXplore" image="./Layout4.png" content="The journey to Akshar began with a realization during your visits to villages in Bihar. As part of your NGO's mission to uplift and empower rural communities, you decided to understand the educational challenges faced by students. Surveys and interactions with children and their families painted a stark picture: even students in classes 10 and 11 struggled to write a simple sentence or speak a few words in English.
Many parents, burdened by illiteracy and a lack of awareness, could not guide their children. Schools, often under-resourced, were unable to provide the quality education these students needed. The children, eager to learn, were trapped in an environment that lacked both opportunities and direction.
This stark reality struck a chord. You understood that without a foundation in English—a critical skill in today's world—these children would face limited career prospects and miss out on broader opportunities. This gap in education called for immediate action.
Thus, the idea of Akshar was born: a program designed to teach English to rural children in an open and inclusive environment. The goal was not only to enhance their language skills but also to instill confidence and open doors to a brighter future. By teaching English on weekends in open spaces, the program ensures that education reaches even the remotest corners, transforming the lives of children and their communities."/>


      <Layout5 content="In the Akshar program, Our dedicated team visits rural villages and conducts English classes at common community spaces, bringing education directly to the heart of these villages. We focus on teaching basic English—emphasizing reading, writing, and speaking skills. The classes are held on weekends in open spaces, ensuring that education is accessible to all, regardless of resources. By creating a supportive and engaging environment, we aim to empower students, help them build confidence, and provide them with the essential language skills needed for academic success and better career opportunities. Through Akshar, we are nurturing a brighter, more self-reliant future for the children of these communities."/>


      <Layout6 image="./rect215.png" title="DigiXplore" num1="50" num2="12" subtitle1="children received quality education" subtitle2="Schools opened" color="#9A41DA"/>

      <Layout7 name="Mukesh" name2="Rakesh" contPara1="Mukesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" contPara2=" weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." image= "./pic1.png" image2="./pic2.png" cont2Para1="Rakesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" cont2Para2="weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." color="#AC63E0" />
      <Footer/>
    </div>
    </div>
  )
}

export default DigiXplore
