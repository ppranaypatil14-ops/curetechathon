
import React from 'react';
import { Shield, Users, Clock, Heart, ArrowRight, Star, Stethoscope, Microscope, Baby, Pill } from 'lucide-react';

interface LandingPageProps {
  onBookClick: () => void;
  onServiceClick: (service: any) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onBookClick, onServiceClick }) => {
  const services = [
    { title: 'Cardiology', icon: <Heart />, desc: 'Expert heart care using latest technologies.', color: 'rose' },
    { title: 'General Medicine', icon: <Stethoscope />, desc: 'Primary healthcare for your entire family.', color: 'sky' },
    { title: 'Pediatrics', icon: <Baby />, desc: 'Specialized care for infants and children.', color: 'emerald' },
    { title: 'Diagnostics', icon: <Microscope />, desc: 'Precise and accurate testing facilities.', color: 'violet' },
    { title: 'Pharmacy', icon: <Pill />, desc: 'Quick access to essential medications.', color: 'amber' },
    { title: 'Emergency', icon: <Shield />, desc: '24/7 emergency response and care.', color: 'indigo' }
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, string> = {
      rose: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 group-hover:bg-rose-600 group-hover:text-white',
      sky: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 group-hover:bg-sky-600 group-hover:text-white',
      emerald: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 group-hover:bg-emerald-600 group-hover:text-white',
      violet: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 group-hover:bg-violet-600 group-hover:text-white',
      amber: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 group-hover:bg-amber-600 group-hover:text-white',
      indigo: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 group-hover:bg-indigo-600 group-hover:text-white'
    };
    return map[color] || map.sky;
  };

  const getBorderClasses = (color: string) => {
    const map: Record<string, string> = {
      rose: 'hover:border-rose-200 dark:hover:border-rose-800/50 hover:shadow-rose-500/10',
      sky: 'hover:border-sky-200 dark:hover:border-sky-800/50 hover:shadow-sky-500/10',
      emerald: 'hover:border-emerald-200 dark:hover:border-emerald-800/50 hover:shadow-emerald-500/10',
      violet: 'hover:border-violet-200 dark:hover:border-violet-800/50 hover:shadow-violet-500/10',
      amber: 'hover:border-amber-200 dark:hover:border-amber-800/50 hover:shadow-amber-500/10',
      indigo: 'hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:shadow-indigo-500/10'
    };
    return map[color] || map.sky;
  };

  return (
    <div id="home" className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-40 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg-ai.jpg"
            alt="AI Healthcare Background"
            className="w-full h-full object-cover opacity-60 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent dark:from-slate-950/60 dark:via-slate-950/40 dark:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-extrabold uppercase tracking-widest mb-6 border border-sky-100 dark:border-sky-800 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-sky-600"></span>
                Modern Healthcare Redefined
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-[-0.02em]">
                Expert care for your <span className="text-sky-600 dark:text-sky-400 italic font-medium">healthy</span> future.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-[1.7] max-w-xl font-medium">
                Cure Clinic provides personalized, <span className="text-slate-900 dark:text-white underline decoration-sky-500/30 underline-offset-4">state-of-the-art</span> medical services. Our team of specialists is dedicated to your complete well-being through advanced diagnostics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button
                  onClick={onBookClick}
                  className="bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold text-lg btn-shadow hover:bg-sky-700 transition-all flex items-center justify-center gap-2 group"
                >
                  Book Appointment <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm text-slate-700 dark:text-slate-200 px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm"
                >
                  Our Services
                </button>
              </div>

              <div className="flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tighter">25+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Specialists</span>
                </div>
                <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tighter">10k+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Patients</span>
                </div>
                <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tighter">15+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Years Exp.</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade delay-200 hidden lg:block">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src="/doctor.jpg"
                  alt="Doctor Illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-200 dark:bg-sky-900/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-950 relative transition-colors">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Comprehensive Healthcare</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">We offer a wide range of specialized medical services to ensure you receive the most effective care possible in a comfortable environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <div
                key={idx}
                className={`group p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/40 backdrop-blur-sm border border-slate-100 dark:border-slate-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${getBorderClasses(s.color)}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 mb-8 ${getColorClasses(s.color)} shadow-sm`}>
                  {React.cloneElement(s.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-slate-800 dark:group-hover:text-sky-300 transition-colors">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onServiceClick(s)}
                    className="font-bold text-sm inline-flex items-center gap-2 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-all"
                  >
                    Explore Details <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/About Section */}
      <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/20 transition-colors">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">Why Choose CURE?</h2>
            <div className="space-y-6">
              {[
                { title: 'Experienced Specialists', desc: 'Our doctors are leaders in their respective fields with decades of experience.', icon: <Users /> },
                { title: 'Modern Technology', desc: 'We utilize the latest medical advancements for diagnosis and treatment.', icon: <Microscope /> },
                { title: 'Patient-First Approach', desc: 'Your comfort and health are our top priorities throughout your journey.', icon: <Heart /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-xl dark:shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <div className="flex gap-1 text-amber-400 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic mb-8 relative z-10">
                "CURE Clinic has completely changed my perspective on healthcare. The staff is professional, the facility is clean, and the care is genuinely personal."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-full overflow-hidden border-2 border-sky-50 dark:border-sky-800 shadow-sm">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Patient5" alt="Reviewer" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">David Thompson</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Patient since 2021</p>
                </div>
              </div>
              <div className="absolute top-[-20px] right-[-20px] text-slate-50 dark:text-white/5 group-hover:text-slate-100 dark:group-hover:text-white/10 transition-colors">
                <Heart className="w-32 h-32 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section id="contact" className="py-24 transition-colors">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-slate-900 dark:bg-slate-900/80 rounded-[3.5rem] p-12 md:p-24 text-white relative overflow-hidden text-center md:text-left shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight">Ready to start your healthy journey?</h2>
                <p className="text-slate-400 text-xl mb-0 font-medium leading-relaxed">Schedule your consultation today and experience the future of professional, world-class healthcare tailored to your needs.</p>
              </div>
              <div className="shrink-0 space-y-6">

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 text-sm text-slate-400 font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-sky-400" /> Open 24/7</div>
                  <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-sky-400" /> Secure Data</div>
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
