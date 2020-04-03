import React from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";

function DashboardMainStateItem(props) {

    return (
        <Grid item xs={props.xs}>
            <Paper className="p-15 hover-bg transition h-full">
                <Typography className="text-gray-600">
                    {props.title}
                </Typography>
                <Typography className="text-56 font-light line-height-n">
                    {props.data && props.data[props.data_item]}
                </Typography>
            </Paper>
        </Grid>
    );
}

export default DashboardMainStateItem;