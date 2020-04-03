import React from 'react';
import DashboardMainState from "./MainState/DashboardMainState";
import DashboardActiveTasks from "./DashboardActiveTasks";
import DashboardOrders from "./DashboardOrders";
import {Grid, Paper} from "@material-ui/core";

function DashboardContent() {

    return (
        <div className="dashboard__content w-full">
            <Grid
                container
                spacing={3}
                alignItems="stretch"
            >

                <Grid item xs={12}>
                    {/* Main state from top */}
                    <DashboardMainState/>
                </Grid>

                <Grid item xs={6}>
                    <Paper className="p-15 h-full">
                        <DashboardOrders />
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className="p-15 h-full">
                        {/* Chart for Active Tasks */}
                        <DashboardActiveTasks/>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

export default DashboardContent;