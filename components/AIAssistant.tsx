
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Loader2, Sparkles, Activity } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: 'Hello! I am CURE AI. How can I assist you with your health queries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "You are CURE AI, a professional medical assistant for CURE Clinic. Your tone is professional, caring, and informative. Always provide helpful health advice but remind users to consult with our real doctors for definitive diagnosis. Keep responses concise.",
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', text: response.text || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Error connecting to AI service. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] transition-colors">
      {/* FAB */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-sky-600 text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform btn-shadow group"
        >
          <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-slate-900 w-[380px] h-[550px] rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-slate-900 dark:bg-black p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">CURE AI Assistant</h4>
                <div className="flex items-center gap-1 text-[10px] opacity-70">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  Online now
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar bg-slate-50/50 dark:bg-slate-950/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                  m.role === 'user' ? 'bg-sky-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-sky-600" />
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">AI is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex gap-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask health related questions..."
                className="flex-grow bg-transparent border-none focus:ring-0 text-sm font-medium px-2 outline-none dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-4 uppercase font-black tracking-widest">
              AI assistant may provide inaccurate health info.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
