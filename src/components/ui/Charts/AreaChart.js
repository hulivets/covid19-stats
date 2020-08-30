import React from 'react';
import PropTypes from 'prop-types';

import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import styles from './AreaChart.less';

export default function Chart(props) {
    const { data, xDataKey, areaDataKey, fill, strokeFill } = props;
    const renderLineChart = () => (
        <AreaChart width={900} height={350} data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey={xDataKey} />
          <YAxis interval='preserveStartEnd' allowDataOverflow />
          <Tooltip />
          <Area
            type='natural'
            dataKey={areaDataKey}
            stroke={strokeFill}
            fill={fill} />
        </AreaChart>
      );

      return (
          <div className={styles.Charts}>
              {renderLineChart()}
          </div>
      )
}

Chart.propTypes = {
    data        : PropTypes.array,
    xDataKey    : PropTypes.string,
    areaDataKey : PropTypes.string, 
    fill        : PropTypes.string,
    strokeFill  : PropTypes.string
};

Chart.defaultProps = {
    data        : [],
    xDataKey    : '',
    areaDataKey : '',
    fill        : '#003f5c',
    strokeFill  : '#003f5c'
};
