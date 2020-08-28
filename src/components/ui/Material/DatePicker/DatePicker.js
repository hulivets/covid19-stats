import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

import styles from './DatePicker.less';

export default function DatePicker(props) {
    const { label, id, value, onChange } = props;
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date)
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
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    </div>
  )
}
