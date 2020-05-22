import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants.js';
import CustomizedTable from './common/CustomizedTable';
import ContentContainer from './common/ContentContainer';

const headers = ['id', 'template', 'user'];
const keys = ['id', 'message', 'fromUser'];

function GreetingPanel(props) {
    const [greetings, setGreetings] = useState([]);

    useEffect(() => {
        axios.post(apiUrls.greetings.list.href).then(res => setGreetings(state => res.data));
    }, []);

    return (
        <ContentContainer>
            <h2>Greetings</h2>
            <CustomizedTable headers={headers} data={greetings} keys={keys} />
        </ContentContainer>
    );
}

export default GreetingPanel;
