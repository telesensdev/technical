import {combineReducers} from 'redux';
import theme from './theme';
import auth from '../../auth/store/reducers';
// import quickPanel from 'app/theme-layouts/shared-components/quickPanel/store/reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        theme,
        // quickPanel,
        ...asyncReducers
    });

export default createReducer;
