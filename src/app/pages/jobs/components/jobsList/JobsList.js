import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Divider } from '@material-ui/core';
import JobsListItemHead from "./JobsListItemHead";
import JobsListItemMain from "./JobsListItemMain";
import { useDispatch } from "react-redux";
import * as Actions from '../../store/actions';

const useStyles = makeStyles(() => ({
    list: {
        padding: 0
    },
    listItem: {
        display: 'block',
    },
}));

function JobsList({ list, item }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <List component="nav" className={classes.list}>
            <Divider/>
            {
                Boolean(list.length) && list.map((job) => {
                    const selected = item && item.id === job.id;

                    return (
                        <li key={job.id}>

                            <ListItem
                                button
                                selected={selected}
                                onClick={() => {
                                    if (!selected) dispatch(Actions.getJobItem(job.id));
                                }}
                                className={classes.listItem}
                            >

                                <JobsListItemHead
                                    jobId={job.id}
                                    taskId={job.task_id}
                                    orderId={job.order_id}
                                />

                                <JobsListItemMain
                                    task_type={job.task_type}
                                    resource_type={job.resource_type}
                                    status={job.status}
                                />

                            </ListItem>

                            <Divider/>

                        </li>
                    )
                })
            }
        </List>
    );
}

export default JobsList;