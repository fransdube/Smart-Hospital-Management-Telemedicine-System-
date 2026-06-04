import React, { createContext, useContext, useState, useEffect } from 'react';

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
  const [tests, setTests] = useState<LabTest[]>([]);

  const fetchTests = async () => {
    try {
      const res = await fetch('/api/laboratory');
      if (res.ok) {
        const data = await res.json();
        setTests(data);
      }
    } catch (e) {
      console.error("Failed to fetch lab tests", e);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const processTest = async (id: number, status: 'Pending' | 'In Progress' | 'Completed', result: string) => {
    try {
      const res = await fetch(`/api/laboratory/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, result })
      });
      if (res.ok) {
        setTests(prev => prev.map(t => t.id === id ? { ...t, status, result } : t));
      }
    } catch (e) {
      console.error("Failed to process lab test", e);
    }
  };

  const addTest = async (test: Omit<LabTest, 'id'>) => {
    try {
      const res = await fetch('/api/laboratory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(test)
      });
      if (res.ok) {
        const data = await res.json();
        setTests(prev => [...prev, { ...test, id: data.id }]);
      }
    } catch (e) {
      console.error("Failed to add test", e);
    }
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
