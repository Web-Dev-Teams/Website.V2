import  { useState } from 'react';
import './Faq.css'
const Faq=()=>{
    const [activeQuestion,setActiveQuestion]=useState(null);
    const questionsAndAnswers=[
        {
            question:"What is Unnati Welfare Society?",
            answer:"Unnati Welfare Society is an NGO established by a group of friends focused on providing digital education, mentorship, and career guidance to underprivileged students. It aims to empower students through programs like Akshar, career counseling, and workshops."
        },
        {
            question:"What is the vision of Unnati Welfare Society?",
            answer:"Our vision is to bridge the educational gap for students in rural areas by equipping them with digital skills, career awareness, and holistic knowledge, enabling them to achieve their true potential"
        },
        {
            question:"How can I support Unnati Welfare Society?",
            answer:"You can support us by volunteering, donating, or sharing our initiatives to reach more people. Your contribution helps us expand our efforts and benefit more students."
        },
        {
            question:"What is the Akshar program?",
            answer:"Akshar is an initiative where we teach English to children in villages during weekends in an open space. The program focuses on improving their reading and writing skills."
        },
        {
            question:"How do you conduct career guidance sessions?",
            answer:"We guide students in choosing the right career paths by conducting interactive MCQ-based surveys, analyzing their interests, and offering personalized advice."
        },
        {
            question:"Who can join the programs organized by Unnati Welfare Society?",
            answer:"Unnati Welfare Society is an NGO established by a group of friends focused on providing digital education, mentorship, and career guidance to underprivileged students. It aims to empower students through programs like Akshar, career counseling, and workshops."
        },
        {
            question:"What programs are currently run by Unnati Welfare Society?",
            answer:"Our active programs include Akshar (teaching English), digital literacy workshops, career guidance sessions, cyber safety awareness campaigns, and environmental awareness drives."
        },
        {
            question:"What is the significance of digital education in your programs?",
            answer:"Digital education equips students with essential computer skills, helping them access better educational resources, career opportunities, and prepare for a technology-driven future."
        },
        {
            question:"How does Unnati ensure the success of its workshops?",
            answer:"We engage students with interactive learning sessions and ensure they write and learn 10 general knowledge questions at the end of every workshop for enhanced knowledge retention."
        },
        {
            question:"Can parents participate in the guidance programs?",
            answer:"Yes, we encourage parental involvement to help them understand their children's potential and support their career choices effectively."
        },
        {
            question:"How do I register for Unnati's programs?",
            answer:"You can register by contacting us through our website, email, or visiting our local centers. We’ll guide you through the registration process."
        },
        {
            question:"What impact has Unnati created so far?",
            answer:"Unnati has empowered many students by improving their English skills, digital literacy, and career awareness. Our programs have helped students gain confidence and achieve better opportunities."
        }
    ]
    const toggleAnswer = (index) => {
        // If the same question is clicked, close it. Otherwise, open the clicked question.
        setActiveQuestion(activeQuestion === index ? null : index);
    };


    return(
        
        <div>       
=           <img
                src="/Group 427321218.png"
                alt="FAQ Image"
                style={{
                    width: '100%',
                    height: 'auto',
                    
                    
                    margin: 'clamp(1.5rem, 4vw, 3rem) 0 0 0',
                    display: 'block',
                    objectFit: 'contain',
                    transition: 'margin 0.3s ease-in-out'
                }}
            />

            <div className="faq-container">
                {questionsAndAnswers.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="question">
                            <p>{item.question}</p>
                            <img
                                src="/ic_baseline-plus.png"
                                alt="Plus"
                                className="plus-icon"
                                onClick={() => toggleAnswer(index)}
                            />
                        </div>
                        {activeQuestion === index && (
                            <div className="answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Faq