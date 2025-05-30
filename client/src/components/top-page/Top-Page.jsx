
import "./Top-Page.css"
import volunteerImg from './volunteer.png';
export default function TopPage() {
    return (
        <>
            <div className="top-cont">
                <div className="img-top">
                    <img src={volunteerImg} alt="" />
                </div>
                <div className="text-para">
                    <p>At Unnati Welfare Society, volunteers are the driving force behind our mission to create a brighter future for underprivileged students. By dedicating your time, expertise, and passion, you can transform lives, inspire dreams, and help shape the leaders of tomorrow.
                        Your contribution, no matter how big or small, has the power to make a lasting impact. Whether it's teaching, mentoring, organizing events, or simply sharing your knowledge, every effort brings us closer to a world where every child has the opportunity to succeed.
                        Join us in this journey of empowerment and education—because together, we can make a difference!</p>
                        <button>Volunter Now</button>
                </div>
            </div>

        </>
    )

}
