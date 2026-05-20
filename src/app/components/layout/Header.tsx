import { Link } from "react-router";
import { Menu, User, Bell, LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900">AfyaConnect</h1>
              <p className="text-xs text-slate-500">Smart Healthcare</p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/appointments/book" className="text-slate-700 hover:text-blue-600 font-medium">
            Appointments
          </Link>
          <Link to="/telemedicine" className="text-slate-700 hover:text-blue-600 font-medium">
            Telemedicine
          </Link>
          <Link to="/ehr/records" className="text-slate-700 hover:text-blue-600 font-medium">
            Medical Records
          </Link>
          <Link to="/symptom-checker" className="text-slate-700 hover:text-blue-600 font-medium">
            AI Symptom Checker
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-100 rounded-lg relative">
            <Bell className="w-5 h-5 text-slate-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <Link to="/profile" className="p-2 hover:bg-slate-100 rounded-lg">
            <User className="w-5 h-5 text-slate-700" />
          </Link>
          <Link to="/login" className="p-2 hover:bg-slate-100 rounded-lg">
            <LogOut className="w-5 h-5 text-slate-700" />
          </Link>
        </div>
      </div>
    </header>
  );
}
