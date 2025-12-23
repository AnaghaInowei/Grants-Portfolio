
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, BrainCircuit } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const AIInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am Aura\'s Design Intelligence. How can I help you explore the 3D world today? Ask me about her process, tools, or for a creative design prompt.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 h-[calc(100vh-120px)] flex flex-col">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 p-3 bg-indigo-500/10 rounded-2xl mb-4">
          <BrainCircuit size={32} className="text-indigo-500" />
        </div>
        <h1 className="text-3xl font-bold">Design Intelligence</h1>
        <p className="text-slate-400 text-sm">Powered by Gemini 3 Flash</p>
      </div>

      <div className="flex-1 overflow-hidden glass rounded-3xl border border-slate-800 flex flex-col relative">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-indigo-600' : 'bg-slate-800'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-900 border border-slate-800 text-slate-300'
                }`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 items-center text-slate-500 text-sm">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                  <Loader2 size={16} className="animate-spin" />
                </div>
                <span>Synthesizing response...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-950/50 border-t border-slate-800">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about 3D rendering tips or Aura's workflow..."
              className="w-full bg-slate-900 border border-slate-700 rounded-full px-6 py-4 pr-16 focus:outline-none focus:border-indigo-500 transition-colors text-slate-200"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-500 mt-4 uppercase tracking-[0.2em]">
            This AI can hallucinate. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIInterface;
