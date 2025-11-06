import { useState } from 'react';
import { UploadCloud, Image as ImageIcon, FileText, X } from 'lucide-react';

export default function Upload() {
  const [files, setFiles] = useState([]);

  const onDrop = (e) => {
    e.preventDefault();
    const incoming = Array.from(e.dataTransfer.files || []);
    if (!incoming.length) return;
    setFiles((prev) => [...prev, ...incoming]);
  };

  const onInput = (e) => {
    const incoming = Array.from(e.target.files || []);
    if (!incoming.length) return;
    setFiles((prev) => [...prev, ...incoming]);
  };

  const removeAt = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  return (
    <section id="upload" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="rounded-2xl border border-dashed border-cyan-400/40 bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3 text-cyan-300">
              <UploadCloud className="h-6 w-6" />
              <h3 className="text-lg font-medium">Upload medical reports and images</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">Drag & drop PDFs, JPEG, or PNG files. You can also browse to select.</p>

            <label className="mt-6 inline-flex items-center gap-2 rounded-md bg-cyan-500/20 text-cyan-300 px-4 py-2 ring-1 ring-inset ring-cyan-400/40 hover:bg-cyan-500/30 transition cursor-pointer">
              <input onChange={onInput} type="file" multiple accept=".pdf,image/*" className="hidden" />
              Browse Files
            </label>

            {files.length > 0 && (
              <ul className="mt-6 space-y-3">
                {files.map((f, idx) => (
                  <li key={idx} className="flex items-center justify-between rounded-md bg-black/40 px-3 py-2 ring-1 ring-white/10">
                    <div className="flex items-center gap-3 text-white/90">
                      {f.type.startsWith('image') ? (
                        <ImageIcon className="h-5 w-5 text-cyan-300" />
                      ) : (
                        <FileText className="h-5 w-5 text-cyan-300" />
                      )}
                      <span className="text-sm truncate max-w-[18rem]">{f.name}</span>
                      <span className="text-xs text-white/50">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                    <button onClick={() => removeAt(idx)} className="p-1.5 rounded hover:bg-white/10 text-white/70">
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-white text-lg font-medium">Privacy-first processing</h3>
            <p className="mt-2 text-white/70 text-sm">Files are handled locally in this demo for preview only. In a production version, they would be securely uploaded for analysis and automatically redacted.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-b from-cyan-500/10 to-transparent p-4 ring-1 ring-white/10">
                <p className="text-sm text-white/80">PDF Reports</p>
                <p className="text-xs text-white/60 mt-1">Labs, notes, discharge summaries</p>
              </div>
              <div className="rounded-lg bg-gradient-to-b from-blue-500/10 to-transparent p-4 ring-1 ring-white/10">
                <p className="text-sm text-white/80">Imaging</p>
                <p className="text-xs text-white/60 mt-1">X‑rays, CT slices, dermatology photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
