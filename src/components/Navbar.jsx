import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">CMF 2 Pro</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#tech" className="hover:text-white transition">Technology</a>
          <a href="#buy" className="hover:text-white transition">Buy</a>
        </div>
        <button className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition">
          Pre-order
        </button>
      </nav>
    </header>
  );
}
