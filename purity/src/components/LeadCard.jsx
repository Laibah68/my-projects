import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const statusStyles = {
  Active: "bg-teal-500 text-white",
  Finished: "bg-red-500 text-white",
  Responded: "bg-blue-500 text-white",
  Stopped: "bg-gray-500 text-white",
};

export default function LeadCard({ lead, onClick }) {
  return (
    <div
      className="grid grid-cols-10 items-center gap-2 py-1 px-2 border-b hover:bg-gray-50 cursor-pointer text-[11px] leading-none"
      onClick={() => onClick(lead)}
    >
      {/* 1. Status */}
      <div className="min-w-[100px] p-1">
        <button
          className={`px-4 py-2 rounded text-[10px] ${
            statusStyles[lead.status] || "bg-gray-200 text-gray-700"
          }`}
          title={lead.status}
        >
          {lead.status}
        </button>
      </div>

      {/* 2. Details */}
      <div className="min-w-[100px] p-1 ">
        <div className="truncate text-[10px] font-light" title={lead.details}>
          {lead.details}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
          <div
            className="bg-blue-500 h-1 rounded-full"
            style={{ width: "40%" }}
          ></div>
        </div>
      </div>

      {/* 3. Name */}
      <div className="min-w-[100px] p-1 truncate text-[10px] font-normal" title={lead.name}>
        {lead.name}
      </div>

      {/* 4. Contact Info */}
      <div
        className="min-w-[100px] p-1 flex gap-2 items-center truncate"
        title={`${lead.contact} | ${lead.contact}@mail.com`}
      >
        <div className="bg-teal-500 p-2 rounded text-white text-lg flex items-center justify-center shrink-0">
          <FaPhoneAlt />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-gray-500 text-[10px]" />
            <span className="text-[10px] truncate" title={lead.contact}>
              {lead.contact}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaEnvelope className="text-gray-500 text-[10px]" />
            <span className="text-[10px] truncate" title={`${lead.contact}@mail.com`}>
              {lead.contact}@mail.com
            </span>
          </div>
        </div>
      </div>

      {/* 5. Source */}
      <div className="min-w-[120px] p-1 truncate" title={lead.source}>
        {lead.source}
      </div>

      {/* 6. Type */}
      <div className="min-w-[100px] p-1 truncate" title={lead.type}>
        {lead.type}
      </div>

      {/* 7. Received */}
      <div className="min-w-[120px] p-1 truncate" title={lead.received}>
        {lead.received}
      </div>

      {/* 8. Last Activity */}
      <div className="min-w-[120px] p-1 truncate" title={lead.lastActivity}>
        {lead.lastActivity}
      </div>

      {/* 9. Activity */}
      <div className="min-w-[120px] p-1 truncate" title={lead.activity}>
        {lead.activity}
      </div>

      {/* 10. Action */}
      <div className="min-w-[100px] p-1">
        <button
          className="bg-teal-500 text-white text-[11px] px-4 py-3 rounded"
          title={lead.actions}
        >
          {lead.actions}
        </button>
      </div>
    </div>
  );
}
