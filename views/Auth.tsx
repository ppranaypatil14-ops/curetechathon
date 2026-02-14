
import React, { useState } from 'react';
import { Mail, Lock, User, Github, Chrome, ArrowRight, Eye, EyeOff, ChevronLeft, Shield } from 'lucide-react';

interface AuthProps {
  mode: 'login' | 'signup';
  onBack: () => void;
  onToggleMode: () => void;
  t: any;
}

const Auth: React.FC<AuthProps> = ({ mode, onBack, onToggleMode, t }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup logic
    alert(`${mode === 'login' ? 'Logging in' : 'Creating account'} for ${email}`);
  };

  return (
    <div className="container mx-auto px-6 py-12 flex items-center justify-center min-h-[70vh] animate-fade transition-colors">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">

        {/* Visual Panel (Hidden on small screens) */}
        <div className="hidden md:flex md:w-1/2 bg-slate-900 dark:bg-slate-950 p-12 text-white flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors font-bold text-sm"
            >
              <ChevronLeft className="w-4 h-4" /> {t.back}
            </button>
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              {mode === 'login'
                ? t.welcome
                : t.signupWelcome}
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed max-w-sm">
              {t.desc}
            </p>
          </div>

          <div className="relative z-10 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-sky-500 rounded-xl">
                <Shield className="w-6 h-6" />
              </div>
              <p className="font-bold">{t.privacy}</p>
            </div>
            <p className="text-sm text-white/40 font-medium">
              {t.privacyDesc}
            </p>
          </div>

          {/* Decorations */}
          <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-sky-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-sky-500/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              {mode === 'login' ? t.login : t.signup}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              {mode === 'login'
                ? t.noAccount
                : t.hasAccount}
              {' '}
              <button
                onClick={onToggleMode}
                className="text-sky-600 dark:text-sky-400 font-bold hover:underline"
              >
                {mode === 'login' ? t.createNow : t.loginNow}
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">{t.email}</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  required
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{t.password}</label>
                {mode === 'login' && (
                  <button type="button" className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase hover:underline">{t.forgot}</button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-2xl focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/50 focus:bg-white dark:focus:bg-slate-800 outline-none transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-sky-600 text-white font-black text-lg rounded-[2rem] btn-shadow hover:bg-sky-700 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              {mode === 'login' ? t.continue : t.signup}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800"></div>
              <span className="absolute bg-white dark:bg-slate-900 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.social}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <Chrome className="w-4 h-4" /> {t.google}
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <Github className="w-4 h-4" /> {t.github}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
