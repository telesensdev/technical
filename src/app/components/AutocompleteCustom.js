/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import find from 'lodash/find';
import get from 'lodash/get';

export default function AutocompleteCustom({ value, label, name, data, setInForm, small, handleCustomChange }) {
    const [valueCom, setValueCom] = React.useState(null);

    useEffect(() => {
        setValueCom(find(data, ['value', value]) || null)
    }, [value, data]);

    return (
        <Autocomplete
            id="combo-box-demo"
            options={ data }
            getOptionLabel={option => option.name}
            className="w-full"
            value={valueCom}
            name={name}
            onChange={(event, newValue) => {
                if (handleCustomChange) {
                    return handleCustomChange(get(newValue, 'value'), name)
                }

                setInForm(name, get(newValue, 'value'));
            }}
            renderInput={params => {

                return (
                    <TextField
                        {...params}
                        label={label}
                        variant="outlined"
                        size={small && 'small'}
                        fullWidth
                    />
                )
            }}
        />
    );
}