export default function Card({ title, value, subtitle, icon }) {
  return (
    <div className= "w-full p-2 text-white bg-teal-500 rounded shadow">
        <p className="text-xs text-end">{title}</p>
      <div className="flex items-center justify-between mb-1">
      {icon}
      <h2 className="text-2xl font-bold">{value}</h2>
      </div>
      <p className="text-xs text-end">{subtitle}</p>
    </div>
  );
}
