import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Layout1 from '../../components/WhatWeDo/Layout1';
import Layout2 from '../../components/WhatWeDo/Layout2';
import Layout3 from '../../components/WhatWeDo/Layout3';
import Layout4 from '../../components/WhatWeDo/Layout4';
import Layout5 from '../../components/WhatWeDo/Layout5';
import Layout6 from '../../components/WhatWeDo/Layout6';
import Layout7 from '../../components/WhatWeDo/Layout7';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Akshar = () => {
  return (
    <div>
      <Header />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout1 image="akshar1.jpg" heading="Akshar" bg="#008080" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout2
          content="Akshar – Strengthening Foundational Learning
“Building strong roots for lifelong learning.”
Akshar works on improving language and mathematical skills at the grassroots level. By adopting creative teaching methods, interactive games, and personalized attention, we ensure that children build strong foundations in core subjects. Akshar aims to make learning joyful while equipping students with the skills they need to succeed academically.
them with essential skills to thrive in a globalized world while fostering a spirit of community learning."
          bg3="#D9ECEC"
          color="#008080"
          image3="./Polygon-2.png"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout3 bg="#008080" bg2="#008080E5" color="#FFFFFF" heading="Our Journey" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout4
          heading="Akshar"
          image="akshar2.jpg"
          content="The journey to Akshar began with a realization during your visits to villages in Bihar. As part of your NGO's mission to uplift and empower rural communities, you decided to understand the educational challenges faced by students. Surveys and interactions with children and their families painted a stark picture: even students in classes 10 and 11 struggled to write a simple sentence or speak a few words in English.
Many parents, burdened by illiteracy and a lack of awareness, could not guide their children. Schools, often under-resourced, were unable to provide the quality education these students needed. The children, eager to learn, were trapped in an environment that lacked both opportunities and direction.
This stark reality struck a chord. You understood that without a foundation in English—a critical skill in today's world—these children would face limited career prospects and miss out on broader opportunities. This gap in education called for immediate action.
Thus, the idea of Akshar was born: a program designed to teach English to rural children in an open and inclusive environment. The goal was not only to enhance their language skills but also to instill confidence and open doors to a brighter future. By teaching English on weekends in open spaces, the program ensures that education reaches even the remotest corners, transforming the lives of children and their communities."
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout5
          content="In the Akshar program, Our dedicated team visits rural villages and conducts English classes at common community spaces, bringing education directly to the heart of these villages. We focus on teaching basic English—emphasizing reading, writing, and speaking skills. The classes are held on weekends in open spaces, ensuring that education is accessible to all, regardless of resources. By creating a supportive and engaging environment, we aim to empower students, help them build confidence, and provide them with the essential language skills needed for academic success and better career opportunities. Through Akshar, we are nurturing a brighter, more self-reliant future for the children of these communities."
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout6
          image="akshar3.jpg"
          title="Akshar"
          num1="50"
          num2="5"
          subtitle1="children received quality education"
          subtitle2="branches opened"
          color="#008080"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout7
          name="Mukesh"
          name2="Rakesh"
          content="Mukesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life."
          img="bachche1.jpg"
          img2="bachche2.jpg"
          content2="Rakesh, a boy from a village, joined the &quot;Akshar&quot; English program at Unnati Welfare Society. Through consistent weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life."
          color="#008080"
        />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Akshar;
