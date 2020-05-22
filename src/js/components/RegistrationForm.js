import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { apiUrls } from '../constants/apiConstants.js';
import { urls } from '../constants/urls.js';
import ColumnTextField from './common/ColumnTextField';
import BottomContainer from './common/BottomContainer';
import ContentContainer from './common/ContentContainer';

function RegistrationForm(props) {
    const [state, setState] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        message: null
    });

    const updateMessage = message =>
        setState(state => ({
            ...state,
            message: message
        }));

    const handleChange = e => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const sendDetailsToServer = () => {
        if (state.name.length && state.password.length && state.password) {
            updateMessage(null);
            const payload = {
                email: state.email,
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
                        updateMessage(null);
                    } else {
                        updateMessage('Some error ocurred');
                    }
                })
                .catch(function(error) {
                    // console.log(error);
                });
        } else {
            updateMessage('Please enter valid username and password');
        }
    };

    const handleSubmitClick = e => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer();
        } else {
            updateMessage('Passwords mismatch.');
        }
    };

    return (
        <ContentContainer>
            <h2>Registration</h2>
            <ColumnTextField id="email" helperText="Enter your e-mail" placeholder="E-mail" onChange={handleChange} />
            <ColumnTextField
                id="name"
                helperText="Enter your username"
                placeholder="Username"
                onChange={handleChange}
            />
            <ColumnTextField
                id="password"
                type="password"
                helperText="Enter your password"
                placeholder="Password"
                onChange={handleChange}
            />
            <ColumnTextField
                id="confirmPassword"
                type="password"
                helperText="Confirm your password"
                placeholder="Password confirmation"
                onChange={handleChange}
            />
            <small>We'll never share your name with anyone else.</small>
            <Button onClick={handleSubmitClick}>Submit</Button>

            <BottomContainer>
                <div style={{ display: state.message ? 'block' : 'none' }}>{state.message}</div>
                <div>
                    <span>Already have an account?</span>
                    <Button color="inherit" href={urls.registration.href}>
                        Sing in
                    </Button>
                </div>
            </BottomContainer>
        </ContentContainer>
    );
}

export default RegistrationForm;
