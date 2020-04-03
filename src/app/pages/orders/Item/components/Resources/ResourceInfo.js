import React, { useContext } from 'react';
import {
    Icon,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from '@material-ui/core';
import ResourceType from "./ResourceType";
import HighlightedText from "../../../../../components/HighlightedText";
import { date_transform, task_operation } from "../../../../../../constans";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import history from '../../../../../../@history';
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import ItemContext from '../ItemContext';

function ResourceInfo({ name, tasks, provider, isNewProvider, type }) {

    const dispatch = useDispatch();

    const { useActions } = useContext(ItemContext);

    return (
        <div className="flex my-15">
            <div className="w-130 flex-shrink-0">
                <ResourceType
                    type={ type }
                    name={ name }
                    provider={ provider }
                    isNewProvider={ isNewProvider }
                />
            </div>
            <div className="w-full ml-15">
                {
                    Boolean(tasks.length) ? (
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={ { width: 150 } }>Операция</TableCell>
                                        <TableCell style={ { width: 150 } }>Период</TableCell>
                                        <TableCell style={ { width: 150 } }>Ресурс</TableCell>
                                        <TableCell>Описание</TableCell>
                                        <TableCell style={ { width: 150 } }>
                                            <Icon fontSize="small" style={ { lineHeight: 'unset' } }>
                                                settings
                                            </Icon>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        tasks.map((task) => (
                                            <TableRow key={ task.id }>
                                                <TableCell component="th">
                                                    <HighlightedText
                                                        text={ task_operation[task.task_type].name }
                                                        bg={ task_operation[task.task_type].color }
                                                    />
                                                </TableCell>
                                                <TableCell component="th">
                                                    { date_transform(task.active_from) || '-' }
                                                </TableCell>
                                                <TableCell component="th">{ task.value }</TableCell>
                                                <TableCell component="th">{ task.comment }</TableCell>
                                                <TableCell component="th">
                                                    <Tooltip
                                                        title="Редактировать"
                                                        placement="top"
                                                    >
                                                        <span>
                                                            <IconButton
                                                                size="small"
                                                                onClick={ () => history.push(`/task/${ task.id }`) }
                                                                disabled={ !useActions }
                                                            >
                                                                <EditIcon fontSize="small"/>
                                                            </IconButton>
                                                        </span>
                                                    </Tooltip>
                                                    <Tooltip
                                                        title="Удалить"
                                                        placement="top"
                                                    >
                                                        <span>
                                                            <IconButton
                                                                size="small"
                                                                className="ml-5"
                                                                onClick={ () => dispatch(Actions.delTask(task.id)) }
                                                                disabled={ !useActions }
                                                            >
                                                                <DeleteIcon fontSize="small"/>
                                                            </IconButton>
                                                        </span>
                                                    </Tooltip>
                                                    <Tooltip
                                                        title="Копировать"
                                                        placement="top"
                                                    >
                                                        <span>
                                                            <IconButton
                                                                size="small"
                                                                className="ml-5"
                                                                onClick={ () => {
                                                                    history.push({
                                                                        pathname: '/task/copy',
                                                                        state: {
                                                                            ID: task.id
                                                                        }
                                                                    });
                                                                } }
                                                                disabled={ !useActions }
                                                            >
                                                                <FileCopyIcon fontSize="small"/>
                                                            </IconButton>
                                                        </span>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <div className="w-full border-dashed h-full"/>
                    )
                }
            </div>
        </div>
    );
}

export default ResourceInfo;