import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        textAlign: 'center'
    }
}));

const Footer = props => (
    <Container className={useStyles().root}>
        <Typography variant="body1">
            <p>Made for inspiration</p>
        </Typography>
    </Container>
);

export default withTheme(Footer);
