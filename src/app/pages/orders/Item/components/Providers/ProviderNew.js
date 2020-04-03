import React from 'react';
import Provider from "./Provider";
import find from 'lodash/find';

function ProviderNew({ providers, newProvider, order_id }) {

    const item = find(providers, ['id', newProvider.provider_id]);

    return (
        <>
            {
                (newProvider.active && (newProvider.order_id == order_id) && item) && (
                    <Provider
                        item={{
                            provider_name: item.name,
                        }}
                        isNewProvider
                    />
                )
            }
        </>
    );
}

export default ProviderNew;