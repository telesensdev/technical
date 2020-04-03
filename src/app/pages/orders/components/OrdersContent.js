import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import OrdersTable from "./ordersTable/OrdersTable";
import * as Actions from '../store/actions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

function OrdersContent() {
    const dispatch = useDispatch();

    const list = useSelector(({ ordersApp }) => ordersApp.orders.list);

    const [open, setOpen] = useState(false);
    const [deleteOrderId, setDeleteOrderId] = useState(false);

    const handleClickOpen = (id) => {
        setDeleteOrderId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDeleteOrderId(false);
    };

    const action = () => dispatch(Actions.orderDel(deleteOrderId));

    return (
        <div className="order__content">
            {
                Boolean(list.length) && (
                    <OrdersTable
                        list={ list }
                        handleClickOpen={ handleClickOpen }
                    />
                )
            }
            <Dialog
                open={ open }
                TransitionComponent={ Transition }
                keepMounted
                onClose={ handleClose }
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Удаление заявки - { deleteOrderId }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Вы действительно хотите удалить?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={ handleClose }
                        color="inherit"
                    >
                        Отменить
                    </Button>
                    <Button
                        onClick={ () => {
                            handleClose();
                            action();
                        } }
                        style={ {
                            color: '#e53935',
                        } }
                    >
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default OrdersContent;