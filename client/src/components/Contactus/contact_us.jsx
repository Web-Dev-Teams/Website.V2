import React from 'react';
import DetailBox from './template';
import Helpdesk from './HelpDesk';
import LocationBox from './Location';
const ContactUs = () => {
    return(
        <div>
            <img src="/Frame 2610660.png" alt="CONTACT US IMAGE"/>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <DetailBox />
                <Helpdesk />
            </div>
            <LocationBox/>

        </div>
    );
}
export default ContactUs;