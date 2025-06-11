import "./Community.css";

import netritva from './netritva.jpg';
import digi from './digiexp.jpg';
import random from './random.jpg';
import random2 from './random2.jpg';
import random3 from './random3.jpg';
import akshar from './akshar.jpg';

function Card({ imgSrc, title, description }) {
    return (
        <div className="community-card">
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default function Community() {
    const descriptionText = "This platform is organized for UI/UX designers, for those who are interested in learning UI/UX design and also for new and old designers.";

    return (
        <div className="community">
            <h1>Community</h1>
            <div className="community-container">
                <Card imgSrc={akshar} title="PR Team" description={descriptionText} />
                <Card imgSrc={netritva} title="R&D Team" description={descriptionText} />
                <Card imgSrc={digi} title="Workshop Team" description="Description of Event 3" />
                <Card imgSrc={random} title="Fundraising Team" description="Description of Event 4" />
                <Card imgSrc={random2}
                    title="The Real Engineers"
                    description={descriptionText} />
                <Card imgSrc={random3}
                    title="Capable Engineers"
                    description={descriptionText} />
            </div>
        </div>
    );
}

