import React, { createContext, useContext, useState } from 'react';

export interface LabTest {
  id: number;
  test: string;
  date: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  result: string;
}

interface LaboratoryContextType {
  tests: LabTest[];
  processTest: (id: number, status: 'Pending' | 'In Progress' | 'Completed', result: string) => void;
  addTest: (test: Omit<LabTest, 'id'>) => void;
}

const LaboratoryContext = createContext<LaboratoryContextType | undefined>(undefined);

export function LaboratoryProvider({ children }: { children: React.ReactNode }) {
  const [tests, setTests] = useState<LabTest[]>([
    { id: 1, test: "Complete Blood Count (CBC)", date: "May 14, 2026", status: "Completed", result: "Normal" },
    { id: 2, test: "Lipid Panel", date: "May 11, 2026", status: "Completed", result: "Abnormal" },
    { id: 3, test: "Urinalysis", date: "May 17, 2026", status: "In Progress", result: "-" },
  ]);

  const processTest = (id: number, status: 'Pending' | 'In Progress' | 'Completed', result: string) => {
    setTests(prev => prev.map(t => t.id === id ? { ...t, status, result } : t));
  };

  const addTest = (test: Omit<LabTest, 'id'>) => {
    setTests(prev => [...prev, { ...test, id: Math.max(0, ...prev.map(t => t.id)) + 1 }]);
  };

  return (
    <LaboratoryContext.Provider value={{ tests, processTest, addTest }}>
      {children}
    </LaboratoryContext.Provider>
  );
}

export function useLaboratory() {
  const context = useContext(LaboratoryContext);
  if (context === undefined) {
    throw new Error('useLaboratory must be used within a LaboratoryProvider');
  }
  return context;
}
