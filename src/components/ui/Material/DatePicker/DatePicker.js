import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

import styles from './DatePicker.less';

export default function DatePicker(props) {
    const { label, id, value, onChange } = props;

    const handleChangeDate = (value) => {
      if (!onChange) return;

      const valueToSet = new Date(value).toISOString();

      onChange(id, valueToSet);
    };

  return (
    <div className={styles.DatePicker}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                margin='normal'
                id={id}
                variant='inline'
                label={label}
                format="dd/MM/yyyy"
                value={value}
                onChange={handleChangeDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    </div>
  )
}

DatePicker.propTypes = {
  label    : PropTypes.string,
  id       : PropTypes.string,
  value    : PropTypes.string,
  onChange : PropTypes.func
};

DatePicker.defaultProps = {
  label    : '',
  id       : '',
  value    : '',
  onChange : undefined
};
