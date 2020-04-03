import * as Actions from '../actions';

const initialState = {
    main_state: null,
    active_tasks: null,
    orders_in_proc: [],
};

const dashboardReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_MAIN_STATE: {
            return {
                ...state,
                main_state: action.payload
            };
        }
        case Actions.GET_ACTIVE_TASKS: {
            return {
                ...state,
                active_tasks: action.payload
            };
        }
        case Actions.GET_ORDERS_IN_PROC: {
            return {
                ...state,
                orders_in_proc: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default dashboardReducer;
