import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './Select.less';

export default function MaterialSelect(props) {
    const { options, value, label, onChange } = props;

    const handleChange = (e) => {
        if (!onChange) return;

        const { value } = e.target;

        onChange(value)
    }

    return (
        <div className={styles.MaterialSelect}>
            <FormControl className={styles.formControl}>
                <InputLabel>{label}</InputLabel>
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

MaterialSelect.propTypes = {
    label    : PropTypes.string,
    id       : PropTypes.string,
    value    : PropTypes.string,
    options  : PropTypes.array,
    onChange : PropTypes.func
};
  
MaterialSelect.defaultProps = {
    label    : '',
    id       : '',
    value    : '',
    options  : [],
    onChange : undefined
};
