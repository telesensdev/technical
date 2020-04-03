import { combineReducers } from 'redux';
import jobs from './jobs.reducer';

const reducer = combineReducers({
    jobs,
});

export default reducer;
