import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import HeaderMenu from './HeaderMenu';
import { urls, createLink } from '../../constants/urls';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const Header = props => {
    const styles = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <HeaderMenu className={styles.menuButton} />
                <Typography variant="h6" className={styles.title}>
                    Spring-bundle
                </Typography>

                <Button color="inherit" href={urls.login.href}>
                    Sign in
                </Button>
                <Button color="inherit" component={createLink(urls.registration.href)}>
                    Registration
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
