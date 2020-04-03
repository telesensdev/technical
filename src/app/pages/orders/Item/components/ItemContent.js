import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Grid } from "@material-ui/core";
import ItemStatus from "./ItemStatus";
import ItemInfo from "./ItemInfo";
import Providers from "./Providers/Providers";
import ItemTasksInfo from "./ItemTasksInfo";
import { useSelector } from "react-redux";
import ItemContext from './ItemContext';

function ItemContent() {

    const {
        status,
        number,
        date_doc
    } = useSelector(({ ordersItemApp }) => ordersItemApp.orderItem.data);

    const { switchInfo } = useContext(ItemContext);

    const [activeContent, setActiveContent] = useState('general');

    return (
        <div className="w-full">
            <Grid container spacing={ 3 }>
                {/* Switcher information */ }
                {
                    switchInfo && (
                        <Grid item xs={ 12 }>
                            <ButtonGroup color="primary" size="small">
                                <Button
                                    onClick={ () => setActiveContent('general') }
                                    variant={ activeContent === 'general' ? "contained" : "outlined" }
                                >
                                    Главная информация
                                </Button>
                                <Button
                                    onClick={ () => setActiveContent('tasks') }
                                    variant={ activeContent === 'tasks' ? "contained" : "outlined" }
                                >
                                    Задания
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    )
                }

                {/* Item Status */ }
                <ItemStatus status={ status }/>

                {/* Item Info */ }
                <ItemInfo
                    status={ status }
                    number={ number }
                    date_doc={ date_doc }
                />

                {/* if order has status "W" or "I", user has permission for view tasks info */ }
                {
                    activeContent === 'general'
                        ? <Providers/>
                        : <ItemTasksInfo/>
                }

            </Grid>
        </div>
    );
}

export default ItemContent;