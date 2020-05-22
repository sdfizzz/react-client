import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants.js';
import CustomizedTable from './common/CustomizedTable';
import ContentContainer from './common/ContentContainer';
import NewGreetingPanel from './NewGreetingPanel';

const headers = ['id', 'template', 'user'];
const keys = ['id', 'message', 'fromUser'];

function GreetingPanel(props) {
    const [greetings, setGreetings] = useState([]);

    const loadData = () => {
        axios.post(apiUrls.greetings.list.href).then(res => setGreetings(res.data));
    };

    useEffect(loadData, []);

    return (
        <ContentContainer>
            <h2>Greetings</h2>
            <NewGreetingPanel onListChanged={loadData} />
            <CustomizedTable headers={headers} data={greetings} keys={keys} />
        </ContentContainer>
    );
}

export default GreetingPanel;
