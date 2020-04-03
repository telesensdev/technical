import axios from 'axios';
import * as GeneralActions from "../../../../store/actions";

export const GET_ORDERS_LIST = '[ORDERS APP] GET ORDERS LIST';

export function getOrdersList() {

    const request = axios.get('/orders');

    return (dispatch) =>
        request.then((response) => {

            dispatch({
                type: GET_ORDERS_LIST,
                payload: response.data,
            })
        });
}

export function orderDel(order_id) {

    const request = axios.post('/action/order_delete', {
        order_id,
    });

    return (dispatch) =>
        request
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Order deleted',
                    variant: 'success'
                }));

                dispatch(getOrdersList());
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
}