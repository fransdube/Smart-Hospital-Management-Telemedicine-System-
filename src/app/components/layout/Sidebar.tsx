import { Link, useLocation } from "react-router";
import {
  Home,
  Calendar,
  FileText,
  Video,
  Pill,
  TestTube,
  CreditCard,
  Brain,
  Users,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/patient/dashboard", icon: Users, label: "Dashboard" },
    { path: "/appointments/view", icon: Calendar, label: "Appointments" },
    { path: "/ehr/records", icon: FileText, label: "Medical Records" },
    { path: "/telemedicine", icon: Video, label: "Telemedicine" },
    { path: "/pharmacy", icon: Pill, label: "Pharmacy" },
    { path: "/laboratory", icon: TestTube, label: "Laboratory" },
    { path: "/billing", icon: CreditCard, label: "Billing" },
    { path: "/symptom-checker", icon: Brain, label: "AI Checker" },
    { path: "/profile", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="hidden lg:block w-64 bg-white border-r border-slate-200">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
