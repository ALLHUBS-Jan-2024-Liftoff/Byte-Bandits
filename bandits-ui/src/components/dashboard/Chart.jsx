import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, LineChart, axisClasses } from '@mui/x-charts';
import { dataset } from '../dataset/weather.ts';
import Title from './Title';

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount: amount ?? null };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00'),
// ];

const chartSetting = {
  yAxis: [
    {
      label: 'amount (mg)',
    },
  ],
  width: 900,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value}mg`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'Niacin', valueFormatter },
        { dataKey: 'paris', label: 'B12', valueFormatter },
        { dataKey: 'newYork', label: 'Potassium', valueFormatter },
        { dataKey: 'seoul', label: 'Iron', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
