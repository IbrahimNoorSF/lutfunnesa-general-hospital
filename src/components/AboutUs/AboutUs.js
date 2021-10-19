import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="container mt-5 mb-5 pb-5 pt-5">
            <h1>LUTFUNNESA GENERAL HOSPITAL</h1>
            <p>Lutfunnesa General Hospital is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Square Hospital is one of the ventures of Square Group which is the top business group of the country.</p>
            <br />
            <p>The reputation of Lutfunnesa General Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Square Hospitals strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>

            <Link to="/home"><button className="default-button">Back To Home</button></Link>
        </div>
    );
};

export default AboutUs;