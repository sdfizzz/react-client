import React, { useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants.js';
import { urls, createLink } from '../constants/urls.js';
import { withRouter } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)({
    display: 'flex',
    flexFlow: 'column noWrap',
    justifyContent: 'center'
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
            .post(apiUrls.login.pathname, payload)
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
    const redirectToRegister = () => {
        props.history.push(urls.registration);
        props.updateTitle(urls.registration);
    };
    return (
        <StyledContainer>
            <form>
                <div className="form-group text-left">
                    <label>Name</label>
                    <input
                        type="name"
                        className="form-control"
                        placeholder="Enter name"
                        value={state.name}
                        onChange={handleChange}
                    />
                    <small>We'll never share your name with anyone else.</small>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={state.password} onChange={handleChange} />
                </div>
                <Button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>
                    Submit
                </Button>
            </form>
            <div style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <Button color="inherit" component={createLink(urls.registration)}>
                    Registration
                </Button>
            </div>
        </StyledContainer>
    );
}

export default withRouter(LoginForm);
