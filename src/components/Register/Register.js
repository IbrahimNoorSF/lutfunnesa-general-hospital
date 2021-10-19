import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Register = () => {
    // state of name
    const [name, setName] = useState({});
    // state if email
    const [email, setEmail] = useState({});
    // state of password
    const [password, setPassword] = useState({});
    const { newRegistration, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // redirecting
    const redirect_url = location?.state?.from || '/';

    const handleRegistrationSubmit = e => {
        e.preventDefault();
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleSubmitRegistration = () => {
        newRegistration(email, password, name)
            .then(result => {
                history.push(redirect_url);
            })
    }
    // google registration
    const googleRegisterButton = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <h1 className="text-center mt-3">Please <span className="text-primary">Register</span></h1>
            <form className="container mt-3" onSubmit={handleRegistrationSubmit}>
                <div className="col">
                    <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" onBlur={handleName} />
                        <label className="form-label" htmlFor="form3Example1">Name</label>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" onBlur={handleEmail} />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" onBlur={handlePassword} />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSubmitRegistration}>Sign up</button>

                <div className="text-center">
                    <p>Already Registered? <Link to="/login">Login</Link></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1" onClick={googleRegisterButton}>
                        <i className="fab fa-google"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;