import {FaArrowTrendUp} from 'react-icons/fa6';

const sources = [
  { name: 'CSV', percent: '16%', progress: 'w-[90%]' },
  { name: 'Facebook', percent: '16%', progress: 'w-[70%]' },
  { name: 'X', percent: '16%', progress: 'w-[60%]' },
  { name: 'Website', percent: '16%', progress: 'w-[40%]' },
];

export default function LeadSource() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Lead Source</h3>
        <button className="px-4 py-1.5 text-sm bg-[#3B82F6] text-white rounded-md font-medium">
          Add Leads
        </button>
      </div>
      <div className="space-y-5">
        {sources.map(({ name, icon, percent, progress }) => (
          <div key={name} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="text-[#A280FF] text-lg">{icon}</div>
                <span className="text-sm font-semibold text-gray-700">{name}</span>
              </div>
              <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-md">
                {percent} <FaArrowTrendUp className="inline-block ml-1" />
              </span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full">
              <div className={`h-1 bg-[#A280FF] rounded-full ${progress}`}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-2">
        <button className="text-sm text-[#A280FF] hover:underline font-medium">See More</button>
      </div>
    </div>
  );
}
