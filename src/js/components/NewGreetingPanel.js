import React, { useEffect, useState } from 'react';
import ContentContainer from './common/ContentContainer';
import ColumnTextField from './common/ColumnTextField';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants';

const NewGreetingPanel = props => {
    const [template, setTemplate] = useState('');

    const handleSubmitClick = e => {
        e.preventDefault();
        if (template.length > 0) {
            const payload = {
                template: template
            };
            axios
                .post(apiUrls.greetings.add.href, payload)
                .then(function(response) {
                    if (props.onListChanged) props.onListChanged();
                    setTemplate('');
                    console.log(response);
                })
                .catch(console.log);
        }
    };

    return (
        <ContentContainer row={true}>
            <TextField placeholder="template" onChange={e => setTemplate(e.target.value)} value={template} />
            <Button onClick={handleSubmitClick}>Add</Button>
        </ContentContainer>
    );
};

export default NewGreetingPanel;
