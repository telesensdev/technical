import React, { useEffect } from 'react';
import OrdersHeader from './components/OrdersHeader';
import OrdersContent from './components/OrdersContent';
import PageLayout from "../../components/pageLayout/PageLayout";
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../store/withReducer";

import './styles/orders.scss';

function OrdersApp() {
    const dispatch = useDispatch();

    const list = useSelector(({ordersApp}) => ordersApp.orders.list);

    useEffect(() => {
        dispatch(Actions.getOrdersList());
    }, [dispatch]);

    return (
        <PageLayout
            header={<OrdersHeader />}
            content={<OrdersContent />}
            load={!list.length}
            userContent
            title="Заявки"
        />
    );
}

export default withReducer('ordersApp', reducer)(OrdersApp);