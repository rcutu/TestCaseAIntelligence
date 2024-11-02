import React from 'react';
import { Layout } from './components/Layout';
import { TestCasesPanel } from './components/TestCasesPanel';
import { CommitsPanel } from './components/CommitsPanel';
import { AIFilterPanel } from './components/AIFilterPanel';
import { TestingProvider } from './context/TestingContext';

function App() {
  return (
    <TestingProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <Layout>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <TestCasesPanel />
            <CommitsPanel />
            <AIFilterPanel />
          </div>
        </Layout>
      </div>
    </TestingProvider>
  );
}

export default App;