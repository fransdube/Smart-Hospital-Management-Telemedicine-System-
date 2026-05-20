import { DollarSign, Download, Eye, Calendar } from "lucide-react";

export default function Billing() {
  const invoices = [
    { id: 1, service: "Consultation - Dr. Sarah Johnson", amount: 5000, date: "May 15, 2026", status: "Paid" },
    { id: 2, service: "Blood Test - Complete Panel", amount: 3500, date: "May 12, 2026", status: "Paid" },
    { id: 3, service: "X-Ray Imaging", amount: 8000, date: "May 10, 2026", status: "Pending" },
    { id: 4, service: "Medication - Pharmacy", amount: 2500, date: "May 8, 2026", status: "Paid" },
  ];

  const totalPaid = invoices.filter(inv => inv.status === "Paid").reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = invoices.filter(inv => inv.status === "Pending").reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Billing & Invoices</h1>
        <p className="text-slate-600 mt-2">Manage your healthcare bills and payments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">{invoices.length}</span>
          </div>
          <h3 className="text-slate-600 text-sm">Total Invoices</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">KES {totalPaid.toLocaleString()}</span>
          </div>
          <h3 className="text-slate-600 text-sm">Total Paid</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">KES {totalPending.toLocaleString()}</span>
          </div>
          <h3 className="text-slate-600 text-sm">Pending Payment</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Invoices</h2>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{invoice.service}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {invoice.date}
                      </span>
                      <span className="font-semibold">KES {invoice.amount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {invoice.status}
                  </span>
                  <button className="p-2 hover:bg-slate-200 rounded-lg">
                    <Eye className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-200 rounded-lg">
                    <Download className="w-5 h-5 text-slate-600" />
                  </button>
                  {invoice.status === "Pending" && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
