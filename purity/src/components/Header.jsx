
export default function PageHeader({ title, subtitle, stats }) {
  return (
      <div className="flex items-center justify-between py-[1px] px-2 bg-white">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="text-sm text-right text-gray-600">
          <p>{stats.leads} Leads nurtured</p>
          <p>{stats.messages} Messages sent</p>
        </div>
      </div>
  );
}