import * as Actions from '../actions';

const initialState = {
    list: [],
    item: null,
    filter: {
        statuses: ['N', 'P'],
        id: null
    }
};

const jobsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_JOBS_LIST: {
            return {
                ...state,
                list: action.payload
            };
        }
        case Actions.GET_JOBS_ITEM: {
            return {
                ...state,
                item: action.payload
            };
        }
        case Actions.SET_JOB_FILTER: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...action.payload
                }
            };
        }
        case Actions.CLEAR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default jobsReducer;
