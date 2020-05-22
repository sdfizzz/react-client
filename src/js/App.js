import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from './components/header/Header.js';
import { urls } from './constants/urls.js';
import LoginForm from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import Footer from './components/Footer';
import GreetingPanel from './components/GreetingPanel';

const App = () => (
    <Router>
        <Container>
            <Header />
            <Switch>
                <Route path={urls.main} exact component={() => <div />} />
                <Route path={urls.login} component={LoginForm} />
                <Route path={urls.registration} component={RegistrationForm} />
                <Route path={urls.greetings} component={GreetingPanel} />
            </Switch>
            <Footer />
        </Container>
    </Router>
);

export default App;
