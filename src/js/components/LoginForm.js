import React, { useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants.js';
import { urls } from '../constants/urls.js';
import { withRouter } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
        successMessage: null
    });

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
                    setState(prevState => ({
                        ...prevState,
                        successMessage: 'Login successful. Redirecting to home page..'
                    }));
                    redirectToHome();
                    props.showError(null);
                } else if (response.data.code === 204) {
                    props.showError('Username and password do not match');
                } else {
                    props.showError('Username does not exists');
                }
            })
            .catch(function(error) {
                // console.log(error);
            });
    };

    const redirectToHome = () => {
        props.updateTitle('Home');
        props.history.push(urls.main);
    };

    return (
        <Typography component={'span'} variant={'body2'}>
            <StyledContainer>
                <TextField helperText="Enter your Username" placeholder="Username" onChange={handleChange} />
                <br />
                <TextField
                    type="password"
                    helperText="Enter your Password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <br />
                <Button onClick={handleSubmitClick}>Submit</Button>
                <br />
                <small>We'll never share your name with anyone else.</small>

                <div style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
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
