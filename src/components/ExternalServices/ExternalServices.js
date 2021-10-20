import React, { useEffect, useState } from 'react';
import ExternalService from '../ExternalService/ExternalService';

const ExternalServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/IbrahimNoorSF/lutfunnesa-general-hospital/main/services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mb-5">
            <div className="service-title">
                <small><i className="fas fa-stethoscope"></i> Services</small>
                <h1>Services Provided By Lutfunnesa General Hospital</h1>
                <p>A team of expert doctors that are leading our clinic! Meet our staff<br />and visit us for your next problem!</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                {
                    services.map(service => <ExternalService key={service.id} service={service}></ExternalService>)
                }
            </div>
        </div>
    );
};

export default ExternalServices;