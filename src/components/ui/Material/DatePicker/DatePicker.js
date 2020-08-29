import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

import styles from './DatePicker.less';

export default function DatePicker(props) {
    const { label, id, value, onChange } = props;

    const handleDateChange = (value) => {
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
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    </div>
  )
}
