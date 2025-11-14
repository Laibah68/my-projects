import { useEffect, useState } from "react";
import { GRADES } from "../utils/grades";
import { Check, X } from "lucide-react";

export default function CourseForm({ initial, onSubmit, onCancel }) {
  const [name, setName] = useState(initial?.name || "");
  const [creditHours, setCreditHours] = useState(initial?.creditHours || 3);
  const [grade, setGrade] = useState(initial?.grade || "A");

  useEffect(() => {
    setName(initial?.name || "");
    setCreditHours(initial?.creditHours || 3);
    setGrade(initial?.grade || "A");
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({
      name: name.trim(),
      creditHours: Number(creditHours),
      grade
    });

    setName("");
    setCreditHours(3);
    setGrade("A");
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3">
      <div>
        <label className="block text-xs font-medium text-slate-700">Course name</label>
        <input
          type="text"
          value={name}
          placeholder="e.g., English"
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700">Credit hours</label>
        <input
          type="number"
          min={0}
          value={creditHours}
          onChange={(e) => setCreditHours(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700">Grade</label>
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
        >
          {GRADES.map((g) => (
            <option key={g.value} value={g.value}>
              {g.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 pt-5 md:pt-6">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-brand-600 text-white px-3 py-2 text-sm hover:bg-brand-700"
        >
          <Check className="h-4 w-4" />
          {initial ? "Save" : "Add course"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
        >
          <X className="h-4 w-4" />
          Cancel
        </button>
      </div>
    </form>
  );
}
