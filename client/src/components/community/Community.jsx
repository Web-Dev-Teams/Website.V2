import "./Community.css";
 import akshar from './akshar.jpg'
 import netritva from './netritva.jpg'
 import digi from './digiexp.jpg'
 import random from './random.jpg'

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
<<<<<<< HEAD
                <Card  imgSrc={akshar}  title="PR Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card  imgSrc={netritva} title="R&D Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."  />
                <Card  imgSrc={digi} title="Workshop team" description="Description of Event 3" />
                <Card  imgSrc={random} title="Fundraising Team" description="Description of Event 4" />
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/3c29/b9cf/c39761a9c8f3c72a50658c0d070f687b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uAfPZ~I9Mbu2lcCi0skGKGMo5YOUf4vOWoRP2u9qPkJ9w5gvkRPIa2aNY~wmmm0Z8p0zH-4OYwYWLETL96xLQsu638SWm3dMXTkdWW4x5x1xGJydac~e9Z64IOf~V0~iw1xRCeWz-z5opQJI8VYBiSHkN9ESQVYB5mSmwNbNDTy5WjIzCHlxbVV3mjx8s3u8xaGSWS6MHpI2WdiMymEtA3EOXgw1mxifYm4p9MSbKhCHfqck6aquQvyvQ1XD5gCaq0kl12gyjDmN~HWqUuJsSWngUZoyGJOu0Y4~5OTBTytCOE2MU8BwpcLJfxDornjv0yEYxCssgQU-Nh7qSmCB8w__"title ="The Real Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/f4c7/b7bb/ffa0549cc16108e955c1a9ff81788c7d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RusO3TxkQk-m8ZRLg12ilKNJKa1lSME~MWEAVCe4Ug2ELMGHNR301JHS0d8bUeBxPOM-6bqgc1uOZ05Xqjyi0fI~~IG7WeT1fMNEw8E8Mr~lJvGDb4TV2JD4~muuL-3n36M7kOOxMubEFiKg6y4DYTnV~NuvejePK1xgbATh~DE4YDOyLZf38puCazxtjBtO~q~SKtsRPobTbDCs6PsX6Qg5kwwPsemO4TAcROcRPCsD6K9O4FnYPO0r92vHoz4zDEk46N2fijuYmggKyNQgEthXHdyqOMBtQCFnxK9KbPdZwHwdF-bxe2NOvSIhRfdbtgt7dnM9EKz~VD00xe3deA__" title="Capabale Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."/>
=======
                <Card imgSrc="Frame 2610450 (5).png" title="PR Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card imgSrc="Frame 2610450 (4).png" title="R&D Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."  />
                <Card imgSrc="Frame 2610450 (3).png" title="Workshop team" description="Description of Event 3" />
                <Card imgSrc="Frame 2610450 (1).png" title="Fundraising Team" description="Description of Event 4" />
                <Card imgSrc="Frame 2610450.png"title ="The Real Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card imgSrc="Frame 2610450.png" title="Capabale Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."/>
>>>>>>> 9fc5da72674ea38099c9d1a79fd42f2179bf9c8b
            </div>
        </div>
    );
}



