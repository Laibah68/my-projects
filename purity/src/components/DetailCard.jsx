import { FaEnvelope } from "react-icons/fa";

export default function DetailCard({ leftRows, rightRows }) {
  return (
    <div className="flex h-[80px] bg-white rounded shadow mb-4 overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-end p-4 ">
        <FaEnvelope className="text-black" />
        {leftRows.map((text, i) => {
          let textColor = "text-gray-700";
          if (text === "Failed") textColor = "text-red-500";
          if (text.toLowerCase().includes("success")) textColor = "text-green-500";

          return (
            <div key={i} className={`text-[9px] text-right w-full font-semibold ${textColor}`}>
              {text}
            </div>
          );
        })}
      </div>

      {/* Right Section */}
      <div className="bg-gray-200 border-l-4 border-teal-500 p-3 flex-1">
        {rightRows.map((text, i) => (
          <div key={i} className="text-[11px] text-gray-800 mb-2 font-semibold">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
