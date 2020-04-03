import React from 'react';
import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/AddBox";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import useForm from "../../../../../../@theme/useForm";
import AutocompleteCustom from "../../../../../components/AutocompleteCustom";

const useStyles = makeStyles({
    formControl: {
        width: 300,
    },
});

function ProviderAdd({ providers }) {

    const classes = useStyles();
    const dispatch = useDispatch();

    const {form, resetForm, setInForm} = useForm({
        provider_id: null
    });

    const addProvider = () => {
        dispatch(Actions.createProvider(form.provider_id));
        resetForm();
    };

    return (
        <Grid item xs={12}>
            <Paper className="p-15 flex justify-between items-center">
                <div className={classes.formControl}>
                    <AutocompleteCustom
                        value={form.provider_id}
                        label="Провайдер"
                        name="provider_id"
                        small
                        setInForm={setInForm}
                        data={
                            providers.map(({ id, name }) => ({
                                name,
                                value: id
                            }))
                        }
                    />
                </div>
                <Button
                    color="primary"
                    variant="outlined"
                    startIcon={<AddIcon/>}
                    onClick={addProvider}
                    disabled={!form.provider_id}
                >
                    Добавить
                </Button>
            </Paper>
        </Grid>
    );
}

export default ProviderAdd;