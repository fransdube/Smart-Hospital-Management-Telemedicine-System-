import React, { createContext, useContext, useState, useEffect } from 'react';

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
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const fetchInvoices = async () => {
    try {
      const res = await fetch('/api/billing');
      if (res.ok) {
        const data = await res.json();
        // Map backend description -> service, and capitalize status
        const mapped = data.map((inv: any) => ({
          id: inv.id,
          service: inv.description,
          amount: inv.amount,
          date: inv.date,
          status: inv.status === 'paid' ? 'Paid' : 'Pending'
        }));
        setInvoices(mapped);
      }
    } catch (e) {
      console.error("Failed to fetch invoices", e);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const markAsPaid = async (id: number) => {
    try {
      const res = await fetch(`/api/billing/${id}/pay`, { method: 'PUT' });
      if (res.ok) {
        setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status: 'Paid' } : inv));
      }
    } catch (e) {
      console.error("Failed to mark as paid", e);
    }
  };

  const generateBill = async (bill: Omit<Invoice, 'id'>) => {
    try {
      const res = await fetch('/api/billing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: bill.amount,
          description: bill.service,
          status: bill.status.toLowerCase(),
          date: bill.date
        })
      });
      if (res.ok) {
        const data = await res.json();
        setInvoices(prev => [...prev, { ...bill, id: data.id }]);
      }
    } catch (e) {
      console.error("Failed to generate bill", e);
    }
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
