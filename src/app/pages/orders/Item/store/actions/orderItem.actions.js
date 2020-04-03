import axios from 'axios';
import history from '../../../../../../@history'
import * as GeneralActions from "../../../../../store/actions";

export const GET_ORDER = '[ORDER ITEM APP] GET ORDER';
export const GET_PROVIDERS = '[ORDER ITEM APP] GET PROVIDERS';
export const CREATE_PROVIDER = '[ORDER ITEM APP] CREATE PROVIDER';
export const DELETE_PROVIDER = '[ORDER ITEM APP] DELETE PROVIDER';
export const CLEAR = '[ORDER ITEM APP] CLEAR';
export const SET_ORDER_LOAD = '[ORDER ITEM APP] SET ORDER LOAD';
export const CLEAR_ORDER_INFO = '[ORDER ITEM APP] CLEAR_ORDER_INFO';

export function createOrder() {

  const request = axios.post('/orders', {});

  return () =>
    request.then((response) => {
      history.push(`/order/${response.data.orderId}`)
    });
}

export function getOrder(id) {

  const request = axios.get(`/orders/${id}`);
  return (dispatch) =>
    request
      .then((response) => {
        dispatch({
          type: GET_ORDER,
          payload: response.data
        });
        dispatch({ type: SET_ORDER_LOAD, payload: false });
      })
      .catch(() => {
        dispatch({ type: SET_ORDER_LOAD, payload: false });
      })
}

export function getProvidersList() {

  const request = axios.get('/dict/providers');

  return (dispatch) =>
    request.then((response) => {
      dispatch({
        type: GET_PROVIDERS,
        payload: response.data
      });
    });
}

export function createProvider(provider_id) {

  return (dispatch, getState) => {
    const order_id = getState().ordersItemApp.orderItem.data.id;
    dispatch({
      type: CREATE_PROVIDER,
      payload: {
        provider_id,
        order_id: order_id
      }
    })
  }
}

export function deleteProvider() {

  return (dispatch) => {
    dispatch({
      type: DELETE_PROVIDER,
    })
  }
}

export function clear() {

  return (dispatch) => {
    dispatch({
      type: CLEAR,
    })
  }
}

export function clearOrderInfo() {

  return (dispatch) => {
    dispatch({
      type: CLEAR_ORDER_INFO,
    })
  }
}

export function changeStatus(status) {

  return (dispatch, getData) => {
    const { id } = getData().ordersItemApp.orderItem.data;

    axios.post(`/orders/${id}/status`, {
      status: status,
      link: `${window.location.host}/jobs`
    })
      .then(() => {
        dispatch(GeneralActions.showMessage({
          message: 'Order status changed',
          variant: 'success'
        }));

        dispatch(getOrder(id));
      })
      .catch(() => {
        dispatch(GeneralActions.showMessage({
          message: 'Error',
          variant: 'error'
        }));
      })
  }
}

export function delTask(task_id) {

  const request = axios.delete(`/task/${task_id}`, {
    task_id,
  });

  return (dispatch, getData) => {
    const orderItem = getData().ordersItemApp.orderItem.data;

    request
      .then(() => {
        dispatch(GeneralActions.showMessage({
          message: 'Task deleted',
          variant: 'success'
        }));
        dispatch(getOrder(orderItem.id));
      })
      .catch(() => {
        dispatch(GeneralActions.showMessage({
          message: 'Error',
          variant: 'error'
        }));
      })
  }
}