import { FileText, Download, Eye, Calendar, User } from "lucide-react";

export default function MedicalRecords() {
  const records = [
    { id: 1, title: "Annual Check-up Report", date: "May 15, 2026", doctor: "Dr. Sarah Johnson", type: "Report" },
    { id: 2, title: "Blood Test Results", date: "May 10, 2026", doctor: "Lab Technician", type: "Lab Result" },
    { id: 3, title: "X-Ray Imaging", date: "May 5, 2026", doctor: "Dr. Michael Chen", type: "Imaging" },
    { id: 4, title: "Prescription Record", date: "April 28, 2026", doctor: "Dr. Emily Davis", type: "Prescription" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Medical Records</h1>
        <p className="text-slate-600 mt-2">Access your complete health history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
          <FileText className="w-8 h-8 mb-3" />
          <p className="text-blue-100 text-sm mb-1">Total Records</p>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl">
          <FileText className="w-8 h-8 mb-3" />
          <p className="text-green-100 text-sm mb-1">Lab Results</p>
          <p className="text-3xl font-bold">8</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
          <FileText className="w-8 h-8 mb-3" />
          <p className="text-purple-100 text-sm mb-1">Prescriptions</p>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
          <FileText className="w-8 h-8 mb-3" />
          <p className="text-orange-100 text-sm mb-1">Imaging</p>
          <p className="text-3xl font-bold">4</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Recent Records</h2>
          <div className="flex gap-3">
            <select className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
              <option>All Types</option>
              <option>Reports</option>
              <option>Lab Results</option>
              <option>Imaging</option>
              <option>Prescriptions</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          {records.map((record) => (
            <div key={record.id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{record.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {record.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {record.doctor}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {record.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-200 rounded-lg" title="View">
                    <Eye className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-200 rounded-lg" title="Download">
                    <Download className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
