
import React, { useState } from 'react';
import { Hospital } from '../types';
import { ChevronLeft, Search, Star, MapPin, TrendingUp, Info } from 'lucide-react';

const TreatmentComparison: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [condition, setCondition] = useState('Appendicitis');
  const [city, setCity] = useState('Nagpur');

  const hospitals: Hospital[] = [
    { name: 'City General Hospital', city: 'Nagpur', costRange: '₹35k - ₹50k', successRate: '98%', rating: 4.5, distance: '4.2 km' },
    { name: 'Health Care Trust', city: 'Nagpur', costRange: '₹28k - ₹35k', successRate: '92%', rating: 4.1, distance: '12.0 km' },
    { name: 'Apollo Speciality', city: 'Nagpur', costRange: '₹60k - ₹85k', successRate: '99%', rating: 4.8, distance: '8.5 km' },
    { name: 'Govt Medical College', city: 'Nagpur', costRange: 'Free - ₹5k', successRate: '85%', rating: 3.5, distance: '2.1 km' }
  ];

  return (
    <div className="pb-10 animate-fade-in">
      <button onClick={onBack} className="mb-6 flex items-center text-teal-600 font-bold">
        <ChevronLeft /> Back to Dashboard
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Treatment Cost Comparison</h2>
        <p className="text-gray-500">Transparent pricing for informed decisions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase px-1">Condition</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              value={condition} 
              onChange={(e) => setCondition(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-500 uppercase px-1">City</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-4 mb-6">
        <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm self-start">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Market Insight</h4>
          <p className="text-sm text-blue-700">The average cost for {condition} in {city} is ₹42,000. Public hospitals offer subsidized rates.</p>
        </div>
      </div>

      <div className="space-y-4">
        {hospitals.sort((a,b) => b.rating - a.rating).map((hospital, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{hospital.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-3 h-3" /> {hospital.distance} away
                </div>
              </div>
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                <Star className="w-3 h-3 fill-yellow-700" /> {hospital.rating}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t pt-4">
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase">Estimated Cost</div>
                <div className="text-lg font-bold text-teal-600">{hospital.costRange}</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase">Success Rate</div>
                <div className="text-lg font-bold text-gray-800">{hospital.successRate}</div>
              </div>
            </div>

            <button className="mt-4 w-full py-2 bg-gray-50 text-teal-600 font-bold text-sm rounded-xl hover:bg-teal-50 transition-colors">
              Read Patient Reviews
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentComparison;
