import { useState } from "react";
import { Link } from "react-router";
import { Brain, AlertCircle, CheckCircle, ArrowRight, AlertTriangle, Info, Calendar, Video } from "lucide-react";

interface SymptomAnalysis {
  urgency: "Low" | "Moderate" | "High" | "Critical";
  urgencyColor: string;
  urgencyMessage: string;
  conditions: Array<{
    name: string;
    match: number;
    description: string;
  }>;
  recommendations: Array<{
    title: string;
    description: string;
  }>;
}

export default function SymptomChecker() {
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<SymptomAnalysis | null>(null);
  const [formData, setFormData] = useState({
    symptoms: "",
    timing: "Today",
    severity: "Mild",
    age: "18-35 years",
    conditions: "",
  });

  // Smart Rule-Based Symptom Analysis Engine (No API Required!)
  const analyzeSymptoms = (symptoms: string, severity: string): SymptomAnalysis => {
    const lowerSymptoms = symptoms.toLowerCase();
    const conditions: Array<{ name: string; match: number; description: string }> = [];
    let urgency: "Low" | "Moderate" | "High" | "Critical" = "Low";
    const recommendations: Array<{ title: string; description: string }> = [];

    // Keywords for different conditions
    const feverKeywords = ["fever", "temperature", "hot", "chills", "sweating"];
    const coughKeywords = ["cough", "coughing", "phlegm", "mucus"];
    const headacheKeywords = ["headache", "head pain", "migraine", "head ache"];
    const coldKeywords = ["runny nose", "sneezing", "congestion", "stuffy nose", "sore throat"];
    const fluKeywords = ["body ache", "fatigue", "tired", "weakness", "exhausted"];
    const allergyKeywords = ["itchy", "watery eyes", "sneezing", "rash", "hives"];
    const stomachKeywords = ["nausea", "vomit", "diarrhea", "stomach", "abdominal pain", "cramps"];
    const breathingKeywords = ["shortness of breath", "difficulty breathing", "chest pain", "wheezing"];
    const covidKeywords = ["loss of taste", "loss of smell", "dry cough"];

    // Count keyword matches
    const hasFever = feverKeywords.some(k => lowerSymptoms.includes(k));
    const hasCough = coughKeywords.some(k => lowerSymptoms.includes(k));
    const hasHeadache = headacheKeywords.some(k => lowerSymptoms.includes(k));
    const hasCold = coldKeywords.some(k => lowerSymptoms.includes(k));
    const hasFlu = fluKeywords.some(k => lowerSymptoms.includes(k));
    const hasAllergy = allergyKeywords.some(k => lowerSymptoms.includes(k));
    const hasStomach = stomachKeywords.some(k => lowerSymptoms.includes(k));
    const hasBreathing = breathingKeywords.some(k => lowerSymptoms.includes(k));
    const hasCovid = covidKeywords.some(k => lowerSymptoms.includes(k));

    // Critical symptoms check
    if (hasBreathing) {
      urgency = "Critical";
      conditions.push({
        name: "Respiratory Distress - Seek Immediate Care",
        match: 95,
        description: "Difficulty breathing or chest pain requires immediate medical attention. Go to ER or call emergency services.",
      });
    }

    // COVID-19 Detection
    if ((hasFever && hasCough && hasCovid) || (hasCovid && hasFlu)) {
      urgency = urgency === "Critical" ? "Critical" : "High";
      conditions.push({
        name: "Possible COVID-19",
        match: 85,
        description: "Your symptoms suggest possible COVID-19. Get tested and isolate. Monitor oxygen levels and seek care if breathing worsens.",
      });
    }

    // Flu Detection
    if (hasFever && hasCough && hasFlu) {
      urgency = urgency === "Critical" ? "Critical" : urgency === "High" ? "High" : "Moderate";
      conditions.push({
        name: "Influenza (Flu)",
        match: 80,
        description: "High fever with body aches and cough suggest flu. Rest, hydrate, and consider antiviral medication if within 48 hours of symptom onset.",
      });
    }

    // Common Cold
    if (hasCold && (hasCough || hasHeadache)) {
      conditions.push({
        name: "Common Cold / Upper Respiratory Infection",
        match: 75,
        description: "Your symptoms align with a common cold. Rest, hydration, and over-the-counter medications may help. Usually resolves in 7-10 days.",
      });
    }

    // Seasonal Allergies
    if (hasAllergy && !hasFever) {
      conditions.push({
        name: "Seasonal Allergies (Allergic Rhinitis)",
        match: 70,
        description: "Environmental allergies could be causing your symptoms. Antihistamines may provide relief. Avoid known allergens.",
      });
    }

    // Stomach Issues
    if (hasStomach) {
      urgency = severity === "Severe" ? "High" : urgency === "Critical" ? "Critical" : "Moderate";
      conditions.push({
        name: "Gastroenteritis / Stomach Bug",
        match: 75,
        description: "Stomach symptoms suggest gastroenteritis. Stay hydrated with electrolytes. Seek care if symptoms persist beyond 48 hours or if dehydrated.",
      });
    }

    // Tension Headache / Migraine
    if (hasHeadache && !hasFever && !hasCold) {
      conditions.push({
        name: "Tension Headache / Migraine",
        match: 65,
        description: "Headache without fever may indicate tension or migraine. Rest in dark room, hydrate, and use pain relievers. See doctor if persistent.",
      });
    }

    // If no specific match found
    if (conditions.length === 0) {
      conditions.push({
        name: "General Viral Infection",
        match: 60,
        description: "Your symptoms suggest a general viral infection. Monitor symptoms and seek medical care if they worsen or persist.",
      });
      conditions.push({
        name: "Consult Healthcare Provider",
        match: 50,
        description: "For personalized diagnosis, we recommend consulting with a healthcare professional who can examine you properly.",
      });
    }

    // Adjust urgency based on severity input
    if (severity === "Severe" && urgency === "Low") {
      urgency = "Moderate";
    }
    if (severity === "Severe" && urgency === "Moderate") {
      urgency = "High";
    }

    // Sort conditions by match percentage
    conditions.sort((a, b) => b.match - a.match);

    // Generate recommendations based on symptoms
    if (hasFever || hasCough || hasCold) {
      recommendations.push({
        title: "Stay Hydrated",
        description: "Drink plenty of water, herbal teas, and fluids to help your body fight infection and prevent dehydration.",
      });
    }

    if (hasFlu || hasFever || hasStomach) {
      recommendations.push({
        title: "Get Adequate Rest",
        description: "Your body needs rest to recover. Aim for 8-10 hours of sleep and avoid strenuous activities.",
      });
    }

    if (hasCough || hasCold || hasFever) {
      recommendations.push({
        title: "Monitor Your Temperature",
        description: "Track your fever regularly. If it exceeds 103°F (39.4°C) or persists beyond 3 days, consult a doctor.",
      });
    }

    if (hasAllergy) {
      recommendations.push({
        title: "Avoid Allergens",
        description: "Stay indoors when pollen counts are high. Keep windows closed and use air purifiers if possible.",
      });
    }

    if (hasStomach) {
      recommendations.push({
        title: "BRAT Diet",
        description: "Eat bland foods: Bananas, Rice, Applesauce, Toast. Avoid dairy, fatty, or spicy foods until recovered.",
      });
    }

    // Default recommendations
    if (recommendations.length < 3) {
      recommendations.push({
        title: "Over-the-Counter Relief",
        description: "Consider pain relievers, decongestants, or antihistamines as appropriate. Consult pharmacist for guidance.",
      });
    }

    // Determine urgency messages
    const urgencyMessages = {
      Low: "Your symptoms appear mild. Self-care and monitoring should be sufficient.",
      Moderate: "We recommend scheduling an appointment with a healthcare provider within the next 2-3 days.",
      High: "You should see a healthcare provider within 24 hours. Your symptoms require medical evaluation.",
      Critical: "SEEK IMMEDIATE MEDICAL ATTENTION. Go to the ER or call emergency services now!",
    };

    const urgencyColors = {
      Low: "green",
      Moderate: "yellow",
      High: "orange",
      Critical: "red",
    };

    return {
      urgency,
      urgencyColor: urgencyColors[urgency],
      urgencyMessage: urgencyMessages[urgency],
      conditions: conditions.slice(0, 3), // Top 3 conditions
      recommendations: recommendations.slice(0, 4), // Top 4 recommendations
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    // Simulate AI analysis with rule-based logic
    setTimeout(() => {
      const result = analyzeSymptoms(formData.symptoms, formData.severity);
      setAnalysis(result);
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleNewCheck = () => {
    setShowResults(false);
    setAnalysis(null);
    setFormData({
      symptoms: "",
      timing: "Today",
      severity: "Mild",
      age: "18-35 years",
      conditions: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">AI Symptom Checker</h1>
        <p className="text-slate-600 mt-2">Get instant health insights powered by intelligent analysis</p>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">How It Works</h2>
            <p className="text-blue-100 mt-1">Our intelligent system analyzes your symptoms and provides health insights</p>
          </div>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 mt-0.5" />
            <p className="text-sm text-blue-100">
              This tool is for informational purposes only and should not replace professional medical advice.
              Always consult with a healthcare provider for accurate diagnosis.
            </p>
          </div>
        </div>
      </div>

      {!showResults ? (
        <div className="bg-white p-8 rounded-xl border border-slate-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                What symptoms are you experiencing?
              </label>
              <textarea
                rows={5}
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                placeholder="Describe your symptoms in detail (e.g., fever, cough, headache, stomach pain, fatigue...)"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  When did symptoms start?
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
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
                <select
                  value={formData.severity}
                  onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
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
              <select
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
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
                value={formData.conditions}
                onChange={(e) => setFormData({ ...formData, conditions: e.target.value })}
                placeholder="Diabetes, Hypertension, etc. (Optional)"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isAnalyzing}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing Symptoms...
                </>
              ) : (
                <>
                  Analyze Symptoms
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
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
                <span>Intelligent system analyzes your symptoms using medical knowledge</span>
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
      ) : (
        analysis && (
          <div className="space-y-6">
            {/* Analysis Results */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Analysis Complete</h2>
                  <p className="text-slate-600">Based on your symptoms, here are the results</p>
                </div>
              </div>

              {/* Urgency Level */}
              <div className={`mb-6 p-4 border-l-4 rounded-lg ${analysis.urgencyColor === 'green' ? 'bg-green-50 border-green-500' :
                  analysis.urgencyColor === 'yellow' ? 'bg-yellow-50 border-yellow-500' :
                    analysis.urgencyColor === 'orange' ? 'bg-orange-50 border-orange-500' :
                      'bg-red-50 border-red-500'
                }`}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-5 h-5 mt-0.5 ${analysis.urgencyColor === 'green' ? 'text-green-600' :
                      analysis.urgencyColor === 'yellow' ? 'text-yellow-600' :
                        analysis.urgencyColor === 'orange' ? 'text-orange-600' :
                          'text-red-600'
                    }`} />
                  <div>
                    <h3 className={`font-semibold ${analysis.urgencyColor === 'green' ? 'text-green-900' :
                        analysis.urgencyColor === 'yellow' ? 'text-yellow-900' :
                          analysis.urgencyColor === 'orange' ? 'text-orange-900' :
                            'text-red-900'
                      }`}>Urgency Level: {analysis.urgency}</h3>
                    <p className={`text-sm mt-1 ${analysis.urgencyColor === 'green' ? 'text-green-800' :
                        analysis.urgencyColor === 'yellow' ? 'text-yellow-800' :
                          analysis.urgencyColor === 'orange' ? 'text-orange-800' :
                            'text-red-800'
                      }`}>
                      {analysis.urgencyMessage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Possible Conditions */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Possible Conditions</h3>
                <div className="space-y-3">
                  {analysis.conditions.map((condition, index) => (
                    <div key={index} className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">{condition.name}</h4>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{condition.match}% Match</span>
                      </div>
                      <p className="text-sm text-slate-600">{condition.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Recommendations</h3>
                <div className="space-y-3">
                  {analysis.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 text-sm">{rec.title}</h4>
                        <p className="text-sm text-blue-800">{rec.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Signs */}
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900">Seek Immediate Care If:</h3>
                    <ul className="text-sm text-red-800 mt-2 space-y-1 list-disc list-inside">
                      <li>Difficulty breathing or shortness of breath</li>
                      <li>High fever (above 103°F / 39.4°C) that doesn't reduce with medication</li>
                      <li>Chest pain or severe headache</li>
                      <li>Confusion or difficulty staying awake</li>
                      <li>Symptoms worsen rapidly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">What Would You Like To Do?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/appointments/book"
                  className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  <Calendar className="w-6 h-6 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Book Appointment</h4>
                  <p className="text-sm text-blue-100">Schedule a visit with a doctor</p>
                </Link>

                <Link
                  to="/telemedicine"
                  className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  <Video className="w-6 h-6 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Video Consultation</h4>
                  <p className="text-sm text-green-100">Talk to a doctor online now</p>
                </Link>

                <button
                  onClick={handleNewCheck}
                  className="p-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-center"
                >
                  <ArrowRight className="w-6 h-6 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">New Symptom Check</h4>
                  <p className="text-sm text-slate-600">Start another analysis</p>
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600 text-center">
                <strong>Medical Disclaimer:</strong> This symptom checker uses rule-based logic for informational purposes only and is not a substitute for professional medical advice,
                diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any
                questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
