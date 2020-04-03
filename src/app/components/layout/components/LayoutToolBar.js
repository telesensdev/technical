import React from "react";
import clsx from "clsx";
import {
    AppBar,
    IconButton,
    Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import UserMenu from "../../UserMenu";

function LayoutToolBar(props) {

    return(
        <AppBar position="absolute" className={clsx(props.classes.appBar, props.open && props.classes.appBarShift)}>
            <Toolbar className={props.classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(props.classes.menuButton, props.open && props.classes.isNotActive, 'transition')}
                >
                    <MenuIcon />
                </IconButton>
                <div className="ml-a">
                    <UserMenu />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default LayoutToolBar;