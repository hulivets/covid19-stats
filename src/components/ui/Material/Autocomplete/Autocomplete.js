import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import styles from './Autocomplete.less';

export default function MaterialAutocomplete(props) {
    const { id, value, label, options, onChange } = props;

    const handleChange = (e, { value }) => {
        if (!onChange) return;

        onChange(value)
    };

    return (
        <div className={styles.Autocomplete}>
            <Autocomplete
                id={id}
                options={options}
                autoComplete
                value={value}
                disableClearable
                onChange={handleChange}
                getOptionLabel={(option) => option.label}
                defaultValue={value}
                renderOption={(option) => (
                    <React.Fragment>
                        {option.label}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        variant='standard'
                        inputProps={{
                        ...params.inputProps,
                        }}
                    />
                )}
            />
        </div>
      );
}

MaterialAutocomplete.propTypes = {
    value    : PropTypes.object,
    label    : PropTypes.string,
    id       : PropTypes.string,
    options  : PropTypes.array,
    onChange : PropTypes.func
};

MaterialAutocomplete.defaultProps = {
    value    : {
        id    : null,
        label : '',
        value : ''
    },
    label    : '',
    id       : '',
    options  : [],
    onChange : undefined
};
