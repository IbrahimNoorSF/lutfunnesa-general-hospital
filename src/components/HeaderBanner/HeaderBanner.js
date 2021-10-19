import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderBannerImg from '../../utilities/images/header-banner.jpg';
import Css from './HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className="header-banner text-white">
            <div className="header-banner-img">
                <img src={HeaderBannerImg} alt="" />
            </div>
            <div className="header-banner-details">
                <p className="mb-3">Entrust your health our doctors</p>
                <h1 className="mb-1  exceptional">Exceptional people.</h1>
                <h1 className="mb-4  exceptional">Exceptional care.</h1>
                <Link to="/about"><button className="default-button">Learn More</button></Link>
            </div>
        </div>
    );
};

export default HeaderBanner;