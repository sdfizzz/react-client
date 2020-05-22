import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrls } from '../constants/apiConstants.js';

function GreetingPanel(props) {
    const [greetings, setGreetings] = useState([]);

    useEffect(() => {
        axios.post(apiUrls.greetings.list.href).then(res => setGreetings(state => res.data));
    }, []);

    return (
        <div>
            Content:
            {greetings.map(s => (
                <div>{s.message}</div>
            ))}
        </div>
    );
}

export default GreetingPanel;
