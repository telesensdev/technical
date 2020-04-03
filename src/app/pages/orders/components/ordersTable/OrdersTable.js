import React, { useEffect, useState } from 'react';
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow
} from '@material-ui/core';
import OrdersTableHead from "./OrdersTableHead";
import orderBy from 'lodash/orderBy';
import { date_transform, order_status } from "../../../../../constans";
import HighlightedText from "../../../../components/HighlightedText";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

function OrdersTable(props) {

    const [data, setData] = useState(props.list);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [order, setOrder] = useState({
        direction: 'asc',
        id: null
    });

    useEffect(() => {
        setData(props.list)
    }, [props.list]);

    function handleRequestSort(event, property) {
        const id = property;
        let direction = 'desc';

        if (order.id === property && order.direction === 'desc') {
            direction = 'asc';
        }

        setOrder({ direction, id });
    }

    function handleChangePage(event, page) {
        setPage(page);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(event.target.value);
    }

    return (
        <div className="order__content">
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <OrdersTableHead
                        order={order}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
                    />
                    <TableBody>
                        {
                            orderBy(data, [
                                (o) => o[order.id]
                            ], [order.direction])
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, i) => (
                                    <TableRow hover key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            { row.number || '-' }
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {date_transform(row.date_doc)}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <HighlightedText
                                                text={ get(order_status, `[${ row.status }].name`) }
                                                bg={ get(order_status, `[${ row.status }].color`) }
                                            />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {date_transform(row.created_at)}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            { date_transform(row.modified_at) }
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Link to={ `/order/${ row.id }` }>
                                                <IconButton size="small">
                                                    <EditIcon fontSize="inherit"/>
                                                </IconButton>
                                            </Link>
                                            <IconButton
                                                size="small"
                                                className="ml-5"
                                                disabled={ !(row.status === 'P' || row.status === 'F') }
                                                onClick={ () => props.handleClickOpen(row.id) }
                                            >
                                                <DeleteIcon fontSize="inherit"/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page'
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page'
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
}

export default OrdersTable;