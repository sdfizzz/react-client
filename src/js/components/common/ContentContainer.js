import React from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const StyledContainer = styled(Container)(props => {
    return {
        display: 'flex',
        flexFlow: props.row ? 'row noWrap' : 'column noWrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    };
});

const ContentContainer = props => (
    <Typography component={'span'} variant={'body2'}>
        <StyledContainer {...props} row={props.row ? 1 : 0}>
            {props.children}
        </StyledContainer>
    </Typography>
);

export default ContentContainer;
