import React from 'react';
import { Divider, Drawer, Icon, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from '../../store/actions';
import Loading from "../../../../../components/Loading";
import DrawerTasksContent from "./DrawerTasksContent";

const DrawerTasksInfo = () => {
    const dispatch = useDispatch();
    const { open, data, load } = useSelector(({ ordersItemApp }) => ordersItemApp.taskDrawer.drawer);

    const toggleDrawer = (isOpen) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        dispatch(Actions.taskDrawerOpen(isOpen));
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
        >
            <div
                role="presentation"
                // onClick={toggleDrawer(false)}
                // onKeyDown={toggleDrawer(false)}
                style={{
                    width: 400
                }}
            >
                <div className="p-15 relative">
                    <div className="mb-15 sticky bg-white top-15">
                        <IconButton
                            className="mb-15"
                            aria-label="delete"
                            onClick={toggleDrawer(false)}
                        >
                            <Icon>keyboard_arrow_right</Icon>
                        </IconButton>
                        <Divider />
                    </div>
                    {
                        load
                            ? <Loading/>
                            : <DrawerTasksContent data={data}/>
                    }
                </div>
            </div>
        </Drawer>
    )
};

export default DrawerTasksInfo;