import React from 'react';

const Template = (props) => {
    return (
        <div>
            <h2 style={templateHeadingStyle}>{props.queryType}</h2>
            <p style={templateTextStyle}>{props.email}</p>
            <p style={templateTextStyle}>{props.name} : {props.number}</p>
        </div>
    );
}

const DetailBox = () => {
    return (
        <div style={detailBoxContainerStyle}>
            <Template 
                queryType="All General Queries" 
                name="Whatsapp Number" 
                email="info.unnatiwelfaresociety@gmail.com" 
                number="8058060375" 
            />
            <Template 
                queryType="Donation Related Queries" 
                name="Devanshu Singh" 
                email="donation.unnatiwelfaresociety@gmail.com" 
                number="8058060375" 
            />
            <Template 
                queryType="For Media-Related Queries" 
                name="Shivam Kumar Gautam" 
                email="media.unnatiwelfaresociety@gmail.com" 
                number="8058060375" 
            />
        </div>
    );
}

const detailBoxContainerStyle = {
    width: '500px', 
    height: 'auto',
    marginLeft: '50px',
    marginTop:'75px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const templateHeadingStyle = {
    fontSize: '32px',  
    fontWeight: 'bold',
    marginBottom: '10px',
};

const templateTextStyle = {
    fontSize: '22px',  
    marginBottom: '5px',
    fontWeight: 'normal',
};

export default DetailBox;
