import React, { useEffect } from 'react';
import JobsHeader from './components/JobsHeader';
import JobsContent from './components/JobsContent';
import PageLayout from "../../components/pageLayout/PageLayout";
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../store/withReducer";

import './styles/jobs.scss';

function JobsApp() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getJobsList());

        return () => {
            dispatch(Actions.clear());
        }
    }, [dispatch]);

    return (
        <PageLayout
            header={<JobsHeader />}
            content={<JobsContent />}
            innerScroll
            title="Jobs"
        />
    );
}

export default withReducer('jobsApp', reducer)(JobsApp);