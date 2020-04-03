import React, { useEffect, useRef, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

function SelectCustom({ value, handleChange, label, name, data, empty, multiple, size = 'medium', fullWidth, style }) {
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl variant="outlined" fullWidth={ fullWidth } className="w-full" size={ size }>
            <InputLabel ref={ inputLabel }>
                { label }
            </InputLabel>
            <Select
                name={ name }
                value={ value }
                onChange={ handleChange }
                labelWidth={ labelWidth }
                multiple={ multiple }
                style={ style }
            >
                {
                    empty && (
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                    )
                }
                {
                    data.map(({ name, value }) => (
                        <MenuItem value={value} key={value}>{name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}

export default SelectCustom;
