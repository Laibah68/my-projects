export default function GradeBadge({ grade }) {
  const map = {
    "A+": "bg-emerald-100 text-emerald-700",
    "A": "bg-emerald-100 text-emerald-700",
    "A-": "bg-emerald-100 text-emerald-700",
    "B+": "bg-sky-100 text-sky-700",
    "B": "bg-sky-100 text-sky-700",
    "B-": "bg-sky-100 text-sky-700",
    "C+": "bg-amber-100 text-amber-800",
    "C": "bg-amber-100 text-amber-800",
    "C-": "bg-amber-100 text-amber-800",
    "D": "bg-orange-100 text-orange-800",
    "F": "bg-rose-100 text-rose-800"
  };
  const cls = map[grade] || "bg-slate-100 text-slate-700";
  return (
    <span className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ${cls}`}>
      {grade}
    </span>
  );
}
