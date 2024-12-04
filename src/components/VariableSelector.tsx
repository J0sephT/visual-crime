import React from 'react';
import { Variable, variables } from '../types/variables';
import { ChevronDown } from 'lucide-react';
import * as Select from '@radix-ui/react-select';

interface VariableSelectorProps {
  selectedVariables: Variable[];
  onVariableSelect: (variable: Variable) => void;
}

export function VariableSelector({ selectedVariables, onVariableSelect }: VariableSelectorProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Select Variables (Max 2)</h2>
      <div className="space-y-4">
        {selectedVariables.length < 2 && (
          <Select.Root onValueChange={(value) => {
            const variable = variables.find(v => v.id === value);
            if (variable) onVariableSelect(variable);
          }}>
            <Select.Trigger className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Select.Value placeholder="Select a variable" />
              <Select.Icon>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="bg-white rounded-md shadow-lg border border-gray-200">
                <Select.Viewport className="p-2">
                  <Select.Group>
                    {variables
                      .filter(v => !selectedVariables.find(sv => sv.id === v.id))
                      .map((variable) => (
                        <Select.Item
                          key={variable.id}
                          value={variable.id}
                          className="relative flex items-center px-8 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                        >
                          <Select.ItemText>{variable.name}</Select.ItemText>
                        </Select.Item>
                      ))}
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        )}

        <div className="space-y-2">
          {selectedVariables.map((variable) => (
            <div
              key={variable.id}
              className="flex items-center justify-between p-2 bg-blue-50 rounded-md"
            >
              <span className="text-sm font-medium">{variable.name}</span>
              <button
                onClick={() => {
                  const newVariables = selectedVariables.filter(v => v.id !== variable.id);
                  onVariableSelect(variable);
                }}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}