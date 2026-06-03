import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, LogIn } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleQuickAccess = async (role: 'patient' | 'doctor' | 'admin') => {
    // Quick demo login mapping to local DB seeds
    const emails = {
      admin: "admin@afyaconnect.com",
      doctor: "smith@afyaconnect.com",
      patient: "john@example.com"
    };
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emails[role], password: "password123" })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        login(data.user.role);
        navigate(`/${data.user.role}/dashboard`);
      } else {
        setError(data.message || "Quick access failed");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        login(data.user.role);
        navigate(`/${data.user.role}/dashboard`);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }
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

        {error && <div className="mb-4 text-red-600 text-center text-sm font-semibold">{error}</div>}

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
