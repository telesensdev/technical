import React, {Component} from 'react';
import Utils from '../../@theme/utils';
import {matchRoutes} from 'react-router-config';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppContext from "../AppContext";

class FuseAuthorization extends Component {

    constructor(props, context) {
        super(props);
        const {routes} = context;
        this.state = {
            accessGranted: true,
            routes
        };
    }

    componentDidMount() {
        if (!this.state.accessGranted) {
            this.redirectRoute();
        }
    }

    componentDidUpdate() {
        if (!this.state.accessGranted) {
            this.redirectRoute();
        }
    }

    static getDerivedStateFromProps(props, state) {
        const {location, userRole} = props;
        const {pathname} = location;

        const matched = matchRoutes(state.routes, pathname)[0];

        return {
            accessGranted: matched ? Utils.hasPermission(matched.route.auth, userRole) : true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.accessGranted !== this.state.accessGranted;
    }

    redirectRoute() {
        const {location, userRole, history} = this.props;
        const {pathname, state} = location;
        const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';

        /*
        User is guest
        Redirect to Login Page
        */
        if (!userRole || userRole.length === 0) {
            history.push({
                pathname: '/login',
                state: {redirectUrl: pathname}
            });
        }
        /*
        User is member
        User must be on unAuthorized page or just logged in
        Redirect to dashboard or redirectUrl
        */
        else {
            history.push({
                pathname: redirectUrl
            });
        }
    }

    render() {
        // console.info('Fuse Authorization rendered', this.state.accessGranted);
        return this.state.accessGranted ? <>{this.props.children}</> : null;
    }
}

function mapStateToProps({auth}) {
    return {
        userRole: auth.user.role
    }
}

FuseAuthorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(FuseAuthorization));
