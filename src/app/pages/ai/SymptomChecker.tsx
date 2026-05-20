import { Brain, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function SymptomChecker() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">AI Symptom Checker</h1>
        <p className="text-slate-600 mt-2">Get instant health insights powered by AI</p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">How It Works</h2>
            <p className="text-blue-100 mt-1">Our AI analyzes your symptoms and provides health insights</p>
          </div>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 mt-0.5" />
            <p className="text-sm text-blue-100">
              This AI tool is for informational purposes only and should not replace professional medical advice.
              Always consult with a healthcare provider for accurate diagnosis.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What symptoms are you experiencing?
            </label>
            <textarea
              rows={5}
              placeholder="Describe your symptoms in detail (e.g., headache, fever, cough, fatigue...)"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                When did symptoms start?
              </label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option>Today</option>
                <option>1-2 days ago</option>
                <option>3-7 days ago</option>
                <option>Over a week ago</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Severity Level
              </label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option>Mild</option>
                <option>Moderate</option>
                <option>Severe</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Age Group
            </label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
              <option>0-17 years</option>
              <option>18-35 years</option>
              <option>36-55 years</option>
              <option>56+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Any existing medical conditions?
            </label>
            <input
              type="text"
              placeholder="Diabetes, Hypertension, etc. (Optional)"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Analyze Symptoms
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 p-6 bg-slate-50 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            What Happens Next?
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>AI analyzes your symptoms using medical knowledge base</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>You receive possible conditions and recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>System suggests whether to book an appointment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span>You can directly connect with a doctor if needed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
