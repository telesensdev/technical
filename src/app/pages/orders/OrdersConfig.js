import React from "react";
import {authRoles} from "../../auth";

export const OrdersConfig = {
    auth: [authRoles.allRoles.T_REQUEST_VIEW, authRoles.allRoles.T_REQUEST_EDIT],
    settings: {
        navbar: {
            display: true
        },
        toolbar: {
            display: true
        },
    },
    routes: [
        {
            path: '/order/:ID',
            component: React.lazy(() => import('./Item/ItemApp')),
        },
        {
            path: '/orders',
            component: React.lazy(() => import('./OrdersApp')),
        }
    ]
};