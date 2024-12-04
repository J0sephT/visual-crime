import { useState } from 'react';
import { Variable } from './types/variables';
import { VariableSelector } from './components/VariableSelector';
import { ChartPanel } from './components/ChartPanel';
import { TimelineSlider } from './components/TimelineSlider';
import { ChartRecommendation } from './components/ChartRecommendation';

function App() {
  const [selectedVariables, setSelectedVariables] = useState<Variable[]>([]);
  const [selectedDateRange, setSelectedDateRange] = useState<[Date, Date]>([
    new Date('2015-01-01'),
    new Date('2015-12-31'),
  ]);
  const [selectedChartType, setSelectedChartType] = useState<string>('');

  const handleVariableSelect = (variable: Variable) => {
    setSelectedVariables(prev => {
      const isSelected = prev.find(v => v.id === variable.id);
      if (isSelected) {
        return prev.filter(v => v.id !== variable.id);
      }
      if (prev.length >= 2) return prev;
      return [...prev, variable];
    });
  };

  const handleChartSelect = (chartType: string) => {
    setSelectedChartType(chartType);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Data Visualization Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <VariableSelector
              selectedVariables={selectedVariables}
              onVariableSelect={handleVariableSelect}
            />
            <ChartRecommendation variables={selectedVariables} onChartSelect={handleChartSelect} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="h-[500px]">
              <ChartPanel variables={selectedVariables} selectedChartType={selectedChartType} />
            </div>
            <TimelineSlider value={selectedDateRange} onChange={setSelectedDateRange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
