import axios from 'axios';

export const CLEAR = '[ORDER ITEM DRAWER APP] CLEAR';
export const TASK_DRAWER_DATA = '[ORDER ITEM DRAWER APP] TASK DRAWER DATA';
export const TASK_DRAWER_OPEN = '[ORDER ITEM DRAWER APP] TASK DRAWER OPEN';
export const TASK_DRAWER_LOAD = '[ORDER ITEM DRAWER APP] TASK DRAWER LOAD';

export function getTaskDrawer(id) {

    return (dispatch) => {

        dispatch(taskDrawerLoad(true));

        axios.get(`/task/${id}`)
            .then((response) => {
                dispatch({
                    type: TASK_DRAWER_DATA,
                    payload: response.data
                });
                dispatch(taskDrawerLoad(false));
            })
            .catch(() => {
                dispatch(taskDrawerLoad(false));
            })
    }
}

export function taskDrawerOpen(isOpen) {

    return (dispatch) =>
        dispatch({
            type: TASK_DRAWER_OPEN,
            payload: isOpen,
        })
}

export function taskDrawerLoad(isLoad) {

    return (dispatch) =>
        dispatch({
            type: TASK_DRAWER_LOAD,
            payload: isLoad,
        })
}