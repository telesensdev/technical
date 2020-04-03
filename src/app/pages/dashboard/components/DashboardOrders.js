import React from 'react';
import {useSelector} from "react-redux";
import {Typography, List, ListItem, ListItemText, Divider} from "@material-ui/core";

function DashboardOrders() {
    const orders_in_proc = useSelector(({dashboardApp}) => dashboardApp.dashboard.orders_in_proc);

    return (
        <div className="w-full">

            <Typography className="text-gray-600 mb-16">
                Заявки в обработке
            </Typography>

            {
                Boolean(orders_in_proc.length) && (
                    <List component="nav">
                        <Divider />
                        {
                            orders_in_proc.map(({ number, date }) => (
                                <div key={number}>
                                    <ListItem className="hover-bg transition">
                                        <ListItemText primary={`Заявка #${number} (${date})`} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            ))
                        }
                    </List>
                )
            }

        </div>
    );
}

export default DashboardOrders;