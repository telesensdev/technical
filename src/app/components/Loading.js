import React from 'react';
import {Typography, LinearProgress} from '@material-ui/core';

function Loading() {
    return (
        <div className="flex w-full flex-col items-center justify-center h-full">
            <Typography className="text-20 mb-16" color="textSecondary">Loading...</Typography>
            <LinearProgress className="w-200" color="primary"/>
        </div>
    );
}

export default Loading;
