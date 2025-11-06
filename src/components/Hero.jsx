import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_10%_50%,rgba(0,255,255,0.25),transparent),radial-gradient(60%_60%_at_80%_20%,rgba(59,130,246,0.2),transparent)] mix-blend-screen" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-black/30 ring-1 ring-white/10 rounded-2xl p-6 md:p-8 text-white">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
              <Sparkles className="h-4 w-4" />
              AI-Powered Medical Insights
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">HealthXpert — Diagnose Smarter, Faster</h1>
            <p className="mt-3 text-white/80 md:text-lg">Upload medical reports and disease images. Our assistant highlights key findings, compares against curated datasets, and explains in plain language.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#upload" className="inline-flex items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300 px-4 py-2 ring-1 ring-inset ring-cyan-400/40 hover:bg-cyan-500/30 transition">Upload Reports</a>
              <a href="#assistant" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-4 py-2 ring-1 ring-white/20 hover:bg-white/20 transition">Chat with AI</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
