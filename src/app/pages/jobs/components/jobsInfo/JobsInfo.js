import React, { useEffect } from 'react';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { date_transform, job_operation, job_status, resource_category, time_transform } from "../../../../../constans";
import HighlightedText from "../../../../components/HighlightedText";
import JobsInfoHeader from "./JobsInfoHeader";
import get from 'lodash/get';
import * as Actions from "../../store/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
    card: {
        margin: '20px 0',
    },
    cardListItem: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center'
    },
    cardListItemKey: {
        flexShrink: 0,
        width: 160,
        color: '#707070',
        marginRight: 10
    },
    cardListItemValue: {
        width: '100%'
    },
}));

function JobsInfo({ item, first_job_id, active_filter_id }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getJobItem(first_job_id))
    }, [active_filter_id]);

    if (!item) return null;

    return (
        <div className="position-relative">
            <JobsInfoHeader
                jobId={ item.id }
                status={ item.status }
                taskId={ item.task_id }
                orderId={ item.order_id }
            />
            <Grid container spacing={ 3 }>
                <Grid item xs={ 7 }>
                    <div className={ classes.card }>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Детали задачи
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Статус:
                            </Typography>
                            <HighlightedText
                                text={ job_status[item.status].name }
                                bg={ job_status[item.status].color }
                            />
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Тип ресурса:
                            </Typography>
                            <Typography variant="body2" className={ classes.cardListItemValue }>
                                { item.resource_type }
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Операция:
                            </Typography>
                            <div className="flex items-center">
                                <div
                                    style={ {
                                        width: 15,
                                        height: 15,
                                        backgroundColor: get(job_operation, `[${ item.task_type }].color`) || '#fff',
                                        flexShrink: 0,
                                        marginRight: 10
                                    } }
                                />
                                <Typography variant="body2" className={ classes.cardListItemValue }>
                                    { get(job_operation, `[${ item.task_type }].name`) }
                                </Typography>
                            </div>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Ресурс:
                            </Typography>
                            <div className="flex items-center w-full">
                                <Typography variant="body2" className="mr-10 font-bold">
                                    { item.value }
                                </Typography>
                                <HighlightedText
                                    text={ get(resource_category, `[${ item.task.category }].name`) }
                                    bg={ get(resource_category, `[${ item.task.category }].color`) }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={ classes.card }>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Параметры
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Провайдер:
                            </Typography>
                            <Typography variant="body2" className={ classes.cardListItemValue }>
                                { item.task.provider_name || '-' }
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Клиент:
                            </Typography>
                            <Typography variant="body2" className={ classes.cardListItemValue }>
                                { item.task.client_name || '-' }
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Период с:
                            </Typography>
                            <Typography variant="body2" className={ classes.cardListItemValue }>
                                { date_transform(get(item.task, 'active_from')) || '-' }
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Период по:
                            </Typography>
                            <Typography variant="body2" className={ classes.cardListItemValue }>
                                { date_transform(get(item.task, 'active_to')) || '-' }
                            </Typography>
                        </div>
                        {
                            get(item.task, 'params.BUSINESS_TYPE') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Тип бизнеса:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.BUSINESS_TYPE') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.ABON_PAY') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Абонплата:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.ABON_PAY') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.BILLING_ID') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Billing ID:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.BILLING_ID') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.CONNECT_TYPE') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Тип подключения:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.CONNECT_TYPE') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.DISCOUNT') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Скидка:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.DISCOUNT') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.IVR_DIRECTION') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Направление трафика:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.IVR_DIRECTION') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.MIN_INCOM') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Минимальное вознаграждение:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.MIN_INCOM') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.PAY1') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Единовременный платёж:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.PAY1') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.PROVIDER_PERCENT') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Доля провайдера(%):
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.PROVIDER_PERCENT') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'tariff_name') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Тариф провайдера:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'tariff_name') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.SYSTEM_ID_ALTEL') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        System ID Altel:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.SYSTEM_ID_ALTEL') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.SYSTEM_ID_TELE2') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        System ID Tele2:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.SYSTEM_ID_TELE2') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.TARIFF_ABON') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Тариф абонента:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.TARIFF_ABON') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.TRAFFIC_TYPE') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Тип трафика:
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.TRAFFIC_TYPE') }
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            get(item.task, 'params.WITHOUT_TARIF') && (
                                <div className={ classes.cardListItem }>
                                    <Typography variant="body2" className={ classes.cardListItemKey }>
                                        Нетарифицируемый порог(сек):
                                    </Typography>
                                    <Typography variant="body2" className={ classes.cardListItemValue }>
                                        { get(item.task, 'params.WITHOUT_TARIF') }
                                    </Typography>
                                </div>
                            )
                        }
                    </div>
                    {
                        get(item, 'params.DESCRIPTION') && (
                            <div className={ classes.card }>
                                <div className="cardTitleBlock">
                                    <Typography
                                        variant="subtitle1"
                                        className="cardTitle"
                                    >
                                        Описание услуги
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="w-full mt-10">
                                    { get(item, 'params.DESCRIPTION') }
                                </Typography>
                            </div>
                        )
                    }
                    {
                        get(item, 'comment') && (
                            <div className={ classes.card }>
                                <div className="cardTitleBlock">
                                    <Typography
                                        variant="subtitle1"
                                        className="cardTitle"
                                    >
                                        Комментарий
                                    </Typography>
                                </div>
                                <Typography variant="body2" className="w-full mt-10">
                                    { get(item, 'comment') }
                                </Typography>
                            </div>
                        )
                    }
                </Grid>
                <Grid item xs={ 5 }>
                    <div className={ classes.card }>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Люди
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Автор задачи:
                            </Typography>
                            <Typography variant="body2" className={ classes.cardListItemValue }>
                                { item.creator_name }
                            </Typography>
                        </div>
                        {/*<div className={classes.cardListItem}>*/ }
                        {/*    <Typography variant="body2" className={classes.cardListItemKey}>*/ }
                        {/*        Взял в работу:*/ }
                        {/*    </Typography>*/ }
                        {/*    <Typography variant="body2" className={classes.cardListItemValue}>*/ }
                        {/*        /!*{item.inProgressPerson}*!/*/ }
                        {/*        ФИО*/ }
                        {/*    </Typography>*/ }
                        {/*</div>*/ }
                        {/*<div className={classes.cardListItem}>*/ }
                        {/*    <Typography variant="body2" className={classes.cardListItemKey}>*/ }
                        {/*        Финализировал:*/ }
                        {/*    </Typography>*/ }
                        {/*    <Typography variant="body2" className={classes.cardListItemValue}>*/ }
                        {/*        /!*{item.finalizedPerson}*!/*/ }
                        {/*        ФИО*/ }
                        {/*    </Typography>*/ }
                        {/*</div>*/ }
                    </div>
                    <div className={ classes.card }>
                        <div className="cardTitleBlock">
                            <Typography
                                variant="subtitle1"
                                className="cardTitle"
                            >
                                Даты
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Создано:
                            </Typography>
                            <Typography variant="caption" className={ classes.cardListItemValue }>
                                {
                                    item.created_at && (
                                        <>
                                            { `${ date_transform(item.created_at) } ${ time_transform(item.created_at) }` }
                                        </>
                                    )
                                }
                            </Typography>
                        </div>
                        <div className={ classes.cardListItem }>
                            <Typography variant="body2" className={ classes.cardListItemKey }>
                                Обновлено:
                            </Typography>
                            <Typography variant="caption" className={ classes.cardListItemValue }>
                                {
                                    item.modified_at && (
                                        <>
                                            { `${ date_transform(item.modified_at) } ${ time_transform(item.modified_at) }` }
                                        </>
                                    )
                                }
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default JobsInfo;