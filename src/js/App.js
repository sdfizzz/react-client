import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from './components/header/Header.js';
import { urls } from './constants/urls.js';
import LoginForm from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import Footer from './components/Footer';

const App = () => (
    <Router>
        <Container>
            <Header/>
            <Switch>
                <Route path={urls.main.pathname} exact component={() => <div/>}/>
                <Route path="/login" component={LoginForm}/>
                <Route path={urls.registration.pathname} component={RegistrationForm}/>
            </Switch>
            <Footer/>
        </Container>
    </Router>
);

export default App;
