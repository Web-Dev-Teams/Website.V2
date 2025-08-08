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

const Prayaas = () => {
  return (
    <div>
      <Header />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout1 image="teamB.jpg" heading="Prayaas" bg="#228B22" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout2
          content="Prayaas is a community-driven program designed to raise awareness about the importance of education among underprivileged children. It aims to inspire and empower these children by providing interactive learning sessions, basic educational resources, and guidance. The program seeks to bridge educational gaps, encourage curiosity, and foster a love for learning, ultimately helping children overcome barriers to a brighter future. Through collaboration with volunteers, NGOs, and local communities, Prayaas strives to create a sustainable impact, nurturing young minds and supporting their journey toward knowledge and growth"
          bg4="#F3E8FB"
          color="#228B22"
          image4="./Polygon-2.png"
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout3 bg="#228B22" bg2="#228B20" color="#FFFFFF" heading="Our Journey" />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout4
          heading="Prayaas"
          image="digi11.jpg"
          content="Prayaas is a heartfelt initiative aimed at transforming the lives of underprivileged children by fostering awareness about the importance of education. This program seeks to bridge the gap between opportunity and potential, ensuring that every child, regardless of their socio-economic background, understands the value of learning and personal growth. Through interactive sessions, engaging activities, and access to basic educational resources, Prayaas aspires to ignite a spark of curiosity and ambition in young minds. By empowering these children with knowledge and guidance, the program aims to inspire them to pursue their dreams and break free from the cycle of poverty, ultimately building a brighter future for themselves and their communities."
        />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout5 content="In begin the Prayaas program, start by defining its mission to create awareness about education among underprivileged children. Identify target communities through research and collaboration with local NGOs or social workers. With a dedicated team of volunteers and develop a structured plan, including interactive sessions and resource requirements. We gather educational materials through donations or crowdfunding, and engage the community with awareness campaigns to build trust and participation. Once we were ready, we organized sessions in accessible locations, focusing on making learning enjoyable. Regularly evaluate the program's impact and refine it for better outreach and effectiveness.." />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Layout6
          image="teaching2.jpg"
          num1="67"
          num2="6"
          subtitle1="children received quality education"
          subtitle2="branches opened"
          color="#228B22"
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
          color="#228B22"
        />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Prayaas;
