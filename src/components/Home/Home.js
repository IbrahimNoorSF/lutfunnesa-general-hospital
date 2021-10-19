import React from 'react';
import Doctors from '../Doctors/Doctors';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Services from '../Services/Services';
import HomeShop from '../HomeShop/HomeShop';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <Services></Services>
            <Doctors></Doctors>
            <HomeShop></HomeShop>
        </div>
    );
};

export default Home;