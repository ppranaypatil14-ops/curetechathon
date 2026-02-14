
import React from 'react';
import { ClipboardCheck, MessageSquare, Video, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

interface DoctorDashboardProps {
  onLogout: () => void;
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = () => {
  const pendingRequests = [
    { id: '1', patient: 'Rahul Sharma', age: 52, phw: 'Sister Meera', symptom: 'Severe Chest Pain', risk: 'HIGH' },
    { id: '2', patient: 'Anjali Gupta', age: 24, phw: 'Sister Lata', symptom: 'Unexplained Weight Loss', risk: 'MEDIUM' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Dr. Vikram Adithya</h2>
          <p className="text-gray-500">Senior Cardiologist | Apollo Speciality</p>
        </div>
        <div className="p-2 bg-green-100 text-green-600 rounded-full flex items-center gap-2 px-4 text-xs font-bold">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div> Online
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-3xl border border-gray-100 text-center">
          <div className="text-3xl font-bold text-teal-600">12</div>
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Pending</div>
        </div>
        <div className="bg-white p-4 rounded-3xl border border-gray-100 text-center">
          <div className="text-3xl font-bold text-blue-600">84</div>
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Resolved</div>
        </div>
        <div className="bg-white p-4 rounded-3xl border border-gray-100 text-center">
          <div className="text-3xl font-bold text-orange-600">03</div>
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Consults</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-500" /> Second Opinion Requests
        </h3>
        <div className="space-y-4">
          {pendingRequests.map((req) => (
            <div key={req.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-gray-800">{req.patient}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    req.risk === 'HIGH' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                  }`}>{req.risk} RISK</span>
                </div>
                <div className="text-sm text-gray-500 flex flex-wrap gap-4">
                  <span className="flex items-center gap-1"><ClipboardCheck className="w-4 h-4" /> {req.age} Yrs</span>
                  <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> From {req.phw}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-700 italic">"{req.symptom}"</p>
              </div>
              <div className="flex items-center gap-2 md:self-center">
                <button className="flex-1 md:flex-none p-4 bg-teal-50 text-teal-600 rounded-2xl hover:bg-teal-100 transition-colors">
                  <Video className="w-6 h-6" />
                </button>
                <button className="flex-[3] md:flex-none px-6 py-4 bg-teal-600 text-white font-bold rounded-2xl shadow-lg hover:bg-teal-700 transition-colors flex items-center gap-2">
                  Review Case <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900">Next Video Consultation</h4>
            <p className="text-xs text-blue-700">With Meena S. (Via PHW Laxmi) @ 04:30 PM</p>
          </div>
        </div>
        <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg">Remind</button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
