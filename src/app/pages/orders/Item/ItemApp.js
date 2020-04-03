import React, { useEffect } from 'react';
import PageLayout from "../../../components/pageLayout/PageLayout";
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../../store/withReducer";
import ItemHeader from "./components/ItemHeader";
import ItemContent from "./components/ItemContent";
import { ItemContextProvider } from './components/ItemContext';
import get from 'lodash/get'

import '../styles/orders.scss';

function OrdersApp(props) {
  const dispatch = useDispatch();

  const data = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.data);
  const load = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.load);

  useEffect(() => {
    if (props.match.params.ID === 'new') {
      dispatch(Actions.createOrder());
    } else {
      dispatch(Actions.getOrder(props.match.params.ID));
    }

    return () => {
      dispatch(Actions.clearOrderInfo());
    }
  }, [dispatch, props.match.params.ID]);

  return (
    <PageLayout
      header={
        <ItemHeader
          id={get(data, 'id')}
          status={get(data, 'status')}
        />
      }
      content={
        <ItemContextProvider
          value={{
            useActions: get(data, 'status') === 'F' || get(data, 'status') === 'P',
            switchInfo: (
              get(data, 'status') === 'W'
              || get(data, 'status') === 'I'
              || get(data, 'status') === 'E'
            )
          }}
        >
          <ItemContent/>
        </ItemContextProvider>
      }
      userContent
      load={load}
      title="Заявка"
    />
  );
}

export default withReducer('ordersItemApp', reducer)(OrdersApp);