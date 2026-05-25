import { Link, useNavigate } from "react-router";
import { Mail, Lock, LogIn } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleQuickAccess = (role: 'patient' | 'doctor' | 'admin') => {
    login(role);
    navigate(`/${role}/dashboard`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default to patient for standard login submit in this mock
    handleQuickAccess('patient');
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-600 mt-2">Sign in to your AfyaConnect account</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <Link to="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-600 text-center mb-4">Quick Access for Demo</p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleQuickAccess('patient')}
              className="px-3 py-2 text-xs text-center bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 font-bold"
            >
              Patient
            </button>
            <button
              onClick={() => handleQuickAccess('doctor')}
              className="px-3 py-2 text-xs text-center bg-green-50 text-green-700 rounded-lg hover:bg-green-100 font-bold"
            >
              Doctor
            </button>
            <button
              onClick={() => handleQuickAccess('admin')}
              className="px-3 py-2 text-xs text-center bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 font-bold"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
