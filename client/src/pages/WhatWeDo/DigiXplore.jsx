import React from 'react';
import Layout1 from '../../components/WhatWeDo/Layout1';
import Header from '../../components/Header/Header';
import Layout2 from '../../components/WhatWeDo/Layout2';
import Layout3 from '../../components/WhatWeDo/Layout3';
import Layout4 from '../../components/WhatWeDo/Layout4';
import Layout5 from '../../components/WhatWeDo/Layout5';
import Layout6 from '../../components/WhatWeDo/Layout6';
import Layout7 from '../../components/WhatWeDo/Layout7';
import Footer from '../../components/Footer/Footer';
import MotionWrapper from '../../components/MotionWrapper';

const DigiXplore = () => {
  return (
    <div className="digixplore-outer-container">
      <div className="digixplore">
        <Header />

        <MotionWrapper direction="up">
          <Layout1 image="studying2.jpg" heading="DigiXplore" bg="#9A41DA" />
        </MotionWrapper>

        <MotionWrapper direction="left" delay={0.1}>
          <Layout2
            content={` DigiXplore – Bridging the Digital Divide
“Empowering young minds with the skills of tomorrow.”
DigiXplore is designed to empower students with essential digital literacy skills. Through engaging workshops and hands-on learning, we help young minds become confident with technology, from basic computer operations to safe internet usage. By making digital tools accessible, we aim to prepare students for the opportunities of the modern world.`}
            bg1="#F3E8FB"
            color="#9A41DA"
            image1="./Polygon-2.png"
          />
        </MotionWrapper>

        <MotionWrapper direction="zoom" delay={0.2}>
          <Layout3
            bg="#9A41DA"
            bg2="#A759DE"
            color="#FFFFFF"
            heading="Our Journey"
          />
        </MotionWrapper>

        <MotionWrapper direction="right" delay={0.3}>
          <Layout4
            heading="DigiXplore"
            image="teamB.jpg"
            content={`Impact at Babupur Middle School
*"Unnati has brought a wave of hope and change to our school. Many of our students come from families that struggle to meet even basic needs, and often miss out on opportunities to learn and grow. Through their programs – DigiXplorea and Netritva– Unnati has opened new doors for our children. They are now confident using digital tools, thinking about their future careers, and strengthening their basics in reading, writing, and math.

The personal attention and innovative teaching methods used by Unnati’s volunteers have made learning enjoyable and meaningful for our students. As a school, we are deeply grateful for the positive transformation they have brought to our classrooms and in the lives of our children."*
— Principal, Babupur Middle School`}
          />
        </MotionWrapper>

        <MotionWrapper direction="left" delay={0.4}>
          <Layout5
            content={`In the Akshar program, Our dedicated team visits rural villages and conducts English classes at common community spaces, bringing education directly to the heart of these villages. We focus on teaching basic English—emphasizing reading, writing, and speaking skills. The classes are held on weekends in open spaces, ensuring that education is accessible to all, regardless of resources. By creating a supportive and engaging environment, we aim to empower students, help them build confidence, and provide them with the essential language skills needed for academic success and better career opportunities. Through Akshar, we are nurturing a brighter, more self-reliant future for the children of these communities.`}
          />
        </MotionWrapper>

        <MotionWrapper direction="up" delay={0.5}>
          <Layout6
            image="digi15.jpg"
            title="DigiXplore"
            num1="50"
            num2="12"
            subtitle1="children received quality education"
            subtitle2="Schools opened"
            color="#9A41DA"
          />
        </MotionWrapper>

        <MotionWrapper direction="zoom" delay={0.6}>
          <Layout7
            name="Mukesh"
            name2="Rakesh"
            content={`Mukesh, a boy from a village, joined the "Akshar" English program at Unnati Welfare Society. Through consistent weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life.`}
            img2="bachche4.jpg"
            img="bachche3.jpg"
            content2={`Rakesh, a boy from a village, joined the "Akshar" English program at Unnati Welfare Society. Through consistent weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life.`}
            color="#AC63E0"
          />
        </MotionWrapper>

        <Footer />
      </div>
    </div>
  );
};

export default DigiXplore;
