import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './Select.less';

export default function MatrialSelect(props) {
    const [ value, setValue ] = useState('');
    const { options, onChange } = props;

    const handleChange = (e) => {
        const { value } = e.target;

        setValue(value);
        console.log(value)
        // onChange(value)
    }

    return (
        <div className={styles.MaterialSelect}>
            <FormControl>
                <InputLabel>Select case</InputLabel>
                <Select
                    value={value}
                    onChange={handleChange}
                >
                    {options.map(option => (
                        <MenuItem
                            key={option.id}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
