import React from 'react';
import { Grid, Paper, Typography, } from "@material-ui/core";
import { date_transform, order_status } from "../../../../../constans";

const ItemInfo = ({ status, number, date_doc }) => (
    <>
        <Grid item xs={ 4 }>
            <Paper className="flex items-center p-15">
                <Typography variant="body1" className="font-normal text-gray-600 mr-10">
                    Статус:
                </Typography>
                <Typography variant="body1" className="font-normal">
                    { order_status[status].name }
                    <i
                        className="statusIcon ml-10"
                        style={{backgroundColor: order_status[status].color}}
                    />
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper className="flex items-center p-15">
                <Typography variant="body1" className="font-normal text-gray-600 mr-10">
                    Номер документа:
                </Typography>
                <Typography variant="body1" className="font-normal">
                    { number || '-' }
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper className="flex items-center p-15">
                <Typography variant="body1" className="font-normal text-gray-600 mr-10">
                    Дата документа:
                </Typography>
                <Typography variant="body1" className="font-normal">
                    {date_transform(date_doc)}
                </Typography>
            </Paper>
        </Grid>
    </>
);

export default ItemInfo;