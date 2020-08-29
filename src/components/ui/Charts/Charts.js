import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import styles from './Charts.less';

export default function Charts(props) {
    const { data, xDataKey, AreaDataKey, fill, strokeFill } = props;
    const renderLineChart = () => (
        <AreaChart width={900} height={350} data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey={xDataKey} />
          <YAxis interval='preserveStartEnd' allowDataOverflow />
          <Tooltip />
          <Area
            type='natural'
            dataKey={AreaDataKey}
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