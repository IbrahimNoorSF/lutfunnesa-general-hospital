import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Css from './NavBar.css';

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand me-5" to="/"><span className="text-primary fw-light">Lutfunnesa</span> General Hospital</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-link">
                                {
                                    user?.email &&
                                    <span>
                                        <i class="fas fa-user"></i> {user.displayName}
                                    </span>
                                }
                            </li>
                            <li className="nav-item">
                                {/* logout btn / login btn setup */}
                                {
                                    user.email ?
                                        <Link className="nav-link" to="/" onClick={logOut}><span className="text-primary fw-black logout-btn">LogOut</span></Link > :
                                        <Link className="nav-link" to="/login"><span className="text-primary fw-light">Login/Register</span></Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;