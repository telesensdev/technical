import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './errors.scss';

const Error404 = () => (
    <div className="flex items-center justify-center flex-col w-full text-center">
        <Typography variant="h1" color="inherit" className="font-medium mb-16">
            404
        </Typography>
        <Typography variant="h6" color="textSecondary" className="mb-16">
            Sorry but we could not find the page you are looking for
        </Typography>
        <Link className="font-medium text-under" to="/">Go back to Home</Link>
    </div>
);

export default Error404;