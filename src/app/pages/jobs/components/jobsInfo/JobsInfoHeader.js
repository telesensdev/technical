import React, { useState } from 'react';
import {
    Button,
    ButtonGroup,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    TextField
} from "@material-ui/core";
import JobsInfoTitle from "./JobsInfoTitle";
import { useDispatch } from "react-redux";
import * as Actions from '../../store/actions';
import { job_status } from "../../../../../constans";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

function JobsInfoHeader(props) {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
        setComment('');
    };

    const handleClose = () => {
        setOpen(false);
        setComment('');
    };

    const action = () => dispatch(Actions.changeStatus({ comment, status: 'E' }));

    return (
        <div className="jobs__header">
            <JobsInfoTitle
                jobId={ props.jobId }
                taskId={ props.taskId }
                orderId={ props.orderId }
            />
            {
                job_status[props.status].actions && (
                    <ButtonGroup color="primary" size="small" className="mt-16">
                        {
                            job_status[props.status].actions.map(({ name, to }) => (
                                <Button
                                    onClick={ () => {
                                        if (to === 'E') return handleClickOpen();

                                        dispatch(Actions.changeStatus({
                                            status: to
                                        }))
                                    } }
                                    disabled={ to === props.status }
                                    key={ to }
                                >
                                    { name }
                                </Button>
                            ))
                        }
                    </ButtonGroup>
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
                    Статус "Ошибка"
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="Комментарий"
                        type="text"
                        name="comment"
                        multiline
                        rows="4"
                        value={ comment }
                        onChange={ ({ target }) => setComment(target.value) }
                        variant="outlined"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={ handleClose }
                    >
                        Отменить
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
        </div>
    )
}

export default JobsInfoHeader;