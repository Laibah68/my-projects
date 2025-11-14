import { computeCGPA } from "../utils/gpa";

export default function CGPASummary({ semesters }) {
  const cgpa = computeCGPA(semesters);

  return (
    <div className="rounded-xl bg-white border border-slate-200 shadow-soft p-4">
      <h3 className="text-base md:text-lg font-semibold text-slate-900">Overall CGPA</h3>
      <p className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-brand-700">
        {cgpa.toFixed(2)}
      </p>
      <p className="mt-1 text-sm text-slate-600">
        CGPA is weighted by each semester’s total credit hours.
      </p>
    </div>
  );
}
