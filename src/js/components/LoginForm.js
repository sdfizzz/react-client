import React, { useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants.js';
import { urls } from '../constants/urls.js';
import { withRouter } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ColumnTextField from './common/ColumnTextField';

const StyledContainer = styled(Container)({
    maxWidth: '800px',
    display: 'flex',
    flexFlow: 'column noWrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
});

function LoginForm(props) {
    const [state, setState] = useState({
        name: '',
        password: '',
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

    const handleSubmitClick = e => {
        e.preventDefault();
        const payload = {
            name: state.name,
            password: state.password
        };
        axios
            .post(apiUrls.login.href, payload)
            .then(function(response) {
                if (response.data.code === 200) {
                    updateMessage('Login successful. Redirecting to home page..');
                    redirectToHome();
                    updateMessage(null);
                } else if (response.data.code === 204) {
                    updateMessage('Username and password do not match');
                } else {
                    updateMessage('Username does not exists');
                }
            })
            .catch(function(error) {
                updateMessage(error);
            });
    };

    return (
        <Typography component={'span'} variant={'body2'}>
            <StyledContainer>
                <ColumnTextField helperText="Enter your Username" placeholder="Username" onChange={handleChange} />
                <ColumnTextField
                    type="password"
                    helperText="Enter your Password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <Button onClick={handleSubmitClick}>Submit</Button>
                <small>We'll never share your name with anyone else.</small>

                <div style={{ display: state.message ? 'block' : 'none' }} role="alert">
                    {state.message}
                </div>
                <div>
                    <span>Dont have an account? </span>
                    <Button color="inherit" href={urls.registration.href}>
                        Registration
                    </Button>
                </div>
            </StyledContainer>
        </Typography>
    );
}

export default withRouter(LoginForm);
