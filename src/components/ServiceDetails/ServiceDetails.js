import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Css from './ServiceDetails.css';

const ShopProductDetails = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setSeviceDetails] = useState([]);
    const [signleService, setSingleService] = useState({});
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/IbrahimNoorSF/lutfunnesa-general-hospital/main/services.json")
            .then(res => res.json())
            .then(data => setSeviceDetails(data))
    }, []);
    useEffect(() => {
        const serviceFound = serviceDetails.find(sevice => sevice.id == serviceId)
        setSingleService(serviceFound);
    }, [serviceDetails])
    console.log(signleService);
    return (
        <div>
            <div className="single-product-details-container">
                <h1>{signleService?.name}</h1>
                <p>{signleService?.about}</p>
                <Link to="/home"><button className="default-button service-detail-button">Back To Home</button></Link>
            </div>
            <div className="img-container-sevice">
                <img src={signleService?.img} className="single-service-img" alt="" />
            </div>
        </div>
    );
};

export default ShopProductDetails;