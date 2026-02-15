
import React, { useState } from 'react';
import { ChevronLeft, Calendar, User, Phone, Mail, FileText, CheckCircle2, Clock, MapPin, ShieldCheck, Activity } from 'lucide-react';

interface BookingInfoProps {
  onBack: () => void;
}

const BookingInfo: React.FC<BookingInfoProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: 'General Medicine',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-6 max-w-2xl py-20 text-center animate-bounce-down transition-colors">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full mb-8">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Request Received!</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
          Thank you for choosing CURE Clinic. One of our health coordinators will contact you shortly to confirm your visit.
        </p>
        <button
          onClick={onBack}
          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all hover:bg-slate-800 dark:hover:bg-slate-100"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 max-w-5xl py-12 animate-bounce-down transition-colors perspective-1000">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <ChevronLeft className="w-5 h-5" /> Back to Home
      </button>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Form */}
        <div className="flex-grow">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">Request an <span className="text-sky-600 dark:text-sky-400">Appointment</span></h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Please provide your details below. We'll find the best specialist for your needs.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Medical Specialty</label>
                <div className="relative">
                  <Activity className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-bold appearance-none text-slate-700 dark:text-slate-200"
                  >
                    <option className="dark:bg-slate-900">General Medicine</option>
                    <option className="dark:bg-slate-900">Cardiology</option>
                    <option className="dark:bg-slate-900">Pediatrics</option>
                    <option className="dark:bg-slate-900">Neurology</option>
                    <option className="dark:bg-slate-900">Orthopedics</option>
                    <option className="dark:bg-slate-900">Diagnostics</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium text-slate-700 dark:text-slate-200"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Reason for Visit (Optional)</label>
              <div className="relative">
                <FileText className="absolute left-4 top-6 text-slate-400 w-5 h-5" />
                <textarea
                  rows={4}
                  placeholder="Briefly describe your health concern..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-sky-600 text-white font-black text-lg rounded-3xl btn-shadow hover:bg-sky-700 transition-all shadow-xl mt-4 btn-3d"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>

        {/* Right Side: Info Panel */}
        <div className="w-full lg:w-[350px] shrink-0">
          <div className="sticky top-32 space-y-6">
            <div className="bg-slate-900 dark:bg-slate-900/80 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden transition-colors card-hover">
              <h3 className="text-xl font-bold mb-6">Clinic Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="opacity-60">Mon - Fri</span>
                  <span className="font-bold">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                  <span className="opacity-60">Saturday</span>
                  <span className="font-bold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-60">Sunday</span>
                  <span className="font-bold text-sky-400">Emergency Only</span>
                </div>
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] opacity-10">
                <Clock className="w-32 h-32" />
              </div>
            </div>

            <div className="bg-sky-50 dark:bg-sky-950/30 p-8 rounded-[2.5rem] border border-sky-100 dark:border-sky-900/50 space-y-6 transition-colors card-hover">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Why book online?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 shrink-0 text-sky-600 dark:text-sky-400 mt-1"><Clock className="w-5 h-5" /></div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Faster coordination and zero waiting on phone lines.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 shrink-0 text-sky-600 dark:text-sky-400 mt-1"><ShieldCheck className="w-5 h-5" /></div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Your health data is encrypted and handled with care.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 shrink-0 text-sky-600 dark:text-sky-400 mt-1"><MapPin className="w-5 h-5" /></div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Choose from any of our 3 convenient city locations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
