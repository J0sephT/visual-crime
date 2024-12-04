import React from 'react';
import { Variable } from '../types/variables';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart as RechartsBarChart, Scatter, ScatterChart, Pie, PieChart as RechartsPieChart, Cell, ComposedChart } from 'recharts';

interface ChartPanelProps {
  variables: Variable[];
  selectedChartType: string;
}

export function ChartPanel({ variables, selectedChartType }: ChartPanelProps) {
  // Placeholder data for demonstration
  const data = [
    { name: 'Page A', value: 400 },
    { name: 'Page B', value: 300 },
    { name: 'Page C', value: 600 },
    { name: 'Page D', value: 200 },
    { name: 'Page E', value: 500 },
  ];

  if (variables.length === 0) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-500">Select variables to visualize data</p>
      </div>
    );
  }

  return (
    <div className="h-[500px] w-[80%] bg-white rounded-lg shadow-md p-4 mx-auto">
      <h2 className="text-lg font-semibold mb-4">Data Visualization</h2>
      <div className="h-[calc(100%-2rem)]">
        <ResponsiveContainer width="100%" height="100%">
          {selectedChartType === 'Line Chart' && (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          )}
          {selectedChartType === 'Bar Chart' && (
            <RechartsBarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </RechartsBarChart>
          )}
          {selectedChartType === 'Scatter Plot' && (
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Scatter data={data} fill="#8884d8" />
            </ScatterChart>
          )}
          {selectedChartType === 'Pie Chart' && (
            <RechartsPieChart>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff8042'][index % 4]} />
                ))}
              </Pie>
            </RechartsPieChart>
          )}
          {selectedChartType === 'Stacked Bar Chart' && (
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" stackId="a" fill="#8884d8" />
              <Bar dataKey="value" stackId="a" fill="#82ca9d" />
            </ComposedChart>
          )}
          {selectedChartType === 'Histogram' && (
            <RechartsBarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </RechartsBarChart>
          )}
          {selectedChartType === 'Box Plot' && (
            // Simulación básica del Box Plot usando un ComposedChart
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
              <Line type="monotone" dataKey="value" stroke="#ff7300" />
            </ComposedChart>
          )}
          {selectedChartType === 'Density Plot' && (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
