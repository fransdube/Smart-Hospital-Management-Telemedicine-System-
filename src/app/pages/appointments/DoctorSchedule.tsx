import { Calendar, Clock, User, CheckCircle, XCircle } from "lucide-react";

export default function DoctorSchedule() {
  const schedule = [
    { id: 1, time: "9:00 AM", patient: "John Smith", reason: "Follow-up", status: "Confirmed" },
    { id: 2, time: "10:00 AM", patient: "Emma Wilson", reason: "Consultation", status: "Confirmed" },
    { id: 3, time: "11:00 AM", patient: "Break", reason: "-", status: "Break" },
    { id: 4, time: "12:00 PM", patient: "Michael Brown", reason: "Check-up", status: "Pending" },
    { id: 5, time: "2:00 PM", patient: "Sarah Davis", reason: "Follow-up", status: "Confirmed" },
    { id: 6, time: "3:00 PM", patient: "Available", reason: "-", status: "Available" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">My Schedule</h1>
        <p className="text-slate-600 mt-2">Manage your daily appointments and availability</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Select Date
            </h2>
            <input
              type="date"
              defaultValue="2026-05-19"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none mb-6"
            />

            <div className="space-y-3">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-900">Confirmed</span>
                  <span className="text-lg font-bold text-green-700">5</span>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-yellow-900">Pending</span>
                  <span className="text-lg font-bold text-yellow-700">1</span>
                </div>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">Available Slots</span>
                  <span className="text-lg font-bold text-blue-700">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Today's Schedule - May 19, 2026</h2>
            <div className="space-y-3">
              {schedule.map((slot) => (
                <div
                  key={slot.id}
                  className={`p-4 rounded-lg border-2 ${
                    slot.status === "Confirmed"
                      ? "bg-green-50 border-green-200"
                      : slot.status === "Pending"
                      ? "bg-yellow-50 border-yellow-200"
                      : slot.status === "Break"
                      ? "bg-slate-50 border-slate-200"
                      : "bg-blue-50 border-blue-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <Clock className="w-4 h-4 text-slate-600" />
                        <span className="font-semibold text-slate-900">{slot.time}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          {slot.status !== "Break" && slot.status !== "Available" && (
                            <User className="w-4 h-4 text-slate-600" />
                          )}
                          <span className="font-medium text-slate-900">{slot.patient}</span>
                        </div>
                        {slot.reason !== "-" && (
                          <p className="text-sm text-slate-600 ml-6">{slot.reason}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {slot.status === "Confirmed" && (
                        <>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            Confirmed
                          </span>
                          <button className="p-2 hover:bg-green-100 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </button>
                        </>
                      )}
                      {slot.status === "Pending" && (
                        <>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                            Pending
                          </span>
                          <button className="px-3 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700">
                            Confirm
                          </button>
                          <button className="p-2 hover:bg-red-100 rounded-lg">
                            <XCircle className="w-5 h-5 text-red-600" />
                          </button>
                        </>
                      )}
                      {slot.status === "Available" && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          Available
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
