import React from 'react';
import { useSelector } from "react-redux";
import ResourceInfo from "./ResourceInfo";

const resources = [
    {
        name: 'Alpha',
        type: 'ALPHA'
    },
    {
        name: 'IVR',
        type: 'IVR'
    },
    {
        name: 'SMS',
        type: 'SMS'
    },
    {
        name: 'USSD',
        type: 'USSD'
    },
    {
        name: 'Billing ID',
        type: 'BSID'
    },
];

function Resources({ provider, isNewProvider }) {

    const tasks = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.tasks);

    const taskFilter = (resource) => {
        if (isNewProvider) return [];

        return tasks.filter((item, i) => resourceTypes(resource).includes(i));
    };

    const resourceTypes = resource => provider.res_types[resource];

    return (
        <>
            {
                resources.map(({ name, type }) => (
                    <ResourceInfo
                        name={name}
                        type={type}
                        tasks={taskFilter(type)}
                        provider={provider}
                        isNewProvider={isNewProvider}
                        key={ type }
                    />
                ))
            }
        </>
    );
}

export default Resources;