import React, {useState} from 'react';
import {Avatar, Button, Icon, ListItemIcon, ListItemText, Popover, MenuItem, Typography} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../auth/store/actions';
import {Link} from 'react-router-dom';

function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(({ auth }) => auth.user);

    const [userMenu, setUserMenu] = useState(null);

    const userMenuClick = event => {
        setUserMenu(event.currentTarget);
    };

    const userMenuClose = () => {
        setUserMenu(null);
    };

    return (
        <React.Fragment>

            {
                !user.role || user.role.length === 0 ? (
                    <Link to="/login">
                        <div className="flex items-center">
                            <Icon className="text-white mr-10" variant="action">lock</Icon>
                            <Typography component="span" className="text-trans-none text-white">
                                Login
                            </Typography>
                        </div>
                    </Link>
                ) : (
                    <>
                        <Button className="h-64" onClick={userMenuClick}>

                            {
                                user.data.username && (
                                    <Avatar className="mr-10">
                                        {user.data.username[0]}
                                    </Avatar>
                                )
                            }

                            <div className="flex flex-col mr-10 items-start text-white">
                                <Typography component="span" className="text-trans-none flex">
                                    {user.data.name}
                                </Typography>
                                {/*<Typography className="text-11 text-capitalize">*/}
                                {/*    /!*{user.role.toString().toLowerCase()}*!/*/}
                                {/*    Admin*/}
                                {/*</Typography>*/}
                            </div>

                            <Icon className="text-16 text-white" variant="action">keyboard_arrow_down</Icon>
                        </Button>

                        <Popover
                            open={Boolean(userMenu)}
                            anchorEl={userMenu}
                            onClose={userMenuClose}
                            anchorOrigin={{
                                vertical  : 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical  : 'top',
                                horizontal: 'right'
                            }}
                            classes={{
                                paper: "py-8"
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    dispatch(authActions.logoutUser());
                                    userMenuClose();
                                }}
                            >
                                <ListItemIcon className="min-w-40">
                                    <Icon>exit_to_app</Icon>
                                </ListItemIcon>
                                <ListItemText className="pl-0" primary="Logout"/>
                            </MenuItem>
                        </Popover>
                    </>
                )
            }

        </React.Fragment>
    );
}

export default UserMenu;
