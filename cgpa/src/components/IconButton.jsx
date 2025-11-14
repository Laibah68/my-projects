export default function IconButton({ title, className = "", onClick, children }) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100 text-slate-600 ${className}`}
    >
      {children}
    </button>
  );
}
