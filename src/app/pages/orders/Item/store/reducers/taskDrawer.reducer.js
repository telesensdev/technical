import * as Actions from '../actions';

const initialState = {
    drawer: {
        open: false,
        load: false,
        data: null
    },
};

const taskDrawerReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.TASK_DRAWER_DATA: {
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    data: action.payload
                },
            };
        }
        case Actions.TASK_DRAWER_OPEN: {
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    open: action.payload
                },
            };
        }
        case Actions.TASK_DRAWER_LOAD: {
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    load: action.payload
                },
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

export default taskDrawerReducer;
