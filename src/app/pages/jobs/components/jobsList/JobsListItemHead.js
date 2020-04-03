import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListItemText} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    listItemHead: {
        display: 'flex',
        alignItems: 'center'
    },
    listItemText: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingRight: 10,
        margin: 0
    },
}));

function JobsListItemHead({ jobId, taskId, orderId }) {
    const classes = useStyles();

    return (
        <div className={classes.listItemHead}>
            <ListItemText
                primary={`${orderId}-Order / ${taskId}-Task / ${jobId}-Job`}
                className={classes.listItemText}
            />
        </div>
    );
}

export default JobsListItemHead;