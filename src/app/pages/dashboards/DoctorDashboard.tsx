import { Link } from "react-router";
import { Users, Calendar, Video, FileText, Clock, TrendingUp } from "lucide-react";

export default function DoctorDashboard() {
  const todaysAppointments = [
    { id: 1, patient: "John Smith", time: "9:00 AM", type: "Follow-up", status: "Confirmed" },
    { id: 2, patient: "Emma Wilson", time: "10:30 AM", type: "Consultation", status: "Confirmed" },
    { id: 3, patient: "Michael Brown", time: "2:00 PM", type: "Check-up", status: "Pending" },
  ];

  const recentPatients = [
    { id: 1, name: "Sarah Davis", lastVisit: "May 18, 2026", condition: "Hypertension" },
    { id: 2, name: "James Miller", lastVisit: "May 17, 2026", condition: "Diabetes" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Doctor Dashboard</h1>
        <p className="text-slate-600 mt-2">Good morning, Dr. Johnson! Here's your schedule for today</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">8</span>
          </div>
          <h3 className="text-slate-600 text-sm">Today's Appointments</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">142</span>
          </div>
          <h3 className="text-slate-600 text-sm">Total Patients</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">3</span>
          </div>
          <h3 className="text-slate-600 text-sm">Video Consultations</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">95%</span>
          </div>
          <h3 className="text-slate-600 text-sm">Patient Satisfaction</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Today's Appointments</h2>
            <Link to="/appointments/schedule" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Schedule
            </Link>
          </div>
          <div className="space-y-4">
            {todaysAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900">{appointment.patient}</h3>
                    <p className="text-sm text-slate-600">{appointment.type}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    appointment.status === 'Confirmed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {appointment.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Patients */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Patients</h2>
            <Link to="/ehr/records" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900">{patient.name}</h3>
                  <Link
                    to="/ehr/notes"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Record
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span>Last visit: {patient.lastVisit}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                    {patient.condition}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 space-y-3">
            <Link
              to="/ehr/notes"
              className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add Consultation Notes
            </Link>
            <Link
              to="/telemedicine"
              className="block w-full py-3 bg-white border-2 border-blue-600 text-blue-600 text-center rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Video Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">This Week's Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">32</div>
            <p className="text-slate-600 text-sm">Consultations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18</div>
            <p className="text-slate-600 text-sm">Prescriptions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
            <p className="text-slate-600 text-sm">Lab Orders</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
            <p className="text-slate-600 text-sm">Follow-ups</p>
          </div>
        </div>
      </div>
    </div>
  );
}
