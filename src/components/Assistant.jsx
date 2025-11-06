import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';

export default function Assistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m HealthXpert. Upload a report or describe symptoms, and I\'ll explain likely differentials.' },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { role: 'user', content: text };
    // Simple mock response for this static demo
    const reply = {
      role: 'assistant',
      content:
        'Based on your description, common considerations include viral URI vs. bacterial infection. Stay hydrated, track fever, and seek care for chest pain or persistent high fever. This demo does not provide medical advice.',
    };
    setMessages((m) => [...m, userMsg, reply]);
    setInput('');
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section id="assistant" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col h-[28rem]">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2 text-white/80">
            <Bot className="h-5 w-5 text-cyan-300" />
            <span className="text-sm">HealthXpert Assistant</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-start gap-3 ${m.role === 'assistant' ? '' : 'justify-end'}`}>
                {m.role === 'assistant' && (
                  <div className="p-2 rounded-md bg-cyan-500/20 ring-1 ring-cyan-400/30"><Bot className="h-4 w-4 text-cyan-300" /></div>
                )}
                <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ring-1 ${m.role === 'assistant' ? 'bg-black/40 text-white ring-white/10' : 'bg-cyan-500/20 text-cyan-100 ring-cyan-400/30'}`}>
                  {m.content}
                </div>
                {m.role === 'user' && (
                  <div className="p-2 rounded-md bg-white/10 ring-1 ring-white/20"><User className="h-4 w-4 text-white/80" /></div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="p-3 border-t border-white/10 bg-black/30">
            <div className="flex items-center gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                rows={1}
                placeholder="Describe symptoms or paste report text (demo)"
                className="flex-1 resize-none rounded-md bg-black/50 text-white placeholder-white/40 px-3 py-2 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-cyan-400/40"
              />
              <button onClick={send} className="inline-flex items-center gap-2 rounded-md bg-cyan-500/20 text-cyan-300 px-3 py-2 ring-1 ring-inset ring-cyan-400/40 hover:bg-cyan-500/30 transition">
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-cyan-500/10 to-transparent p-6 md:p-8 text-white">
          <h3 className="text-lg font-medium">How it works</h3>
          <ul className="mt-4 space-y-3 text-white/80 text-sm list-disc list-inside">
            <li>Compare symptoms and findings with curated datasets.</li>
            <li>Highlight possible differentials and red‑flag symptoms.</li>
            <li>Summarize reports into plain language explanations.</li>
          </ul>
          <p className="mt-4 text-xs text-white/60">Disclaimer: This demo is for educational purposes only and not a substitute for professional medical advice.</p>
        </div>
      </div>
    </section>
  );
}
