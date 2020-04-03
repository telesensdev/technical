import React from 'react';
import {
    Typography,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import { order_status } from "../../../../../constans";

const useStyles = makeStyles({
    barColumn: {
        position: 'relative',
    },
    barColumnIndicator: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        top: -27,
        left: '50%',
        transform: 'translateX(-50%)',
    },
});

function ItemBarColumn({columnCount, status, active_status}) {

    const classes = useStyles();

    const colorForColumn = () => {
        if (order_status[status].progress <= order_status[active_status].progress) {
            return {
                backgroundColor: order_status[active_status].color
            };
        }

        return {
            backgroundColor: '#e6e6e6'
        };
    };

    const textForColumn = () => {
        if (order_status[status]) {
            return order_status[status].name
        }

        return '';
    };

    return (
        <div style={{ width: 100 / columnCount + '%' }}>
            <div className={classes.barColumn}>
                <div
                    className={classes.barColumnIndicator}
                    style={colorForColumn()}
                />
                <Typography variant="caption">
                    {textForColumn()}
                </Typography>
            </div>
        </div>
    );
}

export default ItemBarColumn;