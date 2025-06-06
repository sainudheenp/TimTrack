import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { PieChart, Pie, Sector, Cell } from 'recharts';

import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import formatTime from '../../utils/formatTime';
import barGen from '../../utils/barGen'



// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];




const StackChart = ({ ChartData }) => {
  const barData = barGen(ChartData.data.BarChart)
  const pieData = ChartData.data.PieChart

  // console.log('data stat bar', barData)

  // console.log("Bar gen", barData)



  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      b: 2400,
      a: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const dataPie = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "red", "green"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  }
  return (
    <div className="h-auto mb-10 ">

      <div className='h-70   md:h-100 flex flex-col md:flex-row '>


        <div className='w-full   md:w-[75%] h-[100%]'>
          <ResponsiveContainer >
            <span className="text-xl font-semibold text-center text-gray-800 ">Last 7 Days's Breakdown</span>
            <BarChart

              data={barData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="date" />

              <YAxis
                axisLine={true}  
                tickLine={false}  
                tick={false}     
              />          
                  {/* <Tooltip /> */}
              <Tooltip labelFormatter={(label) => `Activity: ${label}`} formatter={(value) => `${formatTime(value)} hrs`} />

              <Legend  />
              {Object.keys(barData[0] || {})
                .filter(key => key !== 'date')
                .map((project, index) => (
                  <Bar
                    key={project}
                    dataKey={project}
                    stackId="a"
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
            </BarChart>
          </ResponsiveContainer>

        </div>
        <div className='w-full md:w-[25%] h-[100%]'>
          <ResponsiveContainer >
            {/* <span className='text-center items-center'>Todays Activities</span> */}
            <span className="text-xl font-semibold text-center text-gray-800 mb-4">Today's Activity Breakdown</span>

            <PieChart >
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="actDuration"
                nameKey="_id"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Tooltip labelFormatter={(label) => `Activity: ${label}`} formatter={(value) => `${formatTime(value)} hrs`} />

              {/* <Tooltip  /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default StackChart;