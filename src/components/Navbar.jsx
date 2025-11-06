import { Stethoscope } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-md bg-cyan-500/20 ring-1 ring-cyan-400/40">
            <Stethoscope className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HealthXpert</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#datasets" className="hover:text-white transition">Datasets</a>
          <a href="#assistant" className="hover:text-white transition">Assistant</a>
          <a href="#upload" className="hover:text-white transition">Upload</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#assistant" className="inline-flex items-center gap-2 rounded-md bg-cyan-500/20 text-cyan-300 px-3 py-2 ring-1 ring-inset ring-cyan-400/40 hover:bg-cyan-500/30 transition text-sm">
          Try Diagnosis
        </a>
      </div>
    </header>
  );
}
