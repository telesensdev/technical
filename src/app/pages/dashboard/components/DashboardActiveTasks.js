import React from 'react';
import {useSelector} from "react-redux";
import { Doughnut } from 'react-chartjs-2';
import {Typography} from "@material-ui/core";

function DashboardActiveTasks() {
    const active_tasks = useSelector(({dashboardApp}) => dashboardApp.dashboard.active_tasks);

    const validate_value = (val) => {
        if (!val) return '';

        return val;
    };

    return (
        <div className="w-full">
            <Typography className="text-gray-600 mb-16">
                Выполнение заданий активных заявок
            </Typography>
            {
                active_tasks && (
                    <Doughnut
                        data={{
                            labels: ['Выполнено', 'В исполнении', 'Ошибка'],
                            datasets: [
                                {
                                    data: [
                                        validate_value(active_tasks.count_done),
                                        validate_value(active_tasks.count_in_prog),
                                        validate_value(active_tasks.count_error)
                                    ],
                                    backgroundColor: ['#4caf50', '#3466de', '#f44336']
                                },
                            ]
                        }}
                    />
                )
            }
        </div>
    );
}

export default DashboardActiveTasks;