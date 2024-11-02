import React from 'react';
import { ClipboardList, Loader2 } from 'lucide-react';
import { useTestingContext } from '../context/TestingContext';
import { Button } from './ui/Button';

export const TestCasesPanel = () => {
  const { testCases, loading, fetchTestCases, toggleTestCase } = useTestingContext();

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <ClipboardList className="w-5 h-5" />
        JIRA Test Cases
      </h2>
      
      <Button
        onClick={fetchTestCases}
        disabled={loading}
        className="w-full mb-4"
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        Get JIRA TestCases
      </Button>

      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {testCases.map((testCase) => (
          <div
            key={testCase.id}
            className={`p-3 rounded-lg border transition-colors cursor-pointer ${
              testCase.selected
                ? 'bg-blue-500/10 border-blue-500/50'
                : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
            }`}
            onClick={() => toggleTestCase(testCase.id)}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={testCase.selected}
                onChange={() => toggleTestCase(testCase.id)}
                className="rounded border-slate-500"
              />
              <span>{testCase.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};