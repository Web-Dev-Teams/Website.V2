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
import ScrollReveal from './ScrollReveal'
const Netritva = () => {
  return (
    <div>
      <Header />

      <ScrollReveal>
        <Layout1 image="netritva.jpg" heading="Netritva" bg="#FF832C" />
      </ScrollReveal>

      <ScrollReveal>
        <Layout2
          content={`Netritva – Guiding Career Journeys\n“Shaping futures through mentorship and direction.”\n\nNetritva focuses on providing career guidance and mentorship to students from under-resourced communities. Our sessions cover everything from personality development and goal setting to career exploration and college readiness. With the right direction and support, Netritva helps students identify their strengths and build a roadmap to achieve their aspirations.`}
          bg2="#F3E8FB"
          color="#FF832C"
        />
      </ScrollReveal>

      <ScrollReveal>
        <Layout3 bg="#FF832CDB" bg2="#FF832CDA" color="#FFFFFF" heading="Our Journey" />
      </ScrollReveal>

      <ScrollReveal>
        <Layout4
          heading="Netritva"
          image="net1.jpg"
          content="Bhagalpur, Bihar, is a region brimming with potential but faces significant challenges in terms of career awareness and guidance for students. Many young minds in this area grow up unaware of diverse career opportunities due to limited exposure and traditional mindsets that often prioritize conventional paths. Socioeconomic constraints further compound the issue, with families relying on agriculture or small-scale businesses, leading to a focus on immediate earning rather than long-term educational goals. Despite efforts to improve government schools, access to modern resources and career counseling remains limited, leaving students unprepared for the demands of a rapidly evolving world. This lack of guidance often results in talented students migrating out of the region in search of opportunities, contributing to a brain drain."
        />
      </ScrollReveal>

      <ScrollReveal>
        <Layout5
          content={`Under the Netritva program, Unnati Welfare Society provides personalized and structured career guidance to students, focusing on their aspirations, strengths, and opportunities. We organize interactive workshops, counseling sessions, and career awareness events in schools and communities, covering diverse fields such as technology, healthcare, entrepreneurship, government services, and creative industries.\n\nOur team conducts aptitude and interest-based assessments to help students identify their strengths and align them with potential career paths. We also invite professionals and experts from various fields to share real-world insights, inspiring students and broadening their horizons. Through one-on-one mentoring and group discussions.`}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Layout6
          image="net2.jpg"
          num1="1000"
          num2="6"
          subtitle1="children received guidance "
          subtitle2="Schools"
          color="#FF832C"
        />
      </ScrollReveal>

      <ScrollReveal>
        <Layout7
          name="Mukesh"
          name2="Rakesh"
          img="bachche1.jpg"
          img2="bachche2.jpg"
          content="Mukesh, a boy from a village, joined the Akshar English program at Unnati Welfare Society. Through consistent weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life."
          content2="Rakesh, a boy from a village, joined the Akshar English program at Unnati Welfare Society. Through consistent weekend classes, he overcame language barriers and now confidently speaks and writes English, marking a remarkable transformation in his life."
          color="#FF832C"
        />
      </ScrollReveal>

      <Footer />
    </div>
  )
}

export default Netritva
