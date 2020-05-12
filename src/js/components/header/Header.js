import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import HeaderMenu from './HeaderMenu';

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
    const theme = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <HeaderMenu className={theme.menuButton} />
                <Typography variant="h6" className={theme.title}>
                    Spring-bundle
                </Typography>

                <Button color="inherit">Sign in</Button>
                <Button color="inherit">Registration</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
