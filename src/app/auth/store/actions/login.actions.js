import jwtService from '../../../services/jwtService';
import {setUserData} from './user.actions';
import { showMessage } from "../../../store/actions/theme";
import * as GeneralActions from "../../../store/actions";

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({ username, password }) {
    return (dispatch) =>
        jwtService.signInWithUsernameAndPassword(username, password)
            .then((user) => {
                    dispatch(setUserData(user));
                    dispatch(showMessage({message: 'Logged in'}));

                    return dispatch({
                        type: LOGIN_SUCCESS
                    });
                }
            )
            .catch(() => {
                dispatch(GeneralActions.showMessage({
                    message: 'Username and/or password are incorrect',
                    variant: 'error'
                }));

                return dispatch({
                    type: LOGIN_ERROR,
                    payload: true
                });
            });
}