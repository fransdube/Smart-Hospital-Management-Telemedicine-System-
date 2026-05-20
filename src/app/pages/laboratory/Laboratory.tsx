import { TestTube, Download, Eye, Calendar } from "lucide-react";

export default function Laboratory() {
  const tests = [
    { id: 1, test: "Complete Blood Count (CBC)", date: "May 15, 2026", status: "Completed", result: "Normal" },
    { id: 2, test: "Lipid Panel", date: "May 12, 2026", status: "Completed", result: "Abnormal" },
    { id: 3, test: "Urinalysis", date: "May 18, 2026", status: "In Progress", result: "-" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Laboratory</h1>
        <p className="text-slate-600 mt-2">View and manage your lab test results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TestTube className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">12</span>
          </div>
          <h3 className="text-slate-600 text-sm">Total Tests</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TestTube className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">8</span>
          </div>
          <h3 className="text-slate-600 text-sm">Completed</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TestTube className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">2</span>
          </div>
          <h3 className="text-slate-600 text-sm">In Progress</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Lab Tests & Results</h2>
        <div className="space-y-4">
          {tests.map((test) => (
            <div key={test.id} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TestTube className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{test.test}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {test.date}
                      </span>
                      {test.result !== "-" && (
                        <span className={`px-2 py-1 text-xs rounded ${
                          test.result === "Normal"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                          {test.result}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    test.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {test.status}
                  </span>
                  {test.status === "Completed" && (
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
