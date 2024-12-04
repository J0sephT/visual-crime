import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

interface TimelineSliderProps {
  value: [Date, Date]; // El valor debe ser un array de dos fechas
  onChange: (dates: [Date, Date]) => void; // onChange recibe un array de dos fechas
}

export function TimelineSlider({ value, onChange }: TimelineSliderProps) {
  const [startDate, setStartDate] = useState<Date | null>(value[0]);
  const [endDate, setEndDate] = useState<Date | null>(value[1]);

  const sliderStartDate = new Date('2015-01-01');
  const sliderEndDate = new Date('2024-01-31');
  const totalDays = Math.floor((sliderEndDate.getTime() - sliderStartDate.getTime()) / (1000 * 60 * 60 * 24));

  const currentDays = [
    Math.floor((value[0].getTime() - sliderStartDate.getTime()) / (1000 * 60 * 60 * 24)),
    Math.floor((value[1].getTime() - sliderStartDate.getTime()) / (1000 * 60 * 60 * 24)),
  ];

  const handleSliderChange = ([startDays, endDays]: number[]) => {
    if (startDays != null && endDays != null) {
      const newStartDate = new Date(sliderStartDate);
      newStartDate.setDate(sliderStartDate.getDate() + startDays);
      const newEndDate = new Date(sliderStartDate);
      newEndDate.setDate(sliderStartDate.getDate() + endDays);
      setStartDate(newStartDate);
      setEndDate(newEndDate);
      onChange([newStartDate, newEndDate]);
    }
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      onChange([start, end]);
    }
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    onChange([new Date('2015-01-01'), new Date('2015-12-31')]);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Timeline</h2>
      <div className="space-y-4">
        {/* Inputs para selección rápida de fechas */}
        <div className="flex justify-between items-center space-x-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="date"
              className="border rounded px-2 py-1"
              value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
              onChange={(e) => {
                const newStartDate = e.target.value ? new Date(e.target.value) : null;
                if (newStartDate) {
                  setStartDate(newStartDate);
                  onChange([newStartDate, endDate ?? newStartDate]);
                }
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              type="date"
              className="border rounded px-2 py-1"
              value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
              onChange={(e) => {
                const newEndDate = e.target.value ? new Date(e.target.value) : null;
                if (newEndDate) {
                  setEndDate(newEndDate);
                  onChange([startDate ?? newEndDate, newEndDate]);
                }
              }}
            />
          </div>
        </div>

        {/* Slider para selección de intervalo */}
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={currentDays}
          max={totalDays}
          step={1}
          onValueChange={handleSliderChange}
        >
          <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white shadow-lg rounded-full border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Start Date"
          />
          <Slider.Thumb
            className="block w-5 h-5 bg-white shadow-lg rounded-full border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="End Date"
          />
        </Slider.Root>

        {/* Mostrar el intervalo de tiempo seleccionado */}
        <div className="text-center font-medium">
          {startDate && endDate
            ? `${format(startDate, 'MMMM d, yyyy')} - ${format(endDate, 'MMMM d, yyyy')}`
            : 'Select a date range'}
        </div>

        {/* Botón para resetear la selección */}
        <div className="flex justify-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
