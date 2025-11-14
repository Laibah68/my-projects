import { computeSGPA, totalCreditHours } from "../utils/gpa";

export default function SGPAFooter({ courses }) {
  const sgpa = computeSGPA(courses);
  const ch = totalCreditHours(courses);

  return (
    <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2 rounded-md bg-slate-50 border border-slate-200 p-3">
      <p className="text-sm text-slate-700">
        <span className="font-semibold">Total credit hours:</span> {ch}
      </p>
      <p className="text-sm text-slate-800">
        <span className="font-semibold">SGPA:</span>{" "}
        <span className="inline-flex items-center rounded bg-brand-50 px-2 py-1 text-brand-700">
          {sgpa.toFixed(2)}
        </span>
      </p>
    </div>
  );
}
