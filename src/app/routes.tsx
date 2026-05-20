import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PatientDashboard from "./pages/dashboards/PatientDashboard";
import DoctorDashboard from "./pages/dashboards/DoctorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import BookAppointment from "./pages/appointments/BookAppointment";
import ViewAppointments from "./pages/appointments/ViewAppointments";
import DoctorSchedule from "./pages/appointments/DoctorSchedule";
import MedicalRecords from "./pages/ehr/MedicalRecords";
import ConsultationNotes from "./pages/ehr/ConsultationNotes";
import MedicalReports from "./pages/ehr/MedicalReports";
import Telemedicine from "./pages/telemedicine/Telemedicine";
import VideoConsultation from "./pages/telemedicine/VideoConsultation";
import Pharmacy from "./pages/pharmacy/Pharmacy";
import Laboratory from "./pages/laboratory/Laboratory";
import Billing from "./pages/billing/Billing";
import Payments from "./pages/billing/Payments";
import SymptomChecker from "./pages/ai/SymptomChecker";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "login", Component: Login },
      { path: "register", Component: Register },

      // Dashboards
      { path: "patient/dashboard", Component: PatientDashboard },
      { path: "doctor/dashboard", Component: DoctorDashboard },
      { path: "admin/dashboard", Component: AdminDashboard },

      // Appointments
      { path: "appointments/book", Component: BookAppointment },
      { path: "appointments/view", Component: ViewAppointments },
      { path: "appointments/schedule", Component: DoctorSchedule },

      // Electronic Health Records
      { path: "ehr/records", Component: MedicalRecords },
      { path: "ehr/notes", Component: ConsultationNotes },
      { path: "ehr/reports", Component: MedicalReports },

      // Telemedicine
      { path: "telemedicine", Component: Telemedicine },
      { path: "telemedicine/consultation/:id", Component: VideoConsultation },

      // Hospital Services
      { path: "pharmacy", Component: Pharmacy },
      { path: "laboratory", Component: Laboratory },
      { path: "billing", Component: Billing },
      { path: "payments", Component: Payments },

      // AI & Profile
      { path: "symptom-checker", Component: SymptomChecker },
      { path: "profile", Component: Profile },

      // 404
      { path: "*", Component: NotFound },
    ],
  },
]);
