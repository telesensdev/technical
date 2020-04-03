import React from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import useForm from '../../../@theme/useForm';
import { makeStyles } from '@material-ui/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import * as Actions from '../../auth/store/actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color: theme.palette.primary.contrastText
    },
    card: {
        maxWidth: '400px',
        width: '100%'
    },
}));

function LoginPage() {

    const classes = useStyles();
    const dispatch = useDispatch();

    const error = useSelector(({ auth }) => auth.login.error);

    const {form, handleChange} = useForm({
        username: '',
        password: '',
    });

    function isFormValid() {
        return (
            form.username.length > 0 &&
            form.password.length > 0
        );
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        dispatch(Actions.submitLogin(form));
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")}>

            <div className="flex flex-col items-center justify-center w-full">

                <Card className={classes.card}>

                    <CardContent className="flex flex-col items-center justify-center p-32">

                        <Typography variant="h5" color="textSecondary" className="text-center">TECHLIST</Typography>
                        <Typography variant="body1" className="mb-16 mt-16 text-center">Login to your account</Typography>

                        <form
                            name="loginForm"
                            noValidate
                            className="flex flex-col justify-center w-full"
                            onSubmit={handleSubmit}
                        >

                            <TextField
                                className="mb-16"
                                label="Username"
                                error={Boolean(error)}
                                autoFocus
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            <TextField
                                className="mb-16"
                                error={Boolean(error)}
                                label="Password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            {/*{*/}
                            {/*    Boolean(error) && (*/}
                            {/*        <Typography variant="body2" className="text-red-600 text-center">*/}
                            {/*            Username and/or password are incorrect*/}
                            {/*        </Typography>*/}
                            {/*    )*/}
                            {/*}*/}

                            <Button
                                variant="contained"
                                color="primary"
                                className="w-full mx-auto mt-16"
                                aria-label="LOG IN"
                                disabled={ !isFormValid() }
                                type="submit"
                            >
                                LOGIN
                            </Button>

                        </form>

                    </CardContent>
                </Card>

                <div className="text-11 text-white mt-10">
                    v{ process.env.REACT_APP_VERSION }
                </div>

            </div>
        </div>
    );
}

export default LoginPage;
