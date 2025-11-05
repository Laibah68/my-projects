// import LeadCard from "./LeadCard";

// export default function LeadTable({ leads, onSelect }) {
//   return (
//     <div className="w-full max-w-[845px] h-[280px] overflow-x-auto scrollbar-hide bg-white shadow rounded items-center">
//       <div className="min-w-[1200px] h-full flex flex-col">
//         {/* Table Header */}
//         <div className="grid grid-cols-10 text-xs font-semibold px-4 py-2 border-b sticky top-0 bg-white z-10">
//           <div className="min-w-[100px]">Status</div>
//           <div className="min-w-[150px]">Details</div>
//           <div className="min-w-[120px]">Name</div>
//           <div className="min-w-[200px]">Contact Info</div>
//           <div className="min-w-[120px]">Source</div>
//           <div className="min-w-[100px]">Type</div>
//           <div className="min-w-[120px]">Received</div>
//           <div className="min-w-[120px]">Last Activity</div>
//           <div className="min-w-[120px]">Activity</div>
//           <div className="min-w-[100px]">Actions</div>
//         </div>

//         {/* Scrollable Rows */}
//         <div className="overflow-y-auto scrollbar-hide h-[440px]">
//           {leads.map((lead, i) => (
//             <div key={i} className={i % 2 === 0 ? "bg-[#4FD1C51A]" : "bg-white"}>
//               <LeadCard lead={lead} onClick={onSelect} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import LeadCard from "./LeadCard";

// export default function LeadTable({ leads, onSelect, isSidebarHidden }) {
//   return (
//     <div
//       className={`w-full transition-all duration-300 ${
//         isSidebarHidden ? "max-w-full" : "max-w-[876px]"
//       } h-[300px] overflow-x-auto scrollbar-hide bg-white shadow rounded items-center`}
//     >
//       {/* Table Wrapper */}
//       <div
//         className={`${
//           isSidebarHidden ? "min-w-[1100px]" : "min-w-[1200px]"
//         } flex flex-col`}
//       >
//         {/* Table Header */}
//         <div className="hidden md:grid grid-cols-10 text-xs font-semibold px-4 py-2 border-b sticky top-0 bg-white z-10">
//           <div className="min-w-[100px]">Status</div>
//           <div className="min-w-[150px]">Details</div>
//           <div className="min-w-[120px]">Name</div>
//           <div className="min-w-[200px]">Contact Info</div>
//           <div className="min-w-[120px]">Source</div>
//           <div className="min-w-[100px]">Type</div>
//           <div className="min-w-[120px]">Received</div>
//           <div className="min-w-[120px]">Last Activity</div>
//           <div className="min-w-[120px]">Activity</div>
//           <div className="min-w-[100px]">Actions</div>
//         </div>

//         {/* Table Rows (Desktop) */}
//         <div className="hidden md:block overflow-y-auto scrollbar-hide h-[440px]">
//           {leads.map((lead, i) => (
//             <div
//               key={i}
//               className={`${i % 2 === 0 ? "bg-[#4FD1C51A]" : "bg-white"}`}
//             >
//               <LeadCard lead={lead} onClick={onSelect} />
//             </div>
//           ))}
//         </div>

//         {/* 📱 Mobile View (Compact Card Layout) */}
//         <div className="block md:hidden space-y-3 px-2 py-2">
//           {leads.map((lead, i) => (
//             <div
//               key={i}
//               onClick={() => onSelect(lead)}
//               className="bg-white shadow-sm rounded-lg p-3 border cursor-pointer hover:bg-gray-50"
//             >
//               <div className="flex justify-between">
//                 <span className="font-semibold text-sm">{lead.name}</span>
//                 <span
//                   className={`text-xs px-2 py-0.5 rounded ${
//                     lead.status === "Active"
//                       ? "bg-green-100 text-green-700"
//                       : lead.status === "Finished"
//                       ? "bg-blue-100 text-blue-700"
//                       : lead.status === "Responded"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {lead.status}
//                 </span>
//               </div>
//               <p className="text-xs text-gray-500 mt-1">{lead.contact}</p>
//               <p className="text-xs text-gray-500">{lead.source}</p>
//               <p className="text-xs text-gray-400 mt-1">
//                 Last Activity: {lead.lastActivity}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import LeadCard from "./LeadCard";

export default function LeadTable({ leads, onSelect, isSidebarHidden }) {
  return (
    <div
      className={`${
        isSidebarHidden ? "w-full" : "w-[875px]" // 👈 Sidebar visible → 900px width
      } bg-white shadow rounded transition-all duration-300 overflow-hidden`}
    >
      {/* Table Container */}
      <div className="flex flex-col">
        {/* 🧭 Header */}
        <div className="hidden md:grid grid-cols-10 text-xs font-semibold px-4 py-2 border-b sticky top-0 bg-white z-10">
          <div className="min-w-[90px]">Status</div>
          <div className="min-w-[130px]">Details</div>
          <div className="min-w-[120px]">Name</div>
          <div className="min-w-[150px]">Contact Info</div>
          <div className="min-w-[120px]">Source</div>
          <div className="min-w-[90px]">Type</div>
          <div className="min-w-[110px]">Received</div>
          <div className="min-w-[120px]">Last Activity</div>
          <div className="min-w-[130px]">Activity</div>
          <div className="min-w-[90px]">Actions</div>
        </div>

        {/* 🖥 Desktop Table */}
        <div className="hidden md:block relative overflow-auto scrollbar-hide h-[280px]">
          {/* 👇 Ye width control karega columns visibility aur horizontal scroll */}
          <div
            className={`flex flex-col ${
              isSidebarHidden
                ? "min-w-[100px]" // Sidebar hidden → all columns visible
                : "min-w-[1000px]" // Sidebar visible → till 'Received' visible
            }`}
          >
            {leads.map((lead, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-[#4FD1C51A]" : "bg-white"
                } hover:bg-gray-50 transition`}
              >
                <LeadCard lead={lead} onClick={onSelect} />
              </div>
            ))}
          </div>
        </div>

        {/* 📱 Mobile Layout */}
        <div className="block md:hidden relative overflow-auto scrollbar-hide">
          <div className="space-y-3 px-2 py-2">
            {leads.map((lead, i) => (
              <div
                key={i}
                onClick={() => onSelect(lead)}
                className="bg-white shadow-sm rounded-lg p-3 border cursor-pointer hover:bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm">{lead.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      lead.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : lead.status === "Finished"
                        ? "bg-blue-100 text-blue-700"
                        : lead.status === "Responded"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>

                {/* 📱 Compact 3-column layout */}
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mt-2">
                  <p>{lead.contact}</p>
                  <p>{lead.source}</p>
                  <p>{lead.lastActivity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
