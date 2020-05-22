import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
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

const Footer = () => (
    <div className={useStyles().root}>
        <Typography component={'span'} variant={'body2'}>
            <p>Made for inspiration</p>
        </Typography>
    </div>
);

export default withTheme(Footer);
