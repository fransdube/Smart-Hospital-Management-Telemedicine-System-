import { Link } from "react-router";
import { Users, UserCheck, Calendar, DollarSign, Activity, TrendingUp, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
  const systemAlerts = [
    { id: 1, message: "Server maintenance scheduled for May 25, 2026", type: "info" },
    { id: 2, message: "5 pending user registrations require approval", type: "warning" },
  ];

  const recentActivities = [
    { id: 1, user: "Dr. Sarah Johnson", action: "Updated patient record", time: "10 mins ago" },
    { id: 2, user: "John Smith", action: "Booked appointment", time: "25 mins ago" },
    { id: 3, user: "Pharmacy Staff", action: "Dispensed medication", time: "1 hour ago" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-600 mt-2">System overview and management</p>
      </div>

      {/* System Alerts */}
      {systemAlerts.length > 0 && (
        <div className="mb-8 space-y-3">
          {systemAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border flex items-start gap-3 ${
                alert.type === 'warning'
                  ? 'bg-yellow-50 border-yellow-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <AlertCircle
                className={`w-5 h-5 mt-0.5 ${
                  alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                }`}
              />
              <p className={alert.type === 'warning' ? 'text-yellow-900' : 'text-blue-900'}>
                {alert.message}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">1,248</span>
          </div>
          <h3 className="text-slate-600 text-sm">Total Users</h3>
          <p className="text-xs text-green-600 mt-1">+12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">45</span>
          </div>
          <h3 className="text-slate-600 text-sm">Active Doctors</h3>
          <p className="text-xs text-green-600 mt-1">+3 this week</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">327</span>
          </div>
          <h3 className="text-slate-600 text-sm">Appointments Today</h3>
          <p className="text-xs text-slate-600 mt-1">32 pending</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-2xl font-bold text-slate-900">$48,250</span>
          </div>
          <h3 className="text-slate-600 text-sm">Revenue This Month</h3>
          <p className="text-xs text-green-600 mt-1">+18% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Activities</h2>
            <Activity className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{activity.user}</h3>
                    <p className="text-sm text-slate-600">{activity.action}</p>
                  </div>
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Performance */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">System Performance</h2>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Server Uptime</span>
                <span className="text-sm font-semibold text-slate-900">99.8%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '99.8%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Database Performance</span>
                <span className="text-sm font-semibold text-slate-900">95%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">API Response Time</span>
                <span className="text-sm font-semibold text-slate-900">85ms avg</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/users"
          className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          <Users className="w-8 h-8 mb-3" />
          <h3 className="text-xl font-bold mb-2">Manage Users</h3>
          <p className="text-blue-100">View and manage all system users</p>
        </Link>
        <Link
          to="/billing"
          className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all"
        >
          <DollarSign className="w-8 h-8 mb-3" />
          <h3 className="text-xl font-bold mb-2">Billing Reports</h3>
          <p className="text-green-100">View financial reports and analytics</p>
        </Link>
        <Link
          to="/admin/settings"
          className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all"
        >
          <Activity className="w-8 h-8 mb-3" />
          <h3 className="text-xl font-bold mb-2">System Settings</h3>
          <p className="text-purple-100">Configure system preferences</p>
        </Link>
      </div>
    </div>
  );
}
