import "./RecentActivities.css"


function Cards({ imgSrc, title }) {
    return (
        
        <>
        
        <div className="cards">
            <img src={imgSrc} alt={title} />
            <div className="cards-title">{title}</div>
        </div>
        </>
    );
}
export default function RecentActivities() {
    return (
        <div className="recent_activity">
        <h1 className="text">Recent Activity</h1>
        <div className="cards-container">
            <Cards imgSrc="Rectangle_8545.png" title="Garbage Collection" />
             <Cards imgSrc="Rectangle 8546.png" title="Plantation" />
            <Cards imgSrc="Group_427321225.png" title="" />
        </div>
        </div>
    );
}