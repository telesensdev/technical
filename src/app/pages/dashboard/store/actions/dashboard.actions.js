import axios from 'axios';

export const GET_MAIN_STATE = '[DASHBOARD APP] GET MAIN STATE';
export const GET_ACTIVE_TASKS = '[DASHBOARD APP] GET ACTIVE TASKS';
export const GET_ORDERS_IN_PROC = '[DASHBOARD APP] GET ORDERS IN PROC';

export function getMainState() {

    const request = axios.get('/unit/main-stats');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_MAIN_STATE,
                payload: response.data,
            })
        );
}

export function getActiveTasks() {

  const request = axios.get('/unit/tasks-by-type');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_ACTIVE_TASKS,
                payload: response.data,
            })
        );
}

export function getOrdersInProc() {

    const request = axios.get('/unit/orders-in-proc');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_ORDERS_IN_PROC,
                payload: response.data,
            })
        );
}