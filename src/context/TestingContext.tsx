import React, { createContext, useContext, useState } from 'react';

interface TestCase {
  id: string;
  name: string;
  selected: boolean;
}

interface Commit {
  id: string;
  hash: string;
  message: string;
  author: string;
  date: string;
}

interface AIResult {
  id: string;
  testCase: string;
  reason: string;
  confidence: number;
}

interface TestingContextType {
  testCases: TestCase[];
  commits: Commit[];
  aiResults: AIResult[];
  loading: boolean;
  fetchTestCases: () => Promise<void>;
  toggleTestCase: (id: string) => void;
  fetchCommits: (count: number) => Promise<void>;
  filterTestCases: () => Promise<void>;
}

const TestingContext = createContext<TestingContextType | undefined>(undefined);

export const TestingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [aiResults, setAiResults] = useState<AIResult[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTestCases = async () => {
    setLoading(true);
    try {
      // Replace with actual API call
      const response = await fetch('/api/testcases');
      const data = await response.json();
      setTestCases(data);
    } catch (error) {
      console.error('Failed to fetch test cases:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTestCase = (id: string) => {
    setTestCases(prev =>
      prev.map(tc =>
        tc.id === id ? { ...tc, selected: !tc.selected } : tc
      )
    );
  };

  const fetchCommits = async (count: number) => {
    setLoading(true);
    try {
      // Replace with actual API call
      const response = await fetch(`/api/commits?count=${count}`);
      const data = await response.json();
      setCommits(data);
    } catch (error) {
      console.error('Failed to fetch commits:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterTestCases = async () => {
    setLoading(true);
    try {
      // Replace with actual API call
      const selectedTestCases = testCases.filter(tc => tc.selected);
      const response = await fetch('/api/filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testCases: selectedTestCases,
          commits,
        }),
      });
      const data = await response.json();
      setAiResults(data);
    } catch (error) {
      console.error('Failed to filter test cases:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TestingContext.Provider
      value={{
        testCases,
        commits,
        aiResults,
        loading,
        fetchTestCases,
        toggleTestCase,
        fetchCommits,
        filterTestCases,
      }}
    >
      {children}
    </TestingContext.Provider>
  );
};

export const useTestingContext = () => {
  const context = useContext(TestingContext);
  if (context === undefined) {
    throw new Error('useTestingContext must be used within a TestingProvider');
  }
  return context;
};