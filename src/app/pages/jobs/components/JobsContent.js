import React from 'react';
import JobsList from "./jobsList/JobsList";
import JobsInfo from "./jobsInfo/JobsInfo";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as Actions from "../store/actions";
import { job_filter_status } from "../../../../constans";

function JobsContent() {

    const dispatch = useDispatch();

    const active_filter_id = useSelector(({ jobsApp }) => jobsApp.jobs.filter.id);
    const list = useSelector(({ jobsApp }) => jobsApp.jobs.list);
    const item = useSelector(({ jobsApp }) => jobsApp.jobs.item);

    return (
        <div className="job_container">
            <div className="w-full flex items-center mb-25">
                <Typography variant="body1" className="line-height-n mr-15">
                    Представление:
                </Typography>
                {
                    job_filter_status.map(({ name, statuses, start, id }) => {

                        let active = active_filter_id === id;

                        if (!active_filter_id && start) active = true;

                        return (
                            <Button
                                color={ (active ? 'primary' : 'secondary') }
                                variant="outlined"
                                size="small"
                                onClick={ async () => {
                                    if (active) return;

                                    await dispatch(Actions.setJobFilter({ statuses, id }));
                                    dispatch(Actions.getJobsList());
                                } }
                                className="ml-5"
                                key={ id }
                            >
                                { name }
                            </Button>
                        )
                    })
                }
            </div>
            <div className="jobs">
                <div className="jobs__list">
                    <JobsList
                        list={ list }
                        item={ item }
                    />
                </div>
                <div className="jobs__info">
                    {
                        Boolean(list.length) && (
                            <JobsInfo
                                item={ item }
                                first_job_id={ list[0].id }
                                active_filter_id={ active_filter_id }
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default JobsContent;