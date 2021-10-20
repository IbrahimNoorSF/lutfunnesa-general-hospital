import React from 'react';
import Css from './Doctors.css';

const Doctors = () => {
    return (
        <div className="mb-5 mt-4">
            <div className="text-center mt-5 mb-4">
                <small><i className="fas fa-stethoscope"></i> Best Doctors</small>
                <h1>Featured Doctors</h1>
                <p>Find The Best Experienced Doctors In Bangladesh</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-50 mx-auto">
                <div className="col">
                    <div className="card h-100 overflow-hidden">
                        <img src="https://www.squarehospital.com/storage/images/1521004739Dr_Sanawar_(6).JPG" className="card-img-top img-fluid doctors-image" alt="..." />
                        <div className="card-body mt-1">
                            <h5 className="card-title">Prof. Dr. Md. Sanawar Hossain</h5>
                            <p className="card-text">Specialty - Senior Consultant General Surgery</p>
                            <p className="card-text">Degree - MBBS, MD, FCPS, FAMASI</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 overflow-hidden">
                        <img src="https://www.squarehospital.com/storage/images/1622456032.png" className="card-img-top img-fluid doctors-image" alt="..." />
                        <div className="card-body mt-1">
                            <h5 className="card-title">Dr. Aftab Yousuf Raj</h5>
                            <p className="card-text">Specialty - Senior Consultant, Pediatrics and Neonatology</p>
                            <p className="card-text">Degree - MBBS, MD (Pediatrics), MD (Neonatology), Fellow Newborn Medicine (Canada), MPH(NSU)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 overflow-hidden">
                        <img src="https://www.squarehospital.com/storage/images/1522312350Dr-Mansur.jpg" className="card-img-top img-fluid doctors-image" alt="..." />
                        <div className="card-body mt-1">
                            <h5 className="card-title">Dr. Mahbub Mansur</h5>
                            <p className="card-text">Specialty - Senior Consultant, Interventional Cardiology</p>
                            <p className="card-text">Degree - MBBS, MD (Cardiology), Fellow, Interventional Cardiology Fellow, Pacing, EP and Device Implantation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;