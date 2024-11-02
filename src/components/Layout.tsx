import React from 'react';
import { BrainCog } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="container mx-auto flex items-center gap-3">
          <BrainCog className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Test Suite Intelligence
          </h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto">
        {children}
      </main>
    </div>
  );
}