import axios from 'axios';
import * as GeneralActions from "../../../../../store/actions";
import { getOrder } from "./orderItem.actions";

export function TaskCancel({ task_id, comment }) {

    return (dispatch, getState) => {

        axios.post('/action/task_cancel', {
            task_id, comment
        })
            .then(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Task status changed',
                    variant: 'success'
                }));

                dispatch(getOrder(getState().ordersItemApp.orderItem.data.id));
            })
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Error',
                    variant: 'error'
                }));
            })
    }
}