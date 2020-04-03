import React from 'react';
import { Typography } from "@material-ui/core";

function JobsInfoTitle({ jobId, taskId, orderId }) {

    return (
        <Typography variant="h5">
            {`${orderId}-Order / ${taskId}-Task / ${jobId}-Job`}
        </Typography>
    )
}

export default JobsInfoTitle;