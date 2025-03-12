import React from 'react';
import './Location.css'

const LocationInfo = () => {
    return (
        <div className="location-info">
            <h2>Visit Us Here</h2>
            <h3>Head Office</h3>
            <p>Indian Institute of Information Technology, Bhagalpur Sabour, Bihar</p>
            <p>Pin code - 813210</p>
            <p>Phone - 88989175638</p>
            <p>Monday to Friday 8:00AM to 6:00PM</p>
            <p>
                <a 
                    href="https://www.google.com/maps?q=Indian+Institute+of+Information+Technology,+Bhagalpur+Sabour,+Bihar&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#DF0000', fontSize: '18px', textDecoration: 'none' }}

                >
                    Locate us on map
                </a>
            </p>
        </div>
    );
}

const MapImage = () => {
    return (
        <div className="map-image">
            <img src="/image 149.png" alt="Map image" />
        </div>
    );
}

const LocationBox = () => {
    return (
        <div className="location-box">
            <LocationInfo />
            <MapImage />
        </div>
    );
}

export default LocationBox;
