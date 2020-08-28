import React from 'react';

import { CASE_OPTIONS } from '../../../constants/caseOptions';

import Card from '../../ui/Card';
import DatePicker from '../../ui/Material/DatePicker';
import Select from '../../ui/Material/Select';
import Charts from '../../ui/Charts';

import styles from './GlobalStatsPage.less';

export default function GlobalStatsPage() {

    const handleChangeDate = (value) => {
        console.log(value)
    }

    const handleChangeSelect = (value) => {
        console.log(value)
    }

    const renderFilters = () => (
        <div className={styles.filterWrapper}>
            <div className={styles.cardFilter}>
                <Card title='Date from'>
                    <DatePicker
                        label='Date from'
                        id='date-picker-from'
                        onChange={handleChangeDate}
                    />
                </Card>
            </div>
            <div className={styles.cardFilter}>
                <Card title='Date to'>
                    <DatePicker
                        label='Date from'
                        id='date-picker-to'
                        onChange={handleChangeDate}
                    />
                </Card>
            </div>
            <div className={styles.cardFilter}>
                <Card title='Select'>
                    <Select
                        options={CASE_OPTIONS}
                        onChange={handleChangeSelect}
                    />
                </Card>
            </div>
        </div>
    );

    const renderChart = () => (
        <div className={styles.chartWrapper}>
            <div className={styles.cardFilter}>
                <Card title='Stats'>
                    <Charts />
                </Card>
            </div>
        </div>
    );

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
