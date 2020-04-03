import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import ItemBarColumn from "./ItemBarColumn";
import ItemProgress from './ItemProgress';

const useStyles = makeStyles({
    barCards: {
        marginTop: 12
    },
});

function ItemStatus({ status }) {

    const classes = useStyles();
    const columnCount = 5;

    return (
        <Grid item xs={ 12 }>
            <ItemProgress
                columnCount={ columnCount }
                status={ status }
            />
            <Grid container spacing={ 0 } className={ clsx(classes.barCards, "text-center") }>
                <ItemBarColumn
                    columnCount={ columnCount }
                    status={ 'F' }
                    active_status={ status }
                />
                <ItemBarColumn
                    columnCount={ columnCount }
                    status={ 'P' }
                    active_status={ status }
                />
                <ItemBarColumn
                    columnCount={ columnCount }
                    status={ 'W' }
                    active_status={ status }
                />
                <ItemBarColumn
                    columnCount={ columnCount }
                    status={ 'I' }
                    active_status={ status }
                />
                {
                    status === 'E'
                        ? (
                            <ItemBarColumn
                                columnCount={ columnCount }
                                status={ 'E' }
                                active_status={ status }
                            />
                        )
                        : (
                            <ItemBarColumn
                                columnCount={ columnCount }
                                status={ 'R' }
                                active_status={ status }
                            />
                        )
                }
            </Grid>
        </Grid>
    );
}

export default ItemStatus;