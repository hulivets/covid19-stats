import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import styles from './Charts.less';

const data = [{
    name: 'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400
}, {
    name: 'Page B',
    uv: 100,
    pv: 1400,
    amt: 3400
}, {
    name: 'Page B',
    uv: 200,
    pv: 1400,
    amt: 3400
}, {
    name: 'Page B',
    uv: 330,
    pv: 1400,
    amt: 3400
}, {
    name: 'Page B',
    uv: 20,
    pv: 1400,
    amt: 3400
}, {
    name: 'Page B',
    uv: 421,
    pv: 1400,
    amt: 3400
}];

export default function Charts(props) {
    const renderLineChart = () => (
        <AreaChart width={800} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      );

      return (
          <div className={styles.Charts}>
              {renderLineChart()}
          </div>
      )
}