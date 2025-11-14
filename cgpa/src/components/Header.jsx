import { FileDown, Plus, Sparkles } from "lucide-react";

export default function Header({ onAddSemester, onExportPdf }) {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-brand-600" />
          <h1 className="text-lg md:text-xl font-semibold text-slate-900">
            SGPA & CGPA Tracker
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onAddSemester}
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 text-white px-3 py-2 text-sm shadow-soft hover:bg-brand-700"
          >
            <Plus className="h-4 w-4" />
            Add semester
          </button>
          <button
            onClick={onExportPdf}
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm shadow-soft hover:bg-slate-800"
          >
            <FileDown className="h-4 w-4" />
            Export PDF
          </button>
        </div>
      </div>
    </header>
  );
}
