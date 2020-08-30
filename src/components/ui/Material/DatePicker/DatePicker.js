import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

import styles from './DatePicker.less';

export default function DatePicker(props) {
    const { label, id, value, onChange } = props;
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const minDate = new Date('2019-01-01');

    const handleChangeDate = (value) => {
      if (!value || !onChange) return;

      const date = new Date(value);
      const nextDate = new Date();

      nextDate.setTime(nextDate.getTime() + 1000 * 60 * 60);
 
      
      if (isNaN(date)) {
        setIsError(true);
        setErrorMessage('Invalid date')
        return;
      }
      if (date <= minDate) {
          setIsError(true);
          setErrorMessage('Date should not be before minimal date')
          return;
      }
      if (date > nextDate) {
            setIsError(true);
            setErrorMessage('Date should not be after maximal date');
          return;
      }

      setIsError(false);
      setErrorMessage('');
      onChange(id, date.toISOString());
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
                invalidLabel='22222'
                value={value}
                error={isError}
                minDate={new Date('2019/01/01')}
                maxDateMessage=''
                onChange={handleChangeDate}
                disableFuture
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
        <div className={styles.errorField}>
            {errorMessage}
        </div>
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
