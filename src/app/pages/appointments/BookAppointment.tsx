import { Calendar, Clock, User, Stethoscope, MapPin } from "lucide-react";

export default function BookAppointment() {
  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist", available: "Mon-Fri" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Dermatologist", available: "Tue-Sat" },
    { id: 3, name: "Dr. Emily Davis", specialty: "Pediatrician", available: "Mon-Sat" },
    { id: 4, name: "Dr. James Wilson", specialty: "Orthopedic", available: "Mon-Fri" },
  ];

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Book Appointment</h1>
        <p className="text-slate-600 mt-2">Schedule your consultation with our healthcare professionals</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <form className="space-y-6">
          {/* Patient Information */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Patient Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+254 700 000 000"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Select Doctor */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5" />
              Select Doctor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctors.map((doctor) => (
                <label key={doctor.id} className="relative">
                  <input type="radio" name="doctor" className="peer sr-only" />
                  <div className="p-4 border-2 border-slate-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-slate-300 transition-colors">
                    <h3 className="font-semibold text-slate-900">{doctor.name}</h3>
                    <p className="text-sm text-slate-600">{doctor.specialty}</p>
                    <p className="text-xs text-slate-500 mt-1">Available: {doctor.available}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Select Date */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Select Date
            </h2>
            <input
              type="date"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Select Time */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Select Time
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {timeSlots.map((time, index) => (
                <label key={index} className="relative">
                  <input type="radio" name="time" className="peer sr-only" />
                  <div className="p-3 text-center border-2 border-slate-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white hover:border-slate-300 transition-colors">
                    <span className="text-sm font-medium">{time}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Appointment Type */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Appointment Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="relative">
                <input type="radio" name="type" className="peer sr-only" defaultChecked />
                <div className="p-4 border-2 border-slate-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-slate-300 transition-colors">
                  <h3 className="font-semibold text-slate-900">In-Person Visit</h3>
                  <p className="text-sm text-slate-600">Visit the hospital for consultation</p>
                </div>
              </label>
              <label className="relative">
                <input type="radio" name="type" className="peer sr-only" />
                <div className="p-4 border-2 border-slate-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-slate-300 transition-colors">
                  <h3 className="font-semibold text-slate-900">Video Consultation</h3>
                  <p className="text-sm text-slate-600">Online consultation via video call</p>
                </div>
              </label>
            </div>
          </div>

          {/* Reason for Visit */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Reason for Visit (Optional)
            </label>
            <textarea
              rows={4}
              placeholder="Describe your symptoms or reason for appointment..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
