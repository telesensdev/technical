import { combineReducers } from 'redux';
import orderItem from './orderItem.reducer';
import taskDrawer from './taskDrawer.reducer';

const reducer = combineReducers({
    orderItem,
    taskDrawer,
});

export default reducer;
