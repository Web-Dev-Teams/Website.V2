import "./RecentActivities.css"
import holi from "./holi.jpg"
import anniversary from "./anniversary.jpg"
import meet from "./meet.jpg"
export default function RecentActivities() {
    return (
        <div className="recent_activity">
        <h1 className="text">Recent Activity</h1>
        <div className="cards-container">
            <Card imgSrc={holi} title="Garbage Collection" />
             <Card imgSrc={anniversary} title="Plantation" />
            <Card imgSrc={meet} title="Monthly Meet" />
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