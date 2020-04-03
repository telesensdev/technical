import * as Actions from '../actions';

const initialState = {
    data: null,
    load: true,
    tasks: [],
    model: null,
    providers: [],
    newProvider: {
        provider_id: '',
        order_id: '',
        active: false,
    },
};

const orderItemReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ORDER: {
            return {
                ...state,
                data: action.payload.data,
                tasks: action.payload.tasks,
                model: action.payload.model,
            };
        }
        case Actions.SET_ORDER_LOAD: {
            return {
                ...state,
                load: action.payload,
            };
        }
        case Actions.GET_PROVIDERS: {
            return {
                ...state,
                providers: action.payload,
            };
        }
        case Actions.CREATE_PROVIDER: {
            return {
                ...state,
                newProvider: {
                    provider_id: action.payload.provider_id,
                    order_id: action.payload.order_id,
                    active: true
                },
            };
        }
        case Actions.DELETE_PROVIDER: {
            return {
                ...state,
                newProvider: {
                    provider_id: '',
                    order_id: '',
                    active: false
                },
            };
        }
        case Actions.CLEAR_ORDER_INFO: {
            return {
                ...initialState,
                newProvider: {
                    ...state.newProvider
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

export default orderItemReducer;
