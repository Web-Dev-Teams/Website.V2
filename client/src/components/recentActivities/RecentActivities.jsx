import "./RecentActivities.css"
import holi from './holi.jpg'
import ani from './anniversary.jpg'
import meet from './meet.jpg'
export default function RecentActivities() {
    return (
        <div className="recent_activity">
        <h1 className="text">Recent Activity</h1>
        <div className="cards-container">
            <Card imgSrc={holi} title="Holi Milan Samaroh" />
             <Card imgSrc={ani} title="Unnati Anniversary" />
            <Card imgSrc={meet} title="Monthly Team Meet" />
        </div>
        </div>
    );
}

function Card({ imgSrc, title }) {
    return (
        
        <>
        
        <div className="card">
            <img src={imgSrc} alt={title} />
            <div className="card-title">{title}</div>
        </div>
        </>
    );
}