import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Datasets from './components/Datasets';
import Upload from './components/Upload';
import Assistant from './components/Assistant';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <main>
        <Datasets />
        <Upload />
        <Assistant />
      </main>
      <footer id="contact" className="border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} HealthXpert — Educational demo</p>
          <div className="text-xs text-white/50">Dark theme • Motion accents • 3D hero</div>
        </div>
      </footer>
    </div>
  );
}
