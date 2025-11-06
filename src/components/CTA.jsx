import React from 'react';

export default function CTA() {
  return (
    <section id="buy" className="relative w-full bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready for the future?</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Be among the first to experience the Nothing CMF 2 Pro. Transparent design, dynamic lighting, and performance that adapts to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">Pre-order</a>
            <a href="#features" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">Learn more</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">Concept landing page for demo purposes.</p>
      </div>
    </section>
  );
}
