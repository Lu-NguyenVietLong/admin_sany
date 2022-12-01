import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Áo thun Form tiêu chuẩn',
    quantity: 10,
  },
  {
    name: 'Áo thun Form rộng',
    quantity: 6,

  },
  {
    name: 'Áo thun 3 lỗ',
    quantity: 5,

  },
  {
    name: 'Áo thun cổ trụ',
    quantity: 10,

  },
  {
    name: 'Áo thun Sweater',
    quantity: 3,

  },
  {
    name: 'Áo khoác thiết kế',
    quantity: 16,

  },
  {
    name: 'Áo khoác đơn giản',
    quantity: 9,

  },
];

const BarCharts = () => {

    return (
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="quantity" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
    )
}

export default BarCharts
