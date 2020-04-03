import React  from 'react';
import HomeContent from './components/HomeContent';
import HomeHeader from './components/HomeHeader';
import PageLayout from "../../components/pageLayout/PageLayout";

import './styles/home.scss';

function HomeApp() {

    return (
        <PageLayout
            header={<HomeHeader />}
            content={<HomeContent />}
            userContent
            centerContent
        />
    );
}

export default HomeApp;