export default function ConfirmDialog({ open, title, description, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-lg bg-white shadow-soft">
        <div className="p-4 border-b">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-slate-700">{description}</p>
        </div>
        <div className="p-4 flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-md bg-red-600 text-white px-3 py-2 text-sm hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
