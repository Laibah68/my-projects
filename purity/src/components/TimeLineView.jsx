import { FaCheck, FaPlus, FaEnvelope, FaPhone, FaFacebookMessenger, FaUser } from "react-icons/fa";
export default function TimelineView() {
  const timelineData = [
    { icon: <FaCheck />, text: "Campaign was Manually Stopped", time: "10/11/2018 09:54 AM" },
    { icon: <FaUser />, text: "Contact imported to Ritual", time: "10/11/2018 09:54 AM" },
    { icon: <FaEnvelope />, text: "E-mail Sent", time: "10/11/2018 09:54 AM" },
    { icon: <FaFacebookMessenger />, text: "Hey Waldon, it's Pat from deft sales, just sent you an email to schedule a demo, but what information would you like in the meantime?", time: "10/11/2018 09:54 AM" },
    { icon: <FaPhone />, text: "First call, canceled - 1x.", time: "10/11/2018 09:54 AM" },
    { icon: <FaPlus />, text: "Contact added", time: "10/11/2018 09:54 AM" },
  ];

  return (
    <div className=" bg-white rounded shadow p-4 h-[190px] flex flex-col">
      {/* Top Controls (Always Visible) */}
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" className="accent-teal-500" />
          Show Future Steps
        </label>
        <button className="bg-green-500 text-white text-xs px-3 py-1 rounded">+ Add Notes</button>
      </div>

      {/* Scrollable Timeline Entries */}
      <div className="relative pl-6 overflow-y-auto scrollbar-hide pr-2 flex-1">
        {/* Vertical Line */}
        <div className="absolute left-[36px] top-[6px] w-[2px] h-full bg-gray-200 z-0"></div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-4">
          {timelineData.map((entry, i) => (
            <div key={i} className="flex items-start gap-2">
              <div
                className={`mt-[6px] z-10 w-[28px] h-[28px] flex items-center justify-center rounded-full text-white text-[14px] ${
                  i === 0 ? "bg-orange-500" : "bg-teal-500"
                }`}
              >
                {entry.icon}
              </div>
              <div className="flex flex-col bg-gray-200 p-2 rounded w-full text-[11px]">
                <span className="font-semibold text-gray-800">{entry.text}</span>
                <span className="text-gray-500">{entry.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
