import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CHART_FILL_BY_CASE } from '../../../constants/chartFill';
import { CASE_OPTIONS } from '../../../constants/caseOptions';
import { formatDate } from '../../../utils/date';
import { getCountry, getDateFrom, getCase } from '../../../selectors/filters';
import { getLiveCountryList } from '../../../selectors/live';
import { changeFilterDate, changeFilterCase, changeFilterCountry } from '../../../actions/filters';
import { fetchLive } from '../../../actions/live';
import { getCountryOptions } from '../../../utils/countries';

import Card from '../../ui/Card';
import DatePicker from '../../ui/Material/DatePicker';
import Select from '../../ui/Material/Select';
import AreaChart from '../../ui/Charts';

import styles from './LiveStatsPage.less';

export default function LiveStatsPage() {
    const dispatch = useDispatch();
    const countryValue = useSelector(getCountry);
    const dateFromValue = useSelector(getDateFrom);
    const caseValue = useSelector(getCase);
    const chartData = useSelector(getLiveCountryList(caseValue));
    const coutryOptions = getCountryOptions();

    useEffect(() => {
        dispatch(fetchLive({ country: countryValue, dateFrom: dateFromValue}));
    }, [])

    const handleChangeDate = (id, value) => {
        dispatch(changeFilterDate({ id, value }));
        dispatch(fetchLive({ country: countryValue, dateFrom: value}));
    };

    const handleChangeCase = value => dispatch(changeFilterCase(value));
    const handleChangeCountry = value => {
        dispatch(changeFilterCountry(value));
        dispatch(fetchLive({ country: value, dateFrom: dateFromValue}));
    };

    const renderFilters = () => (
        <div className={styles.filterWrapper}>
            <div className={styles.cardFilter}>
                <Card title='By country'>
                    <Select
                        options={coutryOptions}
                        value={countryValue}
                        label='Select country'
                        onChange={handleChangeCountry}
                    />
                </Card>
            </div>
            <div className={styles.cardFilter}>
                <Card title='By date from'>
                    <DatePicker
                        label='Date from'
                        id='dateFrom'
                        value={dateFromValue}
                        onChange={handleChangeDate}
                    />
                </Card>
            </div>
            <div className={styles.cardFilter}>
                <Card title='By case'>
                    <Select
                        options={CASE_OPTIONS}
                        value={caseValue}
                        label='Select case'
                        onChange={handleChangeCase}
                    />
                </Card>
            </div>
        </div>
    );

    const renderChart = () => {
        const fill = CHART_FILL_BY_CASE[caseValue];
        const from = formatDate(dateFromValue);
        const country = (countryValue[0].toUpperCase() || countryValue[0]) + countryValue.slice(1)

        return (
            <div className={styles.chartWrapper}>
                <div className={styles.cardFilter}>
                    <Card 
                        className={styles.card}
                        title={`Statistic by ${caseValue} in ${country} from ${from}`}>
                        <AreaChart
                            xDataKey='date'
                            areaDataKey={caseValue}
                            data={chartData}
                            fill={fill}
                            strokeFill={fill}
                        />
                    </Card>
                </div>
            </div>
        )
    };

    return (
        <div className={styles.LiveStatsPage}>
            <div className={styles.header}>
                Live By Country And Status After Date
            </div>
            <div className={styles.content}>
                {renderFilters()}
                {renderChart()}
            </div>
        </div>
    )
}
