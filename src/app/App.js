import React from 'react';
import AppContext from "./AppContext";
import Provider from 'react-redux/es/components/Provider';
import history from '../@history';
import {Router} from 'react-router-dom';
import routes from "./configs/routes";
import store from './store';
import Authorization from "./components/Authorization";
import Auth from "./auth/Auth";
import Layout from "./components/layout/Layout";
import {create} from 'jss';
import {StylesProvider, jssPreset, createGenerateClassName} from '@material-ui/styles';
import jssExtend from 'jss-extend';
import Theme from "../@theme/Theme";

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()],
    insertionPoint: document.getElementById('jss-insertion-point'),
});

const generateClassName = createGenerateClassName();

function App() {
    return (
        <AppContext.Provider
            value={{routes}}
        >
            <StylesProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store}>
                    <Auth>
                        <Router history={history}>
                            <Authorization>
                                <Theme>
                                    <Layout/>
                                </Theme>
                            </Authorization>
                        </Router>
                    </Auth>
                </Provider>
            </StylesProvider>
        </AppContext.Provider>
    );
}

export default App;
