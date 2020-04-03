import React from 'react';
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HighlightedText from "../../../../../components/HighlightedText";
import { date_transform, job_status, resource_category, task_operation, task_status } from "../../../../../../constans";
import get from "lodash/get";

const StyledTableCell = withStyles(() => ({
    root: {
        borderBottom: '1px dashed #eee'
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const DrawerTasksContent = ({ data }) => {

    if (!data) return null;

    return (
        <div className="w-full">
            <Typography variant="body1" className="font-bold">
                Информация о задании
            </Typography>
            <div className="mt-15">
                <div className="flex items-center justify-between">
                    <Typography variant="body2" className="text-gray-600">
                        Статус:
                    </Typography>
                    <HighlightedText
                        text={task_status[data.status].name}
                        bg={task_status[data.status].color}
                    />
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Тип ресурса:
                    </Typography>
                    <Typography variant="body2">
                        {data.resource_type}
                    </Typography>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Операция:
                    </Typography>
                    <div className="flex items-center">
                        <div
                            style={{
                                width: 15,
                                height: 15,
                                backgroundColor: task_operation[data.task_type].color,
                                flexShrink: 0,
                                marginRight: 10
                            }}
                        />
                        <Typography variant="body2" className="line-height-n">
                            {task_operation[data.task_type].name}
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Ресурс:
                    </Typography>
                    <div className="flex items-center">
                        <Typography variant="body2" className="mr-10 font-bold">
                            {data.value}
                        </Typography>
                        <HighlightedText
                            text={get(resource_category, `[${data.category}].name`)}
                            bg={get(resource_category, `[${data.category}].color`)}
                        />
                    </div>
                </div>
                <div className="cardTitleBlock mt-15">
                    <Typography
                        variant="subtitle1"
                        className="cardTitle"
                    >
                        Параметры
                    </Typography>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Провайдер:
                    </Typography>
                    <Typography variant="body2">
                        {data.provider_name || '-'}
                    </Typography>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Клиент:
                    </Typography>
                    <Typography variant="body2">
                        { data.client_name || '-' }
                    </Typography>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Период с:
                    </Typography>
                    <Typography variant="body2">
                        { date_transform(get(data, 'active_from')) || '-' }
                    </Typography>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Период по:
                    </Typography>
                    <Typography variant="body2">
                        { date_transform(get(data, 'active_to')) || '-' }
                    </Typography>
                </div>
                {
                    get(data, 'params.BUSINESS_TYPE') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Тип бизнеса:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.BUSINESS_TYPE') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.ABON_PAY') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Абонплата:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.ABON_PAY') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.BILLING_ID') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Billing ID:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.BILLING_ID') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.CONNECT_TYPE') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Тип подключения:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.CONNECT_TYPE') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.DISCOUNT') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Скидка:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.DISCOUNT') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.IVR_DIRECTION') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Направление трафика:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.IVR_DIRECTION') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.MIN_INCOM') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Минимальное вознаграждение:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.MIN_INCOM') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.PAY1') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Единовременный платёж:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.PAY1') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.PROVIDER_PERCENT') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Доля провайдера(%):
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.PROVIDER_PERCENT') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'tariff_name') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Тариф провайдера:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'tariff_name') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.SYSTEM_ID_ALTEL') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                System ID Altel:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.SYSTEM_ID_ALTEL') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.SYSTEM_ID_TELE2') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                System ID Tele2:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.SYSTEM_ID_TELE2') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.TARIFF_ABON') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Тариф абонента:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.TARIFF_ABON') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.TRAFFIC_TYPE') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Тип трафика:
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.TRAFFIC_TYPE') }
                            </Typography>
                        </div>
                    )
                }
                {
                    get(data, 'params.WITHOUT_TARIF') && (
                        <div className="flex items-center justify-between mt-10">
                            <Typography variant="body2" className="text-gray-600">
                                Нетарифицируемый порог(сек):
                            </Typography>
                            <Typography variant="body2">
                                { get(data, 'params.WITHOUT_TARIF') }
                            </Typography>
                        </div>
                    )
                }
                <div className="cardTitleBlock mt-15">
                    <Typography
                        variant="subtitle1"
                        className="cardTitle"
                    >
                        Люди
                    </Typography>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <Typography variant="body2" className="text-gray-600">
                        Автор задачи:
                    </Typography>
                    <Typography variant="body2">
                        {data.creator_name || '-'}
                    </Typography>
                </div>
            </div>
            <Typography variant="body1" className="font-bold mt-15">
                Исполнители
            </Typography>
            <div className="mt-15">
                <TableContainer>
                    <Table size="small" aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Статус</StyledTableCell>
                                <StyledTableCell>Группа</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.jobs.map(job => (
                                <TableRow key={job.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {job.id}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <HighlightedText
                                            text={ get(job_status, `${ [job.status] }.name`) }
                                            bg={ get(job_status, `${ [job.status] }.color`) }
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell>{job.role_name}</StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
};

export default DrawerTasksContent;