import {combineReducers} from 'redux';
import navbar from './navbar.reducer';
import message from './message.reducer';
import dialog from './dialog.reducer';
import routes from './routes.reducer';

const themeReducers = combineReducers({
    navbar,
    message,
    dialog,
    routes
});

export default themeReducers;
