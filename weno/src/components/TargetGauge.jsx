export default function TargetGauge() {
  const percentage = 50;
  const radius = 80;
  const strokeWidth = 20;
  const circumference = Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm text-center space-y-3">
      <div className="relative w-48 h-28 mx-auto">
        <svg width="100%" height="100%" viewBox="0 0 200 100">
          <path
            d="M20,100 A80,80 0 0,1 180,100"
            stroke="url(#bg)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E9E4FF" />
              <stop offset="100%" stopColor="#F5F3FF" />
            </linearGradient>
          </defs>
          <path
            d="M20,100 A80,80 0 0,1 180,100"
            stroke="#A78BFA"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-4">
          <span className="text-3xl font-bold text-[#A78BFA]">{percentage}%</span>
          <span className="text-sm text-gray-500">Target Leads</span>
        </div>
      </div>
      <button className="mt-2 px-16 py-2 border border-[#A78BFA] text-[#A78BFA] rounded-xl text-sm font-medium hover:bg-[#f5f3ff] transition">
        See Details
      </button>
    </div>
  );
}
