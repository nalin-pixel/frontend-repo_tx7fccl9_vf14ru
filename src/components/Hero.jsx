import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live preview — Floating glassmorphic 3D on dark
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Nothing CMF 2 Pro
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            A futuristic flagship with transparent aesthetics, dynamic lighting, and AI-enhanced performance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#buy" className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">Pre-order now</a>
            <a href="#features" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">Explore features</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_50%)]" />
    </section>
  );
}
