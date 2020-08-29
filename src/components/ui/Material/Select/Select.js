import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './Select.less';

export default function MaterialSelect(props) {
    const { options, value, onChange } = props;

    const handleChange = (e) => {
        if (!onChange) return;
        const { value } = e.target;

        onChange(value)
    }

    return (
        <div className={styles.MaterialSelect}>
            <FormControl className={styles.formControl}>
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
