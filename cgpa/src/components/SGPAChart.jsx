import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import { computeSGPA } from "../utils/gpa";

export default function SGPAChart({ semesters }) {
  const data = semesters.map((s, idx) => ({
    name: s.title || `Semester ${idx + 1}`,
    sgpa: computeSGPA(s.courses)
  }));

  return (
    <div className="rounded-xl bg-white border border-slate-200 shadow-soft p-4">
      <h3 className="text-base md:text-lg font-semibold text-slate-900">SGPA trend</h3>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 16, left: 8, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 4]} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="sgpa" stroke="#1a74db" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
