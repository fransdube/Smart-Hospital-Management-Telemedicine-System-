import { Link } from "react-router";
import { Calendar, FileText, Video, Activity, Clock, AlertCircle } from "lucide-react";

export default function PatientDashboard() {
  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Sarah Johnson", specialty: "Cardiologist", date: "May 20, 2026", time: "10:00 AM" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "Dermatologist", date: "May 22, 2026", time: "2:30 PM" },
  ];

  const recentTests = [
    { id: 1, test: "Blood Test", date: "May 15, 2026", status: "Completed" },
    { id: 2, test: "X-Ray", date: "May 10, 2026", status: "Completed" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Patient Dashboard</h1>
        <p className="text-slate-600 mt-2">Welcome back! Here's your health overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">2</span>
          </div>
          <h3 className="text-slate-600 text-sm">Upcoming Appointments</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">12</span>
          </div>
          <h3 className="text-slate-600 text-sm">Medical Records</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">3</span>
          </div>
          <h3 className="text-slate-600 text-sm">Consultations</h3>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">5</span>
          </div>
          <h3 className="text-slate-600 text-sm">Active Prescriptions</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Upcoming Appointments</h2>
            <Link to="/appointments/view" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-900">{appointment.doctor}</h3>
                    <p className="text-sm text-slate-600">{appointment.specialty}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Confirmed
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {appointment.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {appointment.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/appointments/book"
            className="mt-4 block w-full py-3 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book New Appointment
          </Link>
        </div>

        {/* Recent Tests */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Tests</h2>
            <Link to="/laboratory" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentTests.map((test) => (
              <div key={test.id} className="p-4 bg-slate-50 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{test.test}</h3>
                  <p className="text-sm text-slate-600">{test.date}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  {test.status}
                </span>
              </div>
            ))}
          </div>

          {/* Health Reminder */}
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-1">Health Reminder</h3>
                <p className="text-sm text-orange-700">
                  Your annual checkup is due. Schedule an appointment with your primary care physician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/symptom-checker"
          className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          <h3 className="text-xl font-bold mb-2">AI Symptom Checker</h3>
          <p className="text-blue-100">Check your symptoms with AI</p>
        </Link>
        <Link
          to="/telemedicine"
          className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
        >
          <h3 className="text-xl font-bold mb-2">Video Consultation</h3>
          <p className="text-green-100">Consult with doctors online</p>
        </Link>
        <Link
          to="/ehr/records"
          className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all"
        >
          <h3 className="text-xl font-bold mb-2">Medical Records</h3>
          <p className="text-purple-100">Access your health records</p>
        </Link>
      </div>
    </div>
  );
}
