import { Link } from "react-router";
import { Calendar, Clock, User, Video, MapPin, X, Check } from "lucide-react";

export default function ViewAppointments() {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "May 20, 2026",
      time: "10:00 AM",
      type: "In-Person",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "May 22, 2026",
      time: "2:30 PM",
      type: "Video",
      status: "Confirmed",
    },
    {
      id: 3,
      doctor: "Dr. Emily Davis",
      specialty: "Pediatrician",
      date: "May 25, 2026",
      time: "11:00 AM",
      type: "In-Person",
      status: "Pending",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Appointments</h1>
          <p className="text-slate-600 mt-2">View and manage your appointments</p>
        </div>
        <Link
          to="/appointments/book"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Book New Appointment
        </Link>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{appointment.doctor}</h3>
                    <p className="text-slate-600">{appointment.specialty}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {appointment.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {appointment.time}
                  </span>
                  <span className="flex items-center gap-2">
                    {appointment.type === "Video" ? (
                      <Video className="w-4 h-4" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                    {appointment.type}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                {appointment.type === "Video" && appointment.status === "Confirmed" && (
                  <Link
                    to={`/telemedicine/consultation/${appointment.id}`}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    Join Call
                  </Link>
                )}
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Reschedule
                </button>
                <button className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg font-medium hover:bg-red-100 transition-colors flex items-center gap-2">
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {appointments.length === 0 && (
        <div className="bg-white p-12 rounded-xl border border-slate-200 text-center">
          <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Appointments</h3>
          <p className="text-slate-600 mb-6">You don't have any appointments scheduled</p>
          <Link
            to="/appointments/book"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your First Appointment
          </Link>
        </div>
      )}
    </div>
  );
}
