import { useState } from "react";
import CourseForm from "./CourseForm";
import CourseTable from "./CourseTable";
import SGPAFooter from "./SGPAFooter";
import ConfirmDialog from "./ConfirmDialog";
import { ChevronDown, ChevronRight, Plus, Trash2 } from "lucide-react";

export default function SemesterCard({
  semester,
  onAddCourse,
  onUpdateCourse,
  onDeleteCourse,
  onRenameSemester,
  onDeleteSemester 
}) {
  const [open, setOpen] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);
  const [confirm, setConfirm] = useState({ open: false, index: null });
  const [confirmSemester, setConfirmSemester] = useState(false); // 👈 for semester delete
  const [title, setTitle] = useState(semester.title);

  const handleAddCourse = (payload) => {
    onAddCourse(semester.id, payload);
    setEditingIndex(null);
  };

  const handleEditCourse = (payload) => {
    onUpdateCourse(semester.id, editingIndex, payload);
    setEditingIndex(null);
  };

  const startEdit = (idx) => setEditingIndex(idx);
  const requestDelete = (idx) => setConfirm({ open: true, index: idx });
  const confirmDelete = () => {
    onDeleteCourse(semester.id, confirm.index);
    setConfirm({ open: false, index: null });
  };
  const cancelDelete = () => setConfirm({ open: false, index: null });

  const saveTitle = () => {
    const t = title.trim() || semester.title;
    onRenameSemester(semester.id, t);
  };

  return (
    <div className="rounded-xl bg-white border border-slate-200 shadow-soft">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center rounded-md p-1 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle"
          >
            {open ? (
              <ChevronDown className="h-5 w-5 text-slate-600" />
            ) : (
              <ChevronRight className="h-5 w-5 text-slate-600" />
            )}
          </button>
          <input
            className="text-base md:text-lg font-semibold text-slate-900 bg-transparent outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={saveTitle}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setEditingIndex(null)}
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 text-white px-3 py-2 text-sm hover:bg-brand-700"
          >
            <Plus className="h-4 w-4" />
            Add course
          </button>

          {/* Delete Semester button */}
          <button
            onClick={() => setConfirmSemester(true)}
            className="inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-3 py-2 text-sm hover:bg-red-700"
          >
            <Trash2 className="h-4 w-4" />
            Delete Semester
          </button>
        </div>
      </div>

      {open && (
        <div className="px-4 pb-4">
          <div className="mb-3">
            {editingIndex === null ? (
              <CourseForm
                initial={null}
                onSubmit={handleAddCourse}
                onCancel={() => setEditingIndex(undefined)}
              />
            ) : (
              <CourseForm
                initial={semester.courses[editingIndex]}
                onSubmit={handleEditCourse}
                onCancel={() => setEditingIndex(null)}
              />
            )}
          </div>

          <CourseTable
            courses={semester.courses}
            onEdit={startEdit}
            onDelete={requestDelete}
          />

          <SGPAFooter courses={semester.courses} />
        </div>
      )}

      {/* Confirm course delete */}
      <ConfirmDialog
        open={confirm.open}
        title="Delete course?"
        description="This action will remove the course and update SGPA and CGPA."
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />

      {/* Confirm semester delete */}
      <ConfirmDialog
        open={confirmSemester}
        title="Delete semester?"
        description="This will permanently remove the entire semester and its courses."
        onConfirm={() => {
          onDeleteSemester(semester.id);
          setConfirmSemester(false);
        }}
        onCancel={() => setConfirmSemester(false)}
      />
    </div>
  );
}


