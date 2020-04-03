import axios from 'axios';
import * as GeneralActions from "../../../../store/actions";

export const GET_JOBS_LIST = '[JOBS APP] GET JOBS LIST';
export const GET_JOBS_ITEM = '[JOBS APP] GET JOBS ITEM';
export const SET_JOB_FILTER = '[JOBS APP] SET JOB FILTER';
export const CLEAR = '[JOBS APP] CLEAR';

export function getJobsList() {

    return (dispatch, getState) => {
        const { statuses } = getState().jobsApp.jobs.filter;

        let data = {};

        if (statuses.length) {
            data = {
                ...data,
                statuses
            }
        }

        axios.post('/job-search', data).then((response) => {
            dispatch({
                type: GET_JOBS_LIST,
                payload: response.data,
            });
        });
    }
}
export function getJobItem(id) {

    return (dispatch) => {
        axios.get(`/job/${id}`).then((response) => {
            dispatch({
                type: GET_JOBS_ITEM,
                payload: response.data,
            });
        });
    }
}

export function setJobFilter(filter) {

    return async (dispatch) => {
        await dispatch({
            type: SET_JOB_FILTER,
            payload: filter,
        })
    }
}

export function clear() {

    return (dispatch) => dispatch({ type: CLEAR });
}

export function changeStatus({ status, comment }) {

    return (dispatch, getState) => {
        const { id } = getState().jobsApp.jobs.item;

        let body = { job_id: id, status };

        if (comment) body['comment'] = comment;

        axios.post('/action/job_status', body)
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Job status changed',
                    variant: 'success'
                }));
                dispatch(getJobsList());
                dispatch(getJobItem(id));
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
    }
}