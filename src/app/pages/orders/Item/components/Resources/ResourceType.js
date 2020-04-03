import React, { useState } from 'react';
import { Button, Icon, Menu, MenuItem } from "@material-ui/core";
import history from '../../../../../../@history';
import { useSelector } from "react-redux";

function ResourceType(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const order_data = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.data);
    const new_provider_id = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.newProvider.provider_id);

    const handleClick = event => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const handleAction = (operation) => {
        history.push({
            pathname: '/task/new',
            state: {
                name: props.name,
                provider_id: props.isNewProvider ? new_provider_id : props.provider.provider_id,
                order_id: order_data.id,
                operation,
                type: props.type
            }
        });

        handleClose();
    };

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                variant="outlined"
                onClick={ handleClick }
                endIcon={ <Icon>keyboard_arrow_down</Icon> }
                className="w-full flex justify-between"
            >
                { props.name }
            </Button>
            <Menu
                anchorEl={ anchorEl }
                keepMounted
                open={ open }
                onClose={ handleClose }
            >
                <MenuItem onClick={ () => handleAction('ADD') }>
                    Подключить
                </MenuItem>
                <MenuItem onClick={ () => handleAction('DEL') }>
                    Отключить
                </MenuItem>
                <MenuItem onClick={ () => handleAction('HND') }>
                    Передать
                </MenuItem>
                <MenuItem onClick={ () => handleAction('CNG') }>
                    Изменить
                </MenuItem>
            </Menu>
        </div>
    );
}

export default ResourceType;