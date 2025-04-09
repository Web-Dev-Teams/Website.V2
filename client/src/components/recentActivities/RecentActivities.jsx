import "./RecentActivities.css"
export default function RecentActivities() {
    return (
        <div className="recent_activity">
        <h1 className="text">Recent Activity</h1>
        <div className="cards-container">
            <Card imgSrc="Rectangle_8545.png" title="Garbage Collection" />
             <Card imgSrc="Rectangle 8546.png" title="Plantation" />
            <Card imgSrc="Group_427321225.png" title="" />
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