import React from 'react';
import {
    Typography,
    Tooltip,
} from '@material-ui/core';
import { job_status, job_operation } from "../../../../../constans";
import get from 'lodash/get';

function JobsListItemMain({ status, resource_type, task_type }) {

    return (
        <div className="flex items-center mt-5">
            {
                Boolean(job_status[status]) && (
                    <Typography variant="caption" className="flex items-center line-height-n">
                        <i
                            className="statusIcon statusIcon--large mr-10"
                            style={{ backgroundColor: get(job_status, `${status}.color`) }}
                        />
                        {get(job_status, `${status}.name`)}
                    </Typography>
                )
            }
            <Typography variant="caption" className="ml-a mr-5 line-height-n">
                {resource_type}
            </Typography>
            {
                job_operation[task_type] && (
                    <Tooltip
                        title={`Операция: ${get(job_operation, `${task_type}.name`)}`}
                        placement="top"
                    >
                        <div
                            style={{
                                width: 15,
                                height: 15,
                                backgroundColor: get(job_operation, `${task_type}.color`),
                            }}
                        />
                        {/*<Icon*/}
                        {/*    style={{ color: job_operation[operation].color }}*/}
                        {/*    fontSize="small"*/}
                        {/*>*/}
                        {/*    {job_operation[operation].icon}*/}
                        {/*</Icon>*/}
                    </Tooltip>
                )
            }
        </div>
    );
}

export default JobsListItemMain;