import React, {useContext, useState} from 'react';
import {renderRoutes, matchRoutes} from 'react-router-config'
import AppContext from '../../AppContext';
import {withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import LayoutToolBar from "./components/LayoutToolBar";
import LayoutNavBar from "./components/LayoutNavBar";
import get from 'lodash/get';
import Message from "../Message";
import Loading from "../Loading";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%'
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarNotif: {
        marginLeft: 'auto'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        overflow: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
        height: '100vh',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    isNotActive: {
        opacity: 0,
        pointerEvents: 'none'
    }
}));

function Layout(props) {

    const classes = useStyles();

    const appContext = useContext(AppContext);
    const {routes} = appContext;

    const matched = matchRoutes(routes, props.location.pathname)[0];
    const settings = get(matched, 'route.settings');
    const navbar = get(settings, 'navbar.display');
    const toolbar = get(settings, 'toolbar.display');

    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (navbar || toolbar) {
        return (
            <div className={classes.root}>
                <CssBaseline />

                {
                    toolbar && (
                        <LayoutToolBar
                            handleDrawerOpen={handleDrawerOpen}
                            open={open}
                            classes={classes}
                        />
                    )
                }

                {
                    navbar && (
                        <LayoutNavBar
                            handleDrawerClose={handleDrawerClose}
                            open={open}
                            classes={classes}
                        />
                    )
                }
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <React.Suspense fallback={<Loading />}>
                        {renderRoutes(routes)}
                    </React.Suspense>
                    {props.children}
                </main>
                <Message />
            </div>
        );
    }

    return (
        <>
            <React.Suspense fallback={<Loading />}>
                {renderRoutes(routes)}
            </React.Suspense>
            {props.children}
            <Message />
        </>
    );
}

export default withRouter(Layout);
