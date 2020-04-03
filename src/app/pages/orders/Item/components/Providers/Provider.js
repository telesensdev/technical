import React, { useContext } from 'react';
import { Button, Divider, Grid, Paper, Typography, } from "@material-ui/core";
import Resources from "../Resources/Resources";
import DeleteIcon from "@material-ui/icons/Delete";
import * as Actions from "../../store/actions";
import { useDispatch } from "react-redux";
import ItemContext from "../ItemContext";

function Provider({ item, isNewProvider }) {

    const dispatch = useDispatch();

    const { useActions } = useContext(ItemContext);

    const deleteProvider = () => {
        isNewProvider
            ? dispatch(Actions.deleteProvider())
            : console.log('del')
    };

    return (
        <Grid item xs={ 12 }>
            <Paper className="p-15">
                <div className="flex justify-between items-center pb-15">
                    <Typography variant="body1" className="font-normal">
                        { item.provider_name || 'Провайдер' }
                    </Typography>
                    <Button
                        style={ {
                            color: '#e53935',
                            borderColor: '#e53935',
                            opacity: useActions ? 1 : 0.6
                        } }
                        variant="outlined"
                        startIcon={ <DeleteIcon/> }
                        onClick={ deleteProvider }
                        disabled={ !useActions }
                    >
                        Удалить
                    </Button>
                </div>
                <Divider/>

                <Resources provider={ item } isNewProvider={ isNewProvider }/>
            </Paper>
        </Grid>
    );
}

export default Provider;