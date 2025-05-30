import "./Community.css";

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
   
    return (
        <div className="community">
            <h1>Community</h1>
            <div className="community-container">
                <Card imgSrc="Frame 2610450 (5).png" title="PR Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card imgSrc="Frame 2610450 (4).png" title="R&D Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."  />
                <Card imgSrc="Frame 2610450 (3).png" title="Workshop team" description="Description of Event 3" />
                <Card imgSrc="Frame 2610450 (1).png" title="Fundraising Team" description="Description of Event 4" />
                <Card imgSrc="Frame 2610450.png"title ="The Real Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card imgSrc="Frame 2610450.png" title="Capabale Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."/>
            </div>
        </div>
    );
}



