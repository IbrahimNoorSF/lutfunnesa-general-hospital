import React from 'react';
import { Link } from 'react-router-dom';

const ExternalService = (props) => {
    const { id, img, name, shortDescription } = props.service;
    return (
        <div className="col">
            <div className="card h-100 service-card text-center">
                <img src={img} className="card-img-top img-fluid w-50 mx-auto" alt="..." />
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                    <p className="card-text mb-2">{shortDescription}</p>
                    <Link to={`/service/${id}`}><button className="default-button mt-3">View Details</button></Link>
                </div>
            </div>
        </div >
    );
};

export default ExternalService;