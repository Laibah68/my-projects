export default function MessageCard({ sender, message, timestamp }) {
  const isYou = sender === "You";

  return (
    <div className="p-2 bg-gray-100">
    <div className="bg-[#4FD1C51A] rounded shadow p-2 ">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-1">
        {isYou ? (
          // You: Delivered + You on left, timestamp on right
          <>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 text-xs rounded bg-teal-500 text-white">
                Delivered
              </button>
              <span className="text-xs text-gray-600">{sender}</span>
            </div>
            <span className="text-xs text-gray-400">{timestamp}</span>
          </>
        ) : (
          // Other: timestamp on left, Delivered + Other on right
          <>
            <span className="text-xs text-gray-400">{timestamp}</span>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 text-xs rounded bg-teal-500 text-white">
                Delivered
              </button>
              <span className="text-xs text-gray-600">{sender}</span>
            </div>
          </>
        )}
      </div>

      {/* Message Row */}
      <div className={`text-sm ${isYou ? "text-left" : "text-right"} text-gray-800`}>
        {message}
      </div>
    </div>
    </div>

  );
}
