import React from 'react';
import { Cpu, Battery, ScanEye, Shield } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'AI-Optimized Performance',
    desc: 'Next‑gen processor tuned with on‑device AI for fluid multitasking and gaming.',
  },
  {
    icon: Battery,
    title: 'All‑Day Battery + Fast Charge',
    desc: 'Long-lasting cell with smart power routing and 65W fast charging support.',
  },
  {
    icon: ScanEye,
    title: 'Transparent Design',
    desc: 'Signature clear elements with addressable lighting and sleek lines.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Hardware-backed security and instant updates keep your data protected.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Innovative features</h2>
          <p className="mt-3 text-white/70">Designed with transparency at its core and engineered for tomorrow.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
