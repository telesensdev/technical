import React from 'react';
import {Grid} from "@material-ui/core";
import {useSelector} from 'react-redux';
import DashboardMainStateItem from "./DashboardMainStateItem";

function DashboardMainState() {
    const main_state = useSelector(({dashboardApp}) => dashboardApp.dashboard.main_state);

    return (
        <div className="dashboard__content w-full">
            <div className="dashboard__top">
                <Grid container spacing={3}>
                    <DashboardMainStateItem
                        xs={4}
                        title="Новые клиенты"
                        data={main_state}
                        data_item="new_clients"
                    />
                    <DashboardMainStateItem
                        xs={4}
                        title="Заявок в обработке"
                        data={main_state}
                        data_item="orders_in_prog"
                    />
                    <DashboardMainStateItem
                        xs={4}
                        title="Заданий в исполнении"
                        data={main_state}
                        data_item="tasks_in_prog"
                    />
                    <DashboardMainStateItem
                        xs={4}
                        title="Выполнено заявок"
                        data={main_state}
                        data_item="orders_compl"
                    />
                    <DashboardMainStateItem
                        xs={4}
                        title="Выполнено заданий"
                        data={main_state}
                        data_item="tasks_compl"
                    />
                    <DashboardMainStateItem
                        xs={4}
                        title="Заявок резервирования"
                        data={main_state}
                        data_item="reserved_count"
                    />
                </Grid>
            </div>
        </div>
    );
}

export default DashboardMainState;