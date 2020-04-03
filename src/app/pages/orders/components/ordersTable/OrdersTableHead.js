import React from 'react';
import {
    TableHead,
    TableSortLabel,
    TableCell,
    TableRow,
    Icon
} from '@material-ui/core';

const rows = [
    {
        id: 'id',
        align: 'left',
        disablePadding: false,
        label: 'ID',
        sort: true
    },
    {
        id: 'number',
        align: 'left',
        disablePadding: false,
        label: 'Номер',
        sort: true
    },
    {
        id: 'date_doc',
        align: 'left',
        disablePadding: false,
        label: 'Дата',
        sort: true
    },
    {
        id: 'status',
        align: 'left',
        disablePadding: false,
        label: 'Статус',
        sort: true
    },
    {
        id: 'created_at',
        align: 'left',
        disablePadding: false,
        label: 'Создан',
        sort: true
    },
    {
        id: 'modified_at',
        align: 'left',
        disablePadding: false,
        label: 'Изменен',
        sort: true
    },
    {
        id: 'setting',
        align: 'left',
        disablePadding: false,
        label: '',
        icon: 'settings',
        sort: false
    },
];

function OrdersTableHead(props) {
    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow className="h-64">
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                        >
                            {
                                row.icon && (
                                    <Icon fontSize="small" style={{ lineHeight: 'unset' }}>{row.icon}</Icon>
                                )
                            }
                            {row.sort && (
                                <TableSortLabel
                                    active={props.order.id === row.id}
                                    direction={props.order.direction}
                                    onClick={createSortHandler(row.id)}
                                >
                                    {row.label}
                                </TableSortLabel>
                            )}
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}

export default OrdersTableHead;
