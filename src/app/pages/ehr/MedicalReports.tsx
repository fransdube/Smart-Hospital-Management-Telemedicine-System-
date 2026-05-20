import { Upload, FileText, Download, Eye } from "lucide-react";

export default function MedicalReports() {
  const reports = [
    { id: 1, name: "Blood Test - Complete Blood Count", date: "May 15, 2026", status: "Available" },
    { id: 2, name: "X-Ray - Chest", date: "May 10, 2026", status: "Available" },
    { id: 3, name: "MRI Scan - Brain", date: "May 5, 2026", status: "Processing" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Medical Reports</h1>
        <p className="text-slate-600 mt-2">Upload and manage medical reports</p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200 mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload New Report
        </h2>
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 mb-2">Drag and drop files here or click to browse</p>
          <p className="text-sm text-slate-500">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
          <input type="file" className="hidden" multiple />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Uploaded Reports</h2>
        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{report.name}</h3>
                    <p className="text-sm text-slate-600">{report.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    report.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {report.status}
                  </span>
                  {report.status === "Available" && (
                    <>
                      <button className="p-2 hover:bg-slate-200 rounded-lg">
                        <Eye className="w-5 h-5 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-200 rounded-lg">
                        <Download className="w-5 h-5 text-slate-600" />
                      </button>
                    </>
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
