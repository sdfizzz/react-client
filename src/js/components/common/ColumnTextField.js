import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const ColumnTextField = styled(TextField)({
    minWidth: '400px',
    padding: '10px'
});

export default ColumnTextField;
