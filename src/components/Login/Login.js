import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // state for error
    const [errorMessage, setErrorMessage] = useState();
    // state for email
    const [email, setEmail] = useState({});
    // state for password
    const [password, setPassword] = useState({});
    const { handleLogin, signInUsingGoogle } = useAuth();
    // handling submit btn
    const handleLoginSubmit = e => {
        e.preventDefault();
    }

    const location = useLocation();
    const history = useHistory();

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleLoginButton = () => {
        handleLogin(email, password)
            .then(result => {
                result?.user &&
                    history.push(redirect_url);
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    }
    // redirecting
    const redirect_url = location?.state?.from || '/';
    // google log in
    const googleLoginButton = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <h1 className="text-center mt-3">Please <span className="text-primary">Login</span></h1>
            <form className="container mt-3" onSubmit={handleLoginSubmit}>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" onBlur={handleEmail} />
                    <label className="form-label" for="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" onBlur={handlePassword} />
                    <label className="form-label" for="form2Example2">Password</label>
                </div>
                <div>
                    <p className="text-danger">{errorMessage}</p>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleLoginButton}>Sign in</button>

                <div className="text-center">
                    <p>New to healths? <Link to="/register">Register</Link></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1" onClick={googleLoginButton}>
                        <i className="fab fa-google"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;