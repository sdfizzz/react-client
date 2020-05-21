import React from 'react';
import { Link } from 'react-router-dom';

const baseUri = url => new URL(url, 'http://localhost:8080/');

export const urls = {
    main: baseUri('/'),
    login: baseUri('/login'),
    registration: baseUri('/registration'),
    content: baseUri('/content')
};

export const createLink = url => React.forwardRef((props, ref) => <Link to={url} {...props} ref={ref} />);
