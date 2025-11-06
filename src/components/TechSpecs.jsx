import React from 'react';

const specs = [
  { label: 'Display', value: '6.7" AMOLED, 120Hz adaptive' },
  { label: 'Chipset', value: 'Octa-core 4nm, AI engine v3' },
  { label: 'Camera', value: '50MP + 50MP (UW), 4K60 video' },
  { label: 'Battery', value: '5200mAh, 65W wired / 30W wireless' },
  { label: 'Materials', value: 'Aluminum frame, transparent back' },
  { label: 'OS', value: 'NothingOS based on Android' },
];

export default function TechSpecs() {
  return (
    <section id="tech" className="relative w-full bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tech specs</h2>
          <p className="mt-3 text-white/70">The essentials that power the experience.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {specs.map((s) => (
            <div key={s.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="text-white/60">{s.label}</span>
              <span className="font-medium">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
