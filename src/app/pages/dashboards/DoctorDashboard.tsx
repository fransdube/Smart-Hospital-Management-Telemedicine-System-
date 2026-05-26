import { Link } from "react-router";
import {
  Users,
  Calendar,
  Video,
  FileText,
  Clock,
  TrendingUp,
  Search,
  MessageSquare,
  Plus,
  MoreVertical,
  Pill,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";

export default function DoctorDashboard() {
  const todaysAppointments = [
    { id: 1, patient: "John Smith", time: "9:00 AM", type: "Follow-up", status: "Confirmed" },
    { id: 2, patient: "Emma Wilson", time: "10:30 AM", type: "Consultation", status: "Confirmed" },
    { id: 3, patient: "Michael Brown", time: "2:00 PM", type: "Check-up", status: "Pending" },
  ];

  const recentPatients = [
    { id: 1, name: "Sarah Davis", lastVisit: "May 18, 2026", condition: "Hypertension", email: "sarah.d@example.com" },
    { id: 2, name: "James Miller", lastVisit: "May 17, 2026", condition: "Diabetes", email: "j.miller@example.com" },
    { id: 3, name: "Robert Wilson", lastVisit: "May 15, 2026", condition: "Recovery", email: "r.wilson@example.com" },
  ];

  const recentMessages = [
    { id: 1, sender: "Sarah Davis", text: "Dr. Johnson, my blood pressure was 130/85 this morning.", time: "10 mins ago" },
    { id: 2, sender: "James Miller", text: "When should I take the new medication?", time: "1 hour ago" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Doctor Dashboard</h1>
          <p className="text-slate-600 mt-2">Good morning, Dr. Johnson! Here's your schedule for today</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Join Next Call
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Appointment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="bg-white p-1 border border-slate-200 shadow-sm rounded-xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-slate-900">8</span>
              </div>
              <h3 className="text-slate-600 text-sm font-medium">Today's Appointments</h3>
              <p className="text-xs text-green-600 mt-2 font-medium">+2 from yesterday</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-2xl font-bold text-slate-900">142</span>
              </div>
              <h3 className="text-slate-600 text-sm font-medium">Total Patients</h3>
              <p className="text-xs text-green-600 mt-2 font-medium">+5 this month</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-slate-600 text-sm font-medium">Video Consultations</h3>
              <p className="text-xs text-slate-500 mt-2 font-medium">Scheduled for today</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-2xl font-bold text-slate-900">95%</span>
              </div>
              <h3 className="text-slate-600 text-sm font-medium">Satisfaction Rate</h3>
              <p className="text-xs text-green-600 mt-2 font-medium">Top 5% in hospital</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Today's Appointments */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Today's Appointments</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/appointments/schedule" className="text-blue-600 font-medium">View Schedule</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {todaysAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                          {appointment.patient.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{appointment.patient}</h3>
                          <p className="text-xs text-slate-600 uppercase tracking-wider font-medium">{appointment.type}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        appointment.status === 'Confirmed'
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-3">
                      <span className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-md border border-slate-200">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        {appointment.time}
                      </span>
                      <Button variant="ghost" size="sm" className="ml-auto h-8 text-blue-600">Start Visit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Patients */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Patients</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/ehr/records" className="text-blue-600 font-medium">All Records</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">{patient.name}</h3>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare className="w-4 h-4 text-slate-400" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="w-4 h-4 text-slate-400" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                      <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                        {patient.condition}
                      </span>
                      <span className="text-xs">Last visit: {patient.lastVisit}</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 text-xs flex-1" asChild>
                        <Link to="/ehr/notes">Add Note</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 text-xs flex-1">
                        <Pill className="w-3 h-3 mr-1" />
                        Prescribe
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Detailed Schedule</h2>
            {/* Appointment management table would go here */}
            <div className="text-center py-12 text-slate-500">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>Calendar view and advanced scheduling tools coming soon.</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="patients" className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-slate-900">Patient Directory</h2>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-500 text-sm font-medium">
                    <th className="pb-4">Patient Name</th>
                    <th className="pb-4">ID / Email</th>
                    <th className="pb-4">Condition</th>
                    <th className="pb-4">Last Visit</th>
                    <th className="pb-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentPatients.map((patient) => (
                    <tr key={patient.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 font-medium text-slate-900">{patient.name}</td>
                      <td className="py-4 text-slate-600 text-sm">{patient.email}</td>
                      <td className="py-4">
                        <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-bold">
                          {patient.condition}
                        </span>
                      </td>
                      <td className="py-4 text-slate-600 text-sm">{patient.lastVisit}</td>
                      <td className="py-4 text-right">
                        <Button variant="ghost" size="sm" className="text-blue-600 h-8">Records</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50 font-bold text-slate-900">Conversations</div>
              <div className="divide-y divide-slate-50">
                {recentMessages.map((msg) => (
                  <div key={msg.id} className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-slate-900 text-sm">{msg.sender}</h4>
                      <span className="text-[10px] text-slate-400 font-medium uppercase">{msg.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">{msg.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-[400px]">
              <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">S</div>
                <h4 className="font-bold text-slate-900">Sarah Davis</h4>
              </div>
              <div className="flex-1 p-6 overflow-y-auto bg-slate-50/30">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 max-w-[80%] shadow-sm">
                      <p className="text-sm text-slate-800">Dr. Johnson, my blood pressure was 130/85 this morning. Should I be concerned?</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">10:45 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-white max-w-[80%] shadow-md">
                      <p className="text-sm">That's slightly elevated but within acceptable limits. Let's monitor it for 2 more days. Keep up with the low-sodium diet.</p>
                      <span className="text-[10px] text-blue-100 mt-1 block">11:02 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <Button size="sm">Send</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Performance Overview (Footer Stats) */}
      <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          Weekly Practice Performance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <div className="text-3xl font-bold text-blue-400">32</div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Consultations</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-green-400">18</div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Prescriptions</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-purple-400">12</div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Lab Orders</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-orange-400">8</div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Follow-ups</p>
          </div>
        </div>
      </div>
    </div>
  );
}
