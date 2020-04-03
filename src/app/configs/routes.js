import React from 'react';
import {Redirect} from 'react-router-dom';
import Utils from '../../@theme/utils';
import authRoles from "../auth/authRoles";

// Pages Config
import {ErrorsConfig} from '../pages/errors/ErrorsConfig';
import {LoginPageConfig} from '../pages/login/LoginPageConfig';
import {JobsConfig} from '../pages/jobs/JobsConfig';
import {OrdersConfig} from '../pages/orders/OrdersConfig';
import {DashboardConfig} from '../pages/dashboard/DashboardConfig';
import {HomeConfig} from "../pages/home/HomeConfig";

const routeConfigs = [
    LoginPageConfig,
    JobsConfig,
    OrdersConfig,
    ErrorsConfig,
    DashboardConfig,
    HomeConfig,
];

const routes = [
    ...Utils.generateRoutesFromConfigs(routeConfigs),
    {
        auth: authRoles.groups.user,
        component: () => <Redirect to="/404"/>
    },
    {
        auth: authRoles.groups.onlyGuest,
        component: () => <Redirect to="/login"/>
    },
];

export default routes;