import React from 'react';
import {Icon, Typography} from "@material-ui/core";
import { Link } from 'react-router-dom';
import ItemStatusControl from './ItemStatusControl';

function ItemHeader({ id, status }) {

    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col items-start mr-a">
                <Typography
                    className="flex-inline items-center mb-5 text-15"
                    component={Link}
                    role="button"
                    to="/orders"
                    color="inherit"
                >
                    <Icon className="mr-5 text-15">arrow_back</Icon>
                    Заявки
                </Typography>
                <div className="flex items-center">
                    <Icon className="mr-15">list_alt</Icon>
                    <Typography component="h1" noWrap variant="h5">
                        Заявка {id}
                    </Typography>
                </div>
            </div>
            <ItemStatusControl
                status={status}
            />
        </div>
    );
}

export default ItemHeader;