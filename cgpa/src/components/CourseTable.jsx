import GradeBadge from "./GradeBadge";
import { gradeToPoints } from "../utils/grades";
import { Pencil, Trash } from "lucide-react";
import IconButton from "./IconButton";

export default function CourseTable({ courses, onEdit, onDelete }) {
  if (!courses?.length) {
    return (
      <div className="rounded-md border border-dashed border-slate-300 p-4 text-sm text-slate-600">
        No courses added yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-md border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">Course name</th>
            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">Grade</th>
            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">Grade point</th>
            <th className="px-3 py-2 text-left text-xs font-semibold text-slate-700">Credit hours</th>
            <th className="px-3 py-2 text-right text-xs font-semibold text-slate-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {courses.map((c, idx) => (
            <tr key={idx} className="hover:bg-slate-50">
              <td className="px-3 py-2 text-sm text-slate-800">{c.name}</td>
              <td className="px-3 py-2">
                <GradeBadge grade={c.grade} />
              </td>
              <td className="px-3 py-2 text-sm text-slate-800">{gradeToPoints(c.grade).toFixed(1)}</td>
              <td className="px-3 py-2 text-sm text-slate-800">{Number(c.creditHours)}</td>
              <td className="px-3 py-2 text-right">
                <div className="inline-flex items-center gap-1">
                  <IconButton title="Edit" onClick={() => onEdit(idx)}>
                    <Pencil className="h-4 w-4" />
                  </IconButton>
                  <IconButton title="Delete" onClick={() => onDelete(idx)}>
                    <Trash className="h-4 w-4 text-rose-600" />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
