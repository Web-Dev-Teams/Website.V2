import React from 'react'
import './Footer.css';


const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className='subscribe'>
        <div>
           <p id='Subscribe'>Subscribe to updates</p>
           <p>Stay informed about our programs and impact.</p>
        </div>
        <div>
           <div className='user'>
            <input type="email" placeholder='Your email here'/>
            <button>Subscribe</button>
           </div>
           <div>
            <p id='agree'>By subscribing, you agree to our Privacy Policy.</p>
           </div>

        </div>

      </div>
      <div className='about'>
        <div><img src="./Footer/Column.png" alt="" /></div>
        <div className='about-box'>
          <ul>
            <h4>Quick Links</h4>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Programs</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Donate Now</a></li>
          </ul>
        </div> 
        <div className='about-box'>
        <ul>
            <h4>Follow Us</h4>
            <li><a href="https://www.facebook.com/share/1D1Z8SNbRN/ ">Facebook Page</a></li>
            <li><a href="https://x.com/Unnati_Welfare">X Profile</a></li>
            <li><a href="https://www.instagram.com/unnati_welfare_society?igsh=bTlmZG9zMXVvbzJs ">instagram Page</a></li>
            <li><a href="https://www.linkedin.com/company/unnati-welfare-society/ ">LinkedIn Page</a></li>
            <li><a href="https://www.youtube.com/@unnatiwelfaresociety">Youtube Channel</a></li>
          </ul>
        </div>
        <div className='about-box'>
        <ul>
            <h4>Resources</h4>
            <li><a href="#">Blog Posts</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Volunteer Info</a></li>
            <li><a href="#">Event Calendar</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className='about-box'>
        <ul>
            <h4>Support Us</h4>
            <li><a href="#">Corporate Sponsorship</a></li>
            <li><a href="#">Fundraising Events</a></li>
            <li><a href="#">Monthly Giving</a></li>
            <li><a href="#">In-Kind Donations</a></li>
            <li><a href="#">Legacy Giving</a></li>
          </ul>
        </div>
        <div className='about-box'>
        <ul>
            <h4>Contact Info</h4>
            <li><a href="#">Email Us</a></li>
            <li><a href="#">Call Us</a></li>
            <li><a href="#">Visit US</a></li>
            <li><a href="#">Our Address</a></li>
            <li><a href="#">Feedback Form</a></li>
          </ul>
        </div>
        

      </div>
      <div className='terms-Condition'>
        <div className='copywright'>
         <p>© 2024 Relume. All rights reserved.</p>
         <p><a href="#">Privacy Policy</a></p>
         <p><a href="#">Terms of Service</a></p>
         <p><a href="#">Cooking Settings</a></p>
        </div>
        <div className='social-media-logo'>
          <a href="#"><img src="./Footer/Facebook.svg" alt="" /></a>
          <a href="#"><img src="./Footer/Instagram.svg" alt="" /></a>
          <a href="#"><img src="./Footer/LinkedIn.svg" alt="" /></a>
          <a href="#"><img src="./Footer/X.svg" alt="" /></a> 
          <a href="#"><img src="./Footer/Youtube.svg" alt="" /></a>
        </div>
      </div>

    </div>
  )
}

export default Footer


