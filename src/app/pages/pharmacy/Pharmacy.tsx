import { Pill, ShoppingCart, Clock, CheckCircle } from "lucide-react";

export default function Pharmacy() {
  const prescriptions = [
    { id: 1, medication: "Amoxicillin 500mg", doctor: "Dr. Sarah Johnson", status: "Ready for Pickup", date: "May 15, 2026" },
    { id: 2, medication: "Lisinopril 10mg", doctor: "Dr. Michael Chen", status: "Processing", date: "May 18, 2026" },
    { id: 3, medication: "Metformin 850mg", doctor: "Dr. Emily Davis", status: "Dispensed", date: "May 10, 2026" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Pharmacy</h1>
        <p className="text-slate-600 mt-2">Manage your prescriptions and medications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Pill className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">5</span>
          </div>
          <h3 className="text-slate-600 text-sm">Active Prescriptions</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">2</span>
          </div>
          <h3 className="text-slate-600 text-sm">Ready for Pickup</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">1</span>
          </div>
          <h3 className="text-slate-600 text-sm">Processing</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">My Prescriptions</h2>
        <div className="space-y-4">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Pill className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{prescription.medication}</h3>
                    <p className="text-sm text-slate-600">Prescribed by {prescription.doctor}</p>
                    <p className="text-xs text-slate-500 mt-1">{prescription.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    prescription.status === "Ready for Pickup"
                      ? "bg-green-100 text-green-700"
                      : prescription.status === "Processing"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {prescription.status}
                  </span>
                  {prescription.status === "Ready for Pickup" && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Collect Now
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
