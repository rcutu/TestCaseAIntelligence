import React, { useState } from 'react';
import { GitBranch, Loader2 } from 'lucide-react';
import { useTestingContext } from '../context/TestingContext';
import { Button } from './ui/Button';

export const CommitsPanel = () => {
  const { commits, loading, fetchCommits } = useTestingContext();
  const [commitCount, setCommitCount] = useState('5');

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <GitBranch className="w-5 h-5" />
        Latest Commits
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={commitCount}
          onChange={(e) => setCommitCount(e.target.value)}
          className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="1"
          max="50"
        />
        <Button
          onClick={() => fetchCommits(parseInt(commitCount))}
          disabled={loading}
          className="flex-1"
        >
          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          Get Latest Commits
        </Button>
      </div>

      <div className="space-y-2 max-h-[600px] overflow-y-auto">
        {commits.map((commit) => (
          <div
            key={commit.id}
            className="p-3 rounded-lg bg-slate-700/50 border border-slate-600"
          >
            <div className="font-medium text-blue-400">{commit.hash}</div>
            <div className="text-sm text-slate-300">{commit.message}</div>
            <div className="text-xs text-slate-400 mt-1">
              {commit.author} • {commit.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};