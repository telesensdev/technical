import React from 'react';
import {Icon, Typography} from "@material-ui/core";

function JobsHeader() {

    return (
        <div>
            <div className="flex items-center">
                <Icon className="mr-15">assignment</Icon>
                <Typography component="h1" noWrap variant="h5">Jobs</Typography>
            </div>
        </div>
    );
}

export default JobsHeader;