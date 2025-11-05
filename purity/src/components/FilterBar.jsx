export default function FilterBar() {
  return (
    <div className="flex justify-end gap-4 mb-4">
      <select className="p-2 text-xs border rounded">
        <option>Last 4 weeks</option>
        <option>Last 3 months</option>
        <option>Last year</option>
      </select>
      <select className="p-2 text-xs border rounded">
        <option>All</option>
        <option>Active</option>
        <option>Archived</option>
      </select>
    </div>
  );
}
