import React from 'react';
import { BrainCog, Loader2 } from 'lucide-react';
import { useTestingContext } from '../context/TestingContext';
import { Button } from './ui/Button';

export const AIFilterPanel = () => {
  const { aiResults, loading, filterTestCases } = useTestingContext();

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BrainCog className="w-5 h-5" />
        AI Test Filter
      </h2>

      <Button
        onClick={filterTestCases}
        disabled={loading}
        className="w-full mb-4"
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        Filter TestCases
      </Button>

      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {aiResults.map((result) => (
          <div
            key={result.id}
            className="p-3 rounded-lg bg-slate-700/50 border border-slate-600"
          >
            <div className="font-medium text-green-400">{result.testCase}</div>
            <div className="text-sm text-slate-300 mt-1">{result.reason}</div>
            <div className="text-xs text-slate-400 mt-1">
              Confidence: {result.confidence}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};