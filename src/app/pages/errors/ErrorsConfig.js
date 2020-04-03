import React from "react";
import authRoles from "../../auth/authRoles";

export const ErrorsConfig = {
    auth: authRoles.groups.user,
    routes: [
        {
            path: '/404',
            component: React.lazy(() => import('./Error404')),
        }
    ]
};