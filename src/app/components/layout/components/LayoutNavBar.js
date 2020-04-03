import React from "react";
import { Divider, Drawer, IconButton, Typography } from "@material-ui/core";
import clsx from 'clsx';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LayoutNavigation from "./LayoutNavigation";
import history from '../../../../@history';

function LayoutNavBar(props) {

    return(
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(props.classes.drawerPaper, !props.open && props.classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={props.classes.toolbarIcon}>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={ props.classes.title }
                    onClick={ () => history.push('/') }
                >
                    technical
                </Typography>
                <div className="text-11 text-gray-600 mx-10">
                    v{ process.env.REACT_APP_VERSION }
                </div>
                <IconButton onClick={ props.handleDrawerClose }>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <LayoutNavigation open={props.open}/>
        </Drawer>
    )
}

export default LayoutNavBar;