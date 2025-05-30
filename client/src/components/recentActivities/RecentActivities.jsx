import "./RecentActivities.css"
<<<<<<< HEAD
import holi from './holi.jpg'
import ani from './anniversary.jpg'
import meet from './meet.jpg'
=======


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
>>>>>>> 9fc5da72674ea38099c9d1a79fd42f2179bf9c8b
export default function RecentActivities() {
    return (
        <div className="recent_activity">
        <h1 className="text">Recent Activity</h1>
        <div className="cards-container">
<<<<<<< HEAD
            <Card imgSrc={holi} title="Holi Milan Samaroh" />
             <Card imgSrc={ani} title="Unnati Anniversary" />
            <Card imgSrc={meet} title="Monthly Team Meet" />
=======
            <Cards imgSrc="Rectangle_8545.png" title="Garbage Collection" />
             <Cards imgSrc="Rectangle 8546.png" title="Plantation" />
            <Cards imgSrc="Group_427321225.png" title="" />
>>>>>>> 9fc5da72674ea38099c9d1a79fd42f2179bf9c8b
        </div>
        </div>
    );
}