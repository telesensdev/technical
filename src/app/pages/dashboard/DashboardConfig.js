import React from "react";
import authRoles from "../../auth/authRoles";

export const DashboardConfig = {
    auth: [authRoles.allRoles.T_RESERVE_VIEW, authRoles.allRoles.T_RESERVE_EDIT],
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
            path: '/dashboard',
            component: React.lazy(() => import('./DashboardApp')),
        },
    ]
};