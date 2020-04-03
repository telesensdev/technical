import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import HighlightedText from "../../../../components/HighlightedText";
import { date_transform, task_operation, task_status } from "../../../../../constans";
import { withStyles } from '@material-ui/core/styles';
import DrawerTasksInfo from "./Drawer/DrawerTasksInfo";
import * as Actions from '../store/actions';
import get from 'lodash/get';

const tasks_info = [
    {
        status: 'R',
        title: 'Tasks Ready',
        id: 1,
    },
    {
        status: ['W', 'I'],
        title: 'Tasks In Progress',
        id: 2,
    },
    {
        status: 'P',
        title: 'Tasks Ready for execution',
        id: 3,
    },
    {
        status: 'E',
        title: 'Tasks Error',
        id: 4,
    },
    {
        status: 'K',
        title: 'Tasks Ready for Cancel',
        id: 5,
    },
];

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

const ItemTasksInfo = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.tasks);

    const [open, setOpen] = useState(false);
    const [task_id, setTask_id] = useState('');
    const [comment, setComment] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
        setComment('');
    };

    const handleClose = () => {
        setOpen(false);
        setComment('');
    };

    const action = () => {
        dispatch(Actions.TaskCancel({ task_id, comment }));
    };

    return (
        <Grid item xs={ 12 }>
            <Grid container spacing={ 3 }>
                {
                    tasks_info.map((item) => {
                        const tasks_for_status = tasks.filter(({ status }) => item.status.includes(status));

                        if (!tasks_for_status.length) {
                            return null;
                        }

                        return (
                            <div className="w-full" key={ item.id }>
                                <Grid item xs={ 12 } className="mt-25">
                                    <div className="cardTitleBlock mb-15">
                                        <Typography variant="body1" className="font-normal cardTitle">
                                            <i
                                                className="statusIcon statusIcon--large mr-10"
                                                style={ { backgroundColor: get(task_status, `${ [item.status[0]] }.color`) } }
                                            />
                                            { item.title } ({ tasks_for_status.length })
                                        </Typography>
                                    </div>

                                    <TableContainer>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell style={ { width: 100, border: 'none' } }>ID</TableCell>
                                                    <TableCell
                                                        style={ { width: 150, border: 'none' } }>Операция</TableCell>
                                                    <TableCell style={ { width: 150, border: 'none' } }>Тип
                                                        ресурса</TableCell>
                                                    <TableCell
                                                        style={ { width: 150, border: 'none' } }>Период</TableCell>
                                                    <TableCell
                                                        style={ { width: 150, border: 'none' } }>Ресурс</TableCell>
                                                    <TableCell
                                                        style={ { width: 200, border: 'none' } }>Провайдер</TableCell>
                                                    <TableCell style={ { border: 'none', width: 'auto' } }/>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    tasks_for_status.map((task) => (
                                                        <StyledTableRow hover key={ task.id }>
                                                            <TableCell component="th" style={ { border: 'none' } }>
                                                                { task.id }
                                                            </TableCell>
                                                            <TableCell component="th" style={ { border: 'none' } }>
                                                                <HighlightedText
                                                                    text={ task_operation[task.task_type].name }
                                                                    bg={ task_operation[task.task_type].color }
                                                                />
                                                            </TableCell>
                                                            <TableCell component="th" style={ { border: 'none' } }>
                                                                { task.resource_type }
                                                            </TableCell>
                                                            <TableCell component="th" style={ { border: 'none' } }>
                                                                { date_transform(task.active_from) || '-' }
                                                            </TableCell>
                                                            <TableCell component="th" style={ { border: 'none' } }>
                                                                { task.value }
                                                            </TableCell>
                                                            <TableCell component="th" style={ { border: 'none' } }>
                                                                { task.provider_name }
                                                            </TableCell>
                                                            <TableCell
                                                                component="th"
                                                                align="right"
                                                                style={ { border: 'none', width: 'auto' } }
                                                            >
                                                                {
                                                                    item.status === 'E' && (
                                                                        <Button
                                                                            size="small"
                                                                            color="secondary"
                                                                            onClick={ () => {
                                                                                handleClickOpen();
                                                                                setTask_id(task.id);
                                                                            } }
                                                                        >
                                                                            Отменить
                                                                        </Button>
                                                                    )
                                                                }
                                                                <Button
                                                                    size="small"
                                                                    color="secondary"
                                                                    onClick={ () => {
                                                                        dispatch(Actions.getTaskDrawer(task.id));
                                                                        dispatch(Actions.taskDrawerOpen(true));
                                                                    } }
                                                                >
                                                                    Инфо
                                                                </Button>
                                                            </TableCell>
                                                        </StyledTableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

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
                                            Статус "Отменен"
                                        </DialogTitle>
                                        <DialogContent>
                                            <TextField
                                                label="Комментарий"
                                                type="text"
                                                name="comment"
                                                multiline
                                                rows="4"
                                                value={ comment }
                                                onChange={ ({ target }) => {
                                                    setComment(target.value);
                                                } }
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button
                                                onClick={ handleClose }
                                            >
                                                Закрыть
                                            </Button>
                                            <Button
                                                onClick={ () => {
                                                    handleClose();
                                                    action();
                                                } }
                                            >
                                                ОК
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                    {/* Drawer Task */ }
                                    <DrawerTasksInfo/>

                                </Grid>
                            </div>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
};

export default ItemTasksInfo;