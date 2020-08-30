import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector} from 'react-redux';


import { CASE_OPTIONS } from '../../../constants/caseOptions';
import { CHART_FILL_BY_CASE } from '../../../constants/chartFill';
import { formatDate } from '../../../utils/date';
import { changeFilterDate, changeFilterCase } from '../../../actions/filters';
import { fetchWorld } from '../../../actions/world';
import { getDateFrom, getDateTo, getCase } from '../../../selectors/filters';
import { getWorldList } from '../../../selectors/world';

import Card from '../../ui/Card';
import DatePicker from '../../ui/Material/DatePicker';
import Select from '../../ui/Material/Select';
import AreaChart from '../../ui/Charts';

import styles from './GlobalStatsPage.less';

export default function GlobalStatsPage() {
    const dispatch = useDispatch();
    const dateFromValue = useSelector(getDateFrom);
    const dateToValue = useSelector(getDateTo);
    const caseValue = useSelector(getCase);
    const chartData = useSelector(getWorldList(caseValue));

    useEffect(() => {
        dispatch(fetchWorld({ from: dateFromValue, to: dateToValue }));
    }, [dateFromValue]);

    const handleChangeDate = (id, value) => {
        dispatch(changeFilterDate({ id, value }));

        switch (id) {
            case 'dateFrom':
                return dispatch(fetchWorld({ from: value, to: dateToValue }));
            case 'dateTo':
                return dispatch(fetchWorld({ from: dateFromValue, to: value }));
            default:
                break;
        }
    }
    const handleChangeSelect = value => dispatch(changeFilterCase(value))

    const renderFilters = () => (
        <div className={styles.filterWrapper}>
            <div className={styles.cardFilter}>
                <Card title='By date from'>
                    <DatePicker
                        label='Select date from'
                        id='dateFrom'
                        value={dateFromValue}
                        onChange={handleChangeDate}
                    />
                </Card>
            </div>
            <div className={styles.cardFilter}>
                <Card title='By date to'>
                    <DatePicker
                        label='Select date to'
                        id='dateTo'
                        value={dateToValue}
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
                        onChange={handleChangeSelect}
                    />
                </Card>
            </div>
        </div>
    );

    const renderChart = () => {
        const fill = CHART_FILL_BY_CASE[caseValue];
        const from = formatDate(dateFromValue);
        const to = formatDate(dateToValue);

        return (
            <div className={styles.chartWrapper}>
                <div className={styles.cardFilter}>
                    <Card
                        className={styles.card}
                        title={`Statistic by ${caseValue} from ${from} to ${to}`}>
                        <AreaChart
                            xDataKey=' '
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
        <div className={styles.GlobalStatsPage}>
            <div className={styles.header}>
                World WIP
            </div>
            <div className={styles.content}>
                {renderFilters()}
                {renderChart()}
            </div>
        </div>
    )
}
