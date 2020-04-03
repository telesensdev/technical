import React from 'react';
import { Typography } from "@material-ui/core";

function HomeHeader() {

    return (
        <div className="flex items-center justify-center flex-col w-full h-200">
            <Typography color="inherit" className="text-40 font-light">
                WELCOME TO TECHLIST
            </Typography>
        </div>
    );
}

export default HomeHeader;