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
        <>  
            <div className="wrapper">
                <h1 className="community">Community</h1>
            <div className="community-container">
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/854e/df3f/6451cbebd8d28e246d64f21e90bc09a4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oLzIwwZfNxCKLSwSZZpXXL8o0CqvnJCwZSoerTwQDdYp6yD9KDzjnCuBdZ-14dh1UfC72Vw3En6uFVIVrViCM-t9C4HjkHY~6kSq-Ld-OZOwBLUvXAyfj9MusBA8tYil0opsBijQ9rUDGqYDjqcSctIYZLNxXHBab2LLPZEeT5G7PBg~PKTscIZB6r-LOu-C-kdny7QDtglZFNltPazqiiimn4O7EMs1hWSlZr0nc4A16ETq8Pso3FO0wB~Mz2Cw1yx~XkUZ1KqCgbOJxDgPW1x6XXZeGREAQ0lCDvr3WdwgGjUiLtXMUBmmemkB8XBtao-K-X42LXEKwlKkPA1PzQ__" title="PR Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/f3d7/0ae9/9ac42fa8a692393b17067e61481ba0db?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qe5GcU5RqRphhjVcxdfBOo~eKOwWCiyJl~i5dnW-8kCagP-c6gwW6Y6PGQtB7zWuYZUjXzPwDm2KLlwMa-CEtufPSnEH3EpdB3ZlsHt9sstNSS1yhL1HRApYaKMxUEuXOOHvx1FVmFoougrtBkqbpcwCHkOqZIKhDiNU~j850uR-ktXg1xyYOPikE7Tii1B~~NAVVygf5HRY7nBQTUTs-wzrpHuvBIZICHkJjcDilav7MvGDSb-iDWEF~xydPi0wnQHJLTPT2PlZpjvhVx2I0q7eUFacwhuNZSHRpXXUAJu4s7L4RHIe4x-mZvXyJPceW2ReMRToDCAihNV6P4yqlw__" title="R&D Team" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."  />
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/f4c7/b7bb/ffa0549cc16108e955c1a9ff81788c7d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RusO3TxkQk-m8ZRLg12ilKNJKa1lSME~MWEAVCe4Ug2ELMGHNR301JHS0d8bUeBxPOM-6bqgc1uOZ05Xqjyi0fI~~IG7WeT1fMNEw8E8Mr~lJvGDb4TV2JD4~muuL-3n36M7kOOxMubEFiKg6y4DYTnV~NuvejePK1xgbATh~DE4YDOyLZf38puCazxtjBtO~q~SKtsRPobTbDCs6PsX6Qg5kwwPsemO4TAcROcRPCsD6K9O4FnYPO0r92vHoz4zDEk46N2fijuYmggKyNQgEthXHdyqOMBtQCFnxK9KbPdZwHwdF-bxe2NOvSIhRfdbtgt7dnM9EKz~VD00xe3deA__" title="Workshop team" description="Description of Event 3" />
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/22e2/396b/899a13ffc050688a39c5f3677bfaa381?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SS5hp-X3A3TbycMxN1SnPrba3egyKHctsSZjFkhlulF7kaox2kwbRstPIrK~VScujkhYGEqZhBIvCGD94fZxQH-pKTsO-wjhvryO5NBASglzV3maFZKiuIhCd2Wl5eXtipZZepqSqVzXGDBKxnNg9LY~g-csyT9Xe-8~e75p8vbeEyUQJBkteF2szyKx-L6i4a8w9QRFGU0vvtrhsKEAYmdaSIHkn~ECq9oOdAbiUtaYOkzZaI9pfnsL2kGQL9PnsPAVpJfMbqh-FJMWTDIbAe8E3JC-HiF0srG12gjfr8HrfS0E0naFmL3YqE52OZyL38wTs2aAKoEsJXd-4iNmlw__" title="Fundraising Team" description="Description of Event 4" />
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/3c29/b9cf/c39761a9c8f3c72a50658c0d070f687b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uAfPZ~I9Mbu2lcCi0skGKGMo5YOUf4vOWoRP2u9qPkJ9w5gvkRPIa2aNY~wmmm0Z8p0zH-4OYwYWLETL96xLQsu638SWm3dMXTkdWW4x5x1xGJydac~e9Z64IOf~V0~iw1xRCeWz-z5opQJI8VYBiSHkN9ESQVYB5mSmwNbNDTy5WjIzCHlxbVV3mjx8s3u8xaGSWS6MHpI2WdiMymEtA3EOXgw1mxifYm4p9MSbKhCHfqck6aquQvyvQ1XD5gCaq0kl12gyjDmN~HWqUuJsSWngUZoyGJOu0Y4~5OTBTytCOE2MU8BwpcLJfxDornjv0yEYxCssgQU-Nh7qSmCB8w__"title ="The Real Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers." />
                <Card imgSrc="https://s3-alpha-sig.figma.com/img/f4c7/b7bb/ffa0549cc16108e955c1a9ff81788c7d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RusO3TxkQk-m8ZRLg12ilKNJKa1lSME~MWEAVCe4Ug2ELMGHNR301JHS0d8bUeBxPOM-6bqgc1uOZ05Xqjyi0fI~~IG7WeT1fMNEw8E8Mr~lJvGDb4TV2JD4~muuL-3n36M7kOOxMubEFiKg6y4DYTnV~NuvejePK1xgbATh~DE4YDOyLZf38puCazxtjBtO~q~SKtsRPobTbDCs6PsX6Qg5kwwPsemO4TAcROcRPCsD6K9O4FnYPO0r92vHoz4zDEk46N2fijuYmggKyNQgEthXHdyqOMBtQCFnxK9KbPdZwHwdF-bxe2NOvSIhRfdbtgt7dnM9EKz~VD00xe3deA__" title="Capabale Engineers" description="This platform is organized for ui/ux designers, for those who are interesting in learning ui/ux designers and also for new and old designers."/>
            </div>
            </div>
            
        </>
    );
}



