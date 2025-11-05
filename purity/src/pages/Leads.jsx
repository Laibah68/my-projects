// import Topbar from "../components/Topbar";
// import PageHeader from "../components/Header";
// import LeadTable from "../components/LeadTable";
// import { FaSearch } from "react-icons/fa";
// import ActionButton from "../components/ActionButton";
// import { useState } from "react";
// import LeadDetail from "../components/LeadDetail";


// export default function Leads() {
//   // const user = { name: "Jonathan", role: "Super Admin" };
//   // const stats = { leads: 13, messages: 153 };
//   const [selectedLead, setSelectedLead] = useState(null);

//  const dummyLeads = [
//   {
//     status: "Active",
//     details: "Competition with:40%",
//     name: "Waldoon Chui",
//     contact: "0300-1112233",
//     source: "SmartHouse",
//     type: "77008",
//     received: "Sep 17, 2020",
//     lastActivity: "Sep 17, 2020",
//     activity: "Lead Created",
//     actions: "Details"
//   },
//   {
//     status: "Finished",
//     details: "Competition with:40%",
//     name: "Malcom Choi",
//     contact: "0301-2223344",
//     source: "Swift Sales",
//     type: "77009",
//     received: "Oct 1, 2020",
//     lastActivity: "Oct 2, 2020",
//     activity: "Meeting Scheduled",
//     actions: "Details"
//   },
//   {
//     status: "Responded",
//     details: "Competition with:40%",
//     name: "Ayesha Khan",
//     contact: "0302-3334455",
//     source: "Web Form",
//     type: "77010",
//     received: "Nov 5, 2020",
//     lastActivity: "Nov 6, 2020",
//     activity: "Email Sent",
//     actions: "Details"
//   },
//   {
//     status: "Stopped",
//     details: "Competition with:40%",
//     name: "Zainab Malik",
//     contact: "0303-4445566",
//     source: "Referral",
//     type: "77011",
//     received: "Dec 12, 2020",
//     lastActivity: "Dec 13, 2020",
//     activity: "Call Scheduled",
//     actions: "Details"
//   },
//   {
//     status: "Finished",
//     details: "Competition with:40%",
//     name: "Bilal Ahmed",
//     contact: "0304-5556677",
//     source: "Sales Team",
//     type: "77012",
//     received: "Jan 3, 2021",
//     lastActivity: "Jan 4, 2021",
//     activity: "Meeting Completed",
//     actions: "Details"
//   },
//   {
//     status: "Active",
//     details: "Competition with:40%",
//     name: "Sara Iqbal",
//     contact: "0305-6667788",
//     source: "Facebook",
//     type: "77013",
//     received: "Feb 14, 2021",
//     lastActivity: "Feb 15, 2021",
//     activity: "Follow-up Sent",
//     actions: "Details"
//   },
//   {
//     status: "Responded",
//     details: "Competition with:40%",
//     name: "Hamza Tariq",
//     contact: "0306-7778899",
//     source: "Phone",
//     type: "77014",
//     received: "Mar 22, 2021",
//     lastActivity: "Mar 23, 2021",
//     activity: "Call Logged",
//     actions: "Details"
//   },
//   {
//     status: "Finished",
//     details: "Competition with:40%",
//     name: "Nida Shah",
//     contact: "0307-8889900",
//     source: "Mailchimp",
//     type: "77015",
//     received: "Apr 10, 2021",
//     lastActivity: "Apr 11, 2021",
//     activity: "Email Opened",
//     actions: "Details"
//   },
//   {
//     status: "Active",
//     details: "Competition with:40%",
//     name: "Usman Raza",
//     contact: "0308-9990011",
//     source: "Expo 2021",
//     type: "77016",
//     received: "May 5, 2021",
//     lastActivity: "May 6, 2021",
//     activity: "Meeting Scheduled",
//     actions: "Details"
//   },
//   {
//     status: "Stopped",
//     details: "Competition with:40%",
//     name: "Fatima Noor",
//     contact: "0309-0001122",
//     source: "Website Chat",
//     type: "77017",
//     received: "Jun 1, 2021",
//     lastActivity: "Jun 2, 2021",
//     activity: "Chat Transcript Saved",
//     actions: "Details"
//   }
// ];


//   return (
//     <div className="flex flex-col w-full h-full">
//       {/* <div className="bg-white shadow z-10">
//       </div> */}
//       {selectedLead ? (
//     <div className="flex-1">
//       <LeadDetail lead={selectedLead} />
//     </div>
//   ) : (
//     <>
//   <div className="flex-1 px-2 bg-gray-100">
//         <div className="flex items-center justify-between mb-2 py-2">
//            <div className="relative w-1/2.5">
//            <FaSearch className="absolute top-3 left-2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Type to search..."
//             className="w-1/2.5 pl-8 py-1.5 border rounded"
//           />
//           </div>
//           <div className="flex gap-2">
//              <ActionButton label="Details" />
//               <ActionButton label="Transfer" />
//               <ActionButton label="Delete" />
//               <ActionButton label="Assign" />
//               <button className="px-2 text-black font-bold bg-white border border-black rounded">⋯</button>
//           </div>
//         </div>
        

//       <div className="px-2">
//         <LeadTable leads={dummyLeads} onSelect={setSelectedLead} />
//         </div>
//       </div>
      
//       </>
// )}
// </div>
    
//   );
// }




import Topbar from "../components/Topbar";
import PageHeader from "../components/Header";
import LeadTable from "../components/LeadTable";
import { FaSearch } from "react-icons/fa";
import ActionButton from "../components/ActionButton";
import { useState } from "react";
import LeadDetail from "../components/LeadDetail";

export default function Leads({ isSidebarHidden }) {
  const [selectedLead, setSelectedLead] = useState(null);

  const dummyLeads = [
    { status: "Active", details: "Competition with:40%", name: "Waldoon Chui", contact: "0300-1112233", source: "SmartHouse", type: "77008", received: "Sep 17, 2020", lastActivity: "Sep 17, 2020", activity: "Lead Created", actions: "Details" },
    { status: "Finished", details: "Competition with:40%", name: "Malcom Choi", contact: "0301-2223344", source: "Swift Sales", type: "77009", received: "Oct 1, 2020", lastActivity: "Oct 2, 2020", activity: "Meeting Scheduled", actions: "Details" },
    { status: "Responded", details: "Competition with:40%", name: "Ayesha Khan", contact: "0302-3334455", source: "Web Form", type: "77010", received: "Nov 5, 2020", lastActivity: "Nov 6, 2020", activity: "Email Sent", actions: "Details" },
    { status: "Stopped", details: "Competition with:40%", name: "Zainab Malik", contact: "0303-4445566", source: "Referral", type: "77011", received: "Dec 12, 2020", lastActivity: "Dec 13, 2020", activity: "Call Scheduled", actions: "Details" },
    { status: "Finished", details: "Competition with:40%", name: "Bilal Ahmed", contact: "0304-5556677", source: "Sales Team", type: "77012", received: "Jan 3, 2021", lastActivity: "Jan 4, 2021", activity: "Meeting Completed", actions: "Details" },
    { status: "Active", details: "Competition with:40%", name: "Sara Iqbal", contact: "0305-6667788", source: "Facebook", type: "77013", received: "Feb 14, 2021", lastActivity: "Feb 15, 2021", activity: "Follow-up Sent", actions: "Details" },
    { status: "Responded", details: "Competition with:40%", name: "Hamza Tariq", contact: "0306-7778899", source: "Phone", type: "77014", received: "Mar 22, 2021", lastActivity: "Mar 23, 2021", activity: "Call Logged", actions: "Details" },
    { status: "Finished", details: "Competition with:40%", name: "Nida Shah", contact: "0307-8889900", source: "Mailchimp", type: "77015", received: "Apr 10, 2021", lastActivity: "Apr 11, 2021", activity: "Email Opened", actions: "Details" },
    { status: "Active", details: "Competition with:40%", name: "Usman Raza", contact: "0308-9990011", source: "Expo 2021", type: "77016", received: "May 5, 2021", lastActivity: "May 6, 2021", activity: "Meeting Scheduled", actions: "Details" },
    { status: "Stopped", details: "Competition with:40%", name: "Fatima Noor", contact: "0309-0001122", source: "Website Chat", type: "77017", received: "Jun 1, 2021", lastActivity: "Jun 2, 2021", activity: "Chat Transcript Saved", actions: "Details" },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-gray-100 overflow-x-hidden">
      {/* ✅ Topbar + Header (same as dashboard on mobile) */}
      <div className="block md:hidden bg-white shadow-sm sticky top-0 z-20">
        {/* <Topbar /> */}
        {/* <PageHeader title="Leads" /> */}
      </div>

      {selectedLead ? (
        <div className="flex-1">
          <LeadDetail lead={selectedLead} />
        </div>
      ) : (
        <>
          <div className="flex-1 px-2  py-2">
            {/* 🔍 Search + Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-3">
              {/* Search Input */}
              <div className="relative w-full sm:w-1/2 md:w-2/5 lg:w-1/3">
                <FaSearch className="absolute top-3 left-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full pl-8 pr-2 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-end gap-2">
                <ActionButton label="Details" />
                <ActionButton label="Transfer" />
                <ActionButton label="Delete" />
                <ActionButton label="Assign" />
                <button className="px-3 py-1 font-bold text-black bg-white border border-black rounded hover:bg-gray-100">
                  ⋯
                </button>
              </div>
            </div>

            {/* 🧾 Responsive Lead Table */}
            <div className="bg-white rounded-lg shadow-sm">
              <LeadTable
                leads={dummyLeads}
                onSelect={setSelectedLead}
                isSidebarHidden={isSidebarHidden}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
