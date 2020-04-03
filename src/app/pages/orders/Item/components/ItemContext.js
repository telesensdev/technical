import React from 'react'

const ItemContext = React.createContext({
    useActions: false,
    switchInfo: false,
});

export const ItemContextProvider = ItemContext.Provider;
export const ItemContextConsumer = ItemContext.Consumer;

export default ItemContext;