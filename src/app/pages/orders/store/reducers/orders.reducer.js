import * as Actions from '../actions';

const initialState = {
    list: [],
};

const ordersReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ORDERS_LIST: {
            return {
                ...state,
                list: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default ordersReducer;
