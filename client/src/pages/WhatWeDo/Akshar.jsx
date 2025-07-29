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

const Akshar = () => {
  return (
    <div>
      <Header/>
      <Layout1 image="./1.png" heading="Akshar" bg="#008080" />
      <Layout2 content="Akshar – Strengthening Foundational Learning
“Building strong roots for lifelong learning.”
Akshar works on improving language and mathematical skills at the grassroots level. By adopting creative teaching methods, interactive games, and personalized attention, we ensure that children build strong foundations in core subjects. Akshar aims to make learning joyful while equipping students with the skills they need to succeed academically.
them with essential skills to thrive in a globalized world while fostering a spirit of community learning." bg3="#D9ECEC" color="#008080"  image3="./Polygon-2.png"/>
      <Layout3 bg="#008080" bg2="#008080E5" color="#FFFFFF" heading="Our Journey"/>
      <Layout4 heading="Akshar" image="./pic7.png" content="The journey to Akshar began with a realization during your visits to villages in Bihar. As part of your NGO's mission to uplift and empower rural communities, you decided to understand the educational challenges faced by students. Surveys and interactions with children and their families painted a stark picture: even students in classes 10 and 11 struggled to write a simple sentence or speak a few words in English.
Many parents, burdened by illiteracy and a lack of awareness, could not guide their children. Schools, often under-resourced, were unable to provide the quality education these students needed. The children, eager to learn, were trapped in an environment that lacked both opportunities and direction.
This stark reality struck a chord. You understood that without a foundation in English—a critical skill in today's world—these children would face limited career prospects and miss out on broader opportunities. This gap in education called for immediate action.
Thus, the idea of Akshar was born: a program designed to teach English to rural children in an open and inclusive environment. The goal was not only to enhance their language skills but also to instill confidence and open doors to a brighter future. By teaching English on weekends in open spaces, the program ensures that education reaches even the remotest corners, transforming the lives of children and their communities."/>
      <Layout5 content="In the Akshar program, Our dedicated team visits rural villages and conducts English classes at common community spaces, bringing education directly to the heart of these villages. We focus on teaching basic English—emphasizing reading, writing, and speaking skills. The classes are held on weekends in open spaces, ensuring that education is accessible to all, regardless of resources. By creating a supportive and engaging environment, we aim to empower students, help them build confidence, and provide them with the essential language skills needed for academic success and better career opportunities. Through Akshar, we are nurturing a brighter, more self-reliant future for the children of these communities."/>
      <Layout6 image="./rect215.png" title="Akshar" num1="50" num2="5" subtitle1="children received quality education" subtitle2="branches opened " color="#008080" />
      <Layout7 name="Mukesh" name2="Rakesh" contPara1="Mukesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" contPara2=" weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." image= "./pic1.png" image2="./pic2.png" cont2Para1="Rakesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent" cont2Para2="weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life." color="#008080" />
      <Footer/>

    </div>
  )
}

export default Akshar
