import { useParams } from "react-router";
import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, Users } from "lucide-react";

export default function VideoConsultation() {
  const { id } = useParams();

  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col">
      {/* Video Area */}
      <div className="flex-1 relative">
        {/* Main Video */}
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
          <div className="text-center text-white">
            <Video className="w-24 h-24 mx-auto mb-4 text-slate-600" />
            <p className="text-xl">Video Consultation Room</p>
            <p className="text-slate-400 mt-2">Consultation ID: {id}</p>
            <p className="text-sm text-slate-500 mt-4">Waiting for doctor to join...</p>
          </div>
        </div>

        {/* Self Video Preview */}
        <div className="absolute bottom-6 right-6 w-64 h-48 bg-slate-700 rounded-xl overflow-hidden border-2 border-slate-600">
          <div className="w-full h-full flex items-center justify-center text-white">
            <User className="w-12 h-12 text-slate-500" />
          </div>
        </div>

        {/* Doctor Info */}
        <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-3 rounded-lg">
          <p className="text-sm text-slate-300">Consulting with</p>
          <p className="font-semibold">Dr. Sarah Johnson</p>
          <p className="text-xs text-slate-400">Cardiologist</p>
        </div>

        {/* Timer */}
        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
          <p className="font-mono text-lg">00:00</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-slate-800 px-6 py-4 flex items-center justify-center gap-4">
        <button className="p-4 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors">
          <Mic className="w-6 h-6 text-white" />
        </button>
        <button className="p-4 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors">
          <Video className="w-6 h-6 text-white" />
        </button>
        <button className="p-4 bg-red-600 hover:bg-red-700 rounded-full transition-colors">
          <PhoneOff className="w-6 h-6 text-white" />
        </button>
        <button className="p-4 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors">
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
        <button className="p-4 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors">
          <Users className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
