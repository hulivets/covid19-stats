import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


import { CASE_OPTIONS } from '../../../constants/caseOptions';
import { CHART_FILL_BY_CASE } from '../../../constants/chartFill';
import { changeFilterDate, changeFilterCase } from '../../../actions/filters';
import { fetchWorld } from '../../../actions/world';
import { getDateFrom, getDateTo, getCase } from '../../../selectors/filters';
import { getWorldList } from '../../../selectors/world';

import Card from '../../ui/Card';
import DatePicker from '../../ui/Material/DatePicker';
import Select from '../../ui/Material/Select';
import Charts from '../../ui/Charts';

import styles from './GlobalStatsPage.less';

export default function GlobalStatsPage() {
    const dispatch = useDispatch();
    const dateFromValue = useSelector(getDateFrom);
    const dateToValue = useSelector(getDateTo);
    const caseValue = useSelector(getCase);
    const chartData = useSelector(getWorldList(caseValue));
    console.log(chartData)

    useEffect(() => {
        dispatch(fetchWorld({ from: dateFromValue, to: dateToValue }));
    }, []);

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
                <Card title='Date from'>
                    <DatePicker
                        label='Date from'
                        id='dateFrom'
                        value={dateFromValue}
                        onChange={handleChangeDate}
                    />
                </Card>
            </div>
            <div className={styles.cardFilter}>
                <Card title='Date to'>
                    <DatePicker
                        label='Date from'
                        id='dateTo'
                        value={dateToValue}
                        onChange={handleChangeDate}
                    />
                </Card>
            </div>
            <div className={styles.cardFilter}>
                <Card title='Select'>
                    <Select
                        options={CASE_OPTIONS}
                        value={caseValue}
                        onChange={handleChangeSelect}
                    />
                </Card>
            </div>
        </div>
    );

    const renderChart = () => {
        const fill = CHART_FILL_BY_CASE[caseValue];

        return (
            <div className={styles.chartWrapper}>
                <div className={styles.cardFilter}>
                    <Card title='Stats'>
                        <Charts
                            xDataKey='name'
                            AreaDataKey={caseValue}
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
