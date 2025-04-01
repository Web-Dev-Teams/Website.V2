import "./RecentActivities.css"
export default function RecentActivities() {
    return (
        <>
        <h1 className="text">Recent Activity</h1>
        <div className="cards-container">
            <Card imgSrc="https://s3-alpha-sig.figma.com/img/fab6/f786/205ebc95ccf3ed6edcfda9deb8a8fce8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PneEdVqPAByr8jcIZBx6gBkgVI9oHzug~efUv1ujH5M-QE196NKOp59pnSAPZpX4j2RzcZJrgTRnJb1niuUsvFbOMnVytFaxWj6WsbjPwlKtuYbeQbhUXbZd~Zrr-ZYixK00OyYSaw3ohU~pmybJX4T5PfIZwpRCHorwXpzsEPB4SvG5XygpJzmQnvY1JavdKbH6R1HkFC23iukR6HnrbKE4q2PaaZbMCtI-WXZcaISjtErXnRLne63cGK2~5l0iAgWfXGUKyXxFwDEU97fglfgUn48AWrP6BhFdDrjxLy0kHzP1FX05kH7w~bicOw8VkVhMzqA4Si6TbSxwmBvrqg__" title="Activity 1" />
            <Card imgSrc="https://s3-alpha-sig.figma.com/img/0258/95ea/a8407fbee142d4eaa1f7fbd15b5e6d4f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aDmCJWqSi9ua6HMmEZ~VKJPltzwDfaQb~tlQFfMuF5L1s8UWTaXONbXBPljNuNRKiVqQkYtxkYwPAII4s7Bnq~CHYtDGlKPcd~PBwkd7hvBWoRk8KXCHHSjldOObIoSKCoI2etu6WErjgs9au55Yb-m-lspPADv0ztCtn6xBT5oKcJJlQmRLK27DUZdi~lFc3TFHVepJ-G-oVb1JLkiDqCpPanytCcrrVHiSdIYI6hBG4-vG7hd5ZqIOGrlGAxk4NZhGnAyl9d3PyhP~ggxMWMI9-a~6VoK55idNr5ApMLRWi5hLwsFmbEvaB~176Hd8~ncIO80PWBIOWadM1R0Zkg__" title="Activity 2" />
            <Card imgSrc="https://s3-alpha-sig.figma.com/img/ae19/4909/839111eec410990472c74b62ce0182f7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eFJp4wNjFlLUZOGLKZe4gBGdM99OINirXsuNhJmeKaRDUqrjCz9SWjOBYEYn~CKo374OwJm5P8IlDVvH8CbwgwBc3kqeG5qW0o17dFdSg8jYEgXC1qBkS9fj65Rjvau8cgU4-NXUqOyGnwx9odaR7DvMBFwBh7qKip2-IryEJCjATwUPdCZMFlE51n0YMQFK1Rp9DJHmhBXHN91UaKo2Vl5b5w9fBVS82RJvRadT~YhL90Sufhfo~BSibQSrardLlqINOikGRDaiPHp9SwztJX3YvqrhsRCiiN4T-hB3v7qfNfbIQ3ELFfAl2F0du4XKSsKDGsT5bBLUxFnuOpSJnQ__" title="Activity 3" />
        </div>
        </>
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