import { Link } from "react-router";
import { Video, Calendar, Clock, User } from "lucide-react";

export default function Telemedicine() {
  const upcomingConsultations = [
    { id: 1, doctor: "Dr. Sarah Johnson", date: "May 20, 2026", time: "10:00 AM", status: "Scheduled" },
    { id: 2, doctor: "Dr. Michael Chen", date: "May 22, 2026", time: "2:30 PM", status: "Scheduled" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Telemedicine</h1>
        <p className="text-slate-600 mt-2">Connect with doctors through video consultations</p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Video className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Start Video Consultation</h2>
            <p className="text-blue-100">Connect with our healthcare professionals from anywhere</p>
          </div>
        </div>
        <Link
          to="/appointments/book"
          className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Schedule Consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Upcoming Consultations</h2>
          <div className="space-y-4">
            {upcomingConsultations.map((consultation) => (
              <div key={consultation.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{consultation.doctor}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {consultation.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {consultation.time}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {consultation.status}
                  </span>
                </div>
                <Link
                  to={`/telemedicine/consultation/${consultation.id}`}
                  className="block w-full py-2 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Join Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">How It Works</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Schedule Appointment</h3>
                <p className="text-sm text-slate-600">Book a video consultation with your preferred doctor</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Receive Confirmation</h3>
                <p className="text-sm text-slate-600">Get email and SMS notifications with meeting details</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Join Video Call</h3>
                <p className="text-sm text-slate-600">Click the join button at your scheduled time</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Get Prescription</h3>
                <p className="text-sm text-slate-600">Receive digital prescriptions and recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
