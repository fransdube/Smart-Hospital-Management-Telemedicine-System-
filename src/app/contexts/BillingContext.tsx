import React, { createContext, useContext, useState } from 'react';

export interface Invoice {
  id: number;
  service: string;
  amount: number;
  date: string;
  status: 'Pending' | 'Paid';
}

interface BillingContextType {
  invoices: Invoice[];
  markAsPaid: (id: number) => void;
  generateBill: (bill: Omit<Invoice, 'id'>) => void;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

export function BillingProvider({ children }: { children: React.ReactNode }) {
  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 1, service: "Consultation - Dr. Sarah Johnson", amount: 5000, date: "May 15, 2026", status: "Paid" },
    { id: 2, service: "Blood Test - Complete Panel", amount: 3500, date: "May 12, 2026", status: "Paid" },
    { id: 3, service: "X-Ray Imaging", amount: 8000, date: "May 10, 2026", status: "Pending" },
    { id: 4, service: "Medication - Pharmacy", amount: 2500, date: "May 8, 2026", status: "Paid" },
  ]);

  const markAsPaid = (id: number) => {
    setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status: 'Paid' } : inv));
  };

  const generateBill = (bill: Omit<Invoice, 'id'>) => {
    setInvoices(prev => [...prev, { ...bill, id: Math.max(0, ...prev.map(i => i.id)) + 1 }]);
  };

  return (
    <BillingContext.Provider value={{ invoices, markAsPaid, generateBill }}>
      {children}
    </BillingContext.Provider>
  );
}

export function useBilling() {
  const context = useContext(BillingContext);
  if (context === undefined) {
    throw new Error('useBilling must be used within a BillingProvider');
  }
  return context;
}
