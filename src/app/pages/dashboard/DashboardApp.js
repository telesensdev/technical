import React, { useEffect } from 'react';
import DashboardContent from './components/DashboardContent';
import PageLayout from "../../components/pageLayout/PageLayout";
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../store/withReducer";

import './styles/orders.scss';

function DashboardApp() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getMainState());
        dispatch(Actions.getActiveTasks());
        dispatch(Actions.getOrdersInProc());
    }, [dispatch]);

    return (
        <PageLayout
            content={<DashboardContent />}
            maxContent
            title="Dashboard"
        />
    );
}

export default withReducer('dashboardApp', reducer)(DashboardApp);