import React from 'react';
import {Button, ButtonGroup} from "@material-ui/core";
import { order_status } from "../../../../../constans";
import * as Actions from '../store/actions';
import {useDispatch} from "react-redux";

function ItemStatusControl({ status }) {
    const dispatch = useDispatch();

    return (
        <>
            {
                order_status[status].actions && (
                    <ButtonGroup color="inherit" size="small">
                        {
                            order_status[status].actions.map(({ name, to }) => (
                                <Button
                                    onClick={() => dispatch(Actions.changeStatus(to))}
                                    key={to}
                                >
                                    {name}
                                </Button>
                            ))
                        }
                    </ButtonGroup>
                )
            }
        </>
    );
}

export default ItemStatusControl;