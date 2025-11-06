import { Database, Shield, Microscope } from "lucide-react";

const datasets = [
  {
    title: "Chest X-Ray (Pneumonia)",
    desc: "Curated samples to help identify pneumonia patterns in radiographs.",
    badge: "Images",
    icon: Microscope,
  },
  {
    title: "Dermatology (Lesions)",
    desc: "Dermoscopic images spanning common and rare skin conditions.",
    badge: "Images",
    icon: Shield,
  },
  {
    title: "Lab Panels",
    desc: "Synthetic CBC/CMP tables for trend analysis and flagging abnormalities.",
    badge: "Tables",
    icon: Database,
  },
];

export default function Datasets() {
  return (
    <section id="datasets" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Reference Datasets</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Built-in, non-identifiable samples used to compare patterns and provide context to your uploads.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {datasets.map((d) => (
            <article key={d.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-cyan-500/20 ring-1 ring-cyan-400/30">
                  <d.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="text-xs text-white/70 px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">{d.badge}</div>
              </div>
              <h3 className="mt-4 text-white font-medium">{d.title}</h3>
              <p className="mt-1.5 text-white/70 text-sm">{d.desc}</p>
              <div className="mt-4 h-1 w-full rounded bg-gradient-to-r from-cyan-400/60 via-blue-500/60 to-purple-500/60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
