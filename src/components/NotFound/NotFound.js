import React from 'react';
import { Link } from 'react-router-dom';
import Css from './NotFound.css';

const NotFound = () => {
    return (
        <div className="text-center not-found-container">
            <img src={'https://edusphere.radiantthemes.com/wp-content/uploads/2020/08/page-not-found.png'} alt="" />
            <h2>The Page You Are Looking For Is Not Available</h2>
            <Link to="/"><button>Take Me Home</button></Link>
        </div>
    );
};

export default NotFound;