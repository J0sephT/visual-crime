import React from 'react';
import { Variable } from '../types/variables';
import { BarChart, PieChart, Dot, LineChart as LineChartIcon, Box } from 'lucide-react';

interface ChartRecommendationProps {
  variables: Variable[];
  onChartSelect: (chartType: string) => void;
}

function getChartRecommendation(variables: Variable[]): string[] {
  if (variables.length === 0) return [];
  if (variables.length === 1) {
    const type = variables[0].type;
    if (type === 'string') return ['Bar Chart', 'Pie Chart'];
    if (type === 'integer' || type === 'float') return ['Histogram', 'Density Plot'];
    if (type === 'date' || type === 'time') return ['Time Series (Line Chart)'];
    return [];
  }

  const types = variables.map(v => v.type);
  
  if (types.includes('date') || types.includes('time')) {
    return ['Line Chart'];
  }
  
  if (types.every(t => t === 'integer' || t === 'float')) {
    return ['Scatter Plot'];
  }
  
  if (types.some(t => t === 'string') && types.some(t => t === 'integer' || t === 'float')) {
    return ['Box Plot', 'Bar Chart'];
  }
  
  if (types.every(t => t === 'string')) {
    return ['Stacked Bar Chart'];
  }

  return [];
}

export function ChartRecommendation({ variables, onChartSelect }: ChartRecommendationProps) {
  const recommendations = getChartRecommendation(variables);

  if (recommendations.length === 0) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-2">
        <BarChart className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Recommended Chart Type</h2>
      </div>
      <div className="flex space-x-4">
        {recommendations.map((chartType) => (
          <div key={chartType} className="flex flex-col items-center cursor-pointer" onClick={() => onChartSelect(chartType)}>
            <div className="h-16 w-16 mb-2 flex items-center justify-center bg-gray-100 rounded">
              {chartType === 'Bar Chart' && <BarChart />}
              {chartType === 'Pie Chart' && <PieChart />}
              {chartType === 'Scatter Plot' && <Dot />}
              {chartType === 'Line Chart' && <LineChartIcon />}
              {chartType === 'Box Plot' && <Box />}
              {chartType === 'Stacked Bar Chart' && <BarChart />}
              {chartType === 'Histogram' && <BarChart />}
              {chartType === 'Density Plot' && <LineChartIcon />}
            </div>
            <p className="text-sm text-center">{chartType}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
