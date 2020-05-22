import React, { useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants.js';
import { urls } from '../constants/urls.js';
import { withRouter } from 'react-router-dom';

function RegistrationForm(props) {
    const [state, setState] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        successMessage: null
    });
    const handleChange = e => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    const sendDetailsToServer = () => {
        if (state.name.length && state.password.length) {
            props.showError(null);
            const payload = {
                name: state.name,
                password: state.password
            };
            axios
                .post(apiUrls.registration, payload)
                .then(function(response) {
                    if (response.data.code === 200) {
                        setState(prevState => ({
                            ...prevState,
                            successMessage: 'Registration successful. Redirecting to home page..'
                        }));
                        redirectToHome();
                        props.showError(null);
                    } else {
                        props.showError('Some error ocurred');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        } else {
            props.showError('Please enter valid username and password');
        }
    };
    const redirectToHome = () => {
        props.updateTitle('Home');
        props.history.push('/home');
    };
    const redirectToLogin = () => {
        props.updateTitle('Login');
        props.history.push('/login');
    };
    const handleSubmitClick = e => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer();
        } else {
            props.showError('Passwords do not match');
        }
    };
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        value={state.name}
                        onChange={handleChange}
                    />
                    <small>We'll never share your name with anyone else.</small>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={state.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleSubmitClick}>
                    Register
                </button>
            </form>
            <div style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <Button color="inherit" component={createLink(urls.login)}>
                    Sign in
                </Button>
            </div>
        </div>
    );
}

export default withRouter(RegistrationForm);
