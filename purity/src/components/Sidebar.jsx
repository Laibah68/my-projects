// import { FaHome, FaUser, FaBullhorn, FaPhone, FaDatabase, FaCreditCard, FaCog } from "react-icons/fa";
// import Logo from "../assets/logo.png";
// const menuItems = [
//   { icon: <FaHome />, label: "Dashboard" },
//   { icon: <FaUser />, label: "Leads" },
//   { icon: <FaBullhorn />, label: "Campaigns" },
//   { icon: <FaPhone />, label: "Next Call" },
//   { icon: <FaDatabase />, label: "Lead Sources" },
//   { icon: <FaCreditCard />, label: "Billing" },
//   { icon: <FaCog />, label: "Settings" },
// ];

// export default function Sidebar({ active, onSelect }) {
//   return (
//     <div className="sticky top-0 w-42 h-screen py-3 text-white bg-[#2D3748]">
//       {/* <div className="mb-4"> */}
//         <div className="flex flex-col items-center mb-1 ">
//         {/* Replace ICF with logo image */}
//         <img
//           src={Logo}
//           alt="Logo"
//           className="object-cover w-12 h-12 rounded-full"
//         />
//         <p className="text-sm px-2 text-center">PURITY UI DASHBOARD</p>
//         <hr className=" px-16 my-4 border-gray-600" />
//       </div>
//       <ul className="text-xs">
//         {menuItems.map(item => (
//           <li
//             key={item.label}
//             className={`flex items-center gap-3 cursor-pointer p-2  ${active === item.label ? "bg-[#202733]" : ""}`}
//             onClick={() => onSelect(item.label)}
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import {
  FaHome,
  FaUser,
  FaBullhorn,
  FaPhone,
  FaDatabase,
  FaCreditCard,
  FaCog,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const menuItems = [
  { icon: <FaHome />, label: "Dashboard" },
  { icon: <FaUser />, label: "Leads" },
  { icon: <FaBullhorn />, label: "Campaigns" },
  { icon: <FaPhone />, label: "Next Call" },
  { icon: <FaDatabase />, label: "Lead Sources" },
  { icon: <FaCreditCard />, label: "Billing" },
  { icon: <FaCog />, label: "Settings" },
];

export default function Sidebar({ active, onSelect, isOpen, isMobile }) {
  return (
    <div
      className={`${
        isMobile
          ? `fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`
          : isOpen
          ? "w-44"
          : "hidden"
      } bg-[#2D3748] text-white py-3`}
    >
      <div className="flex flex-col items-center mb-1">
        <img
          src={Logo}
          alt="Logo"
          className="object-cover w-12 h-12 rounded-full"
        />
        <p className="text-sm px-2 text-center">PURITY UI DASHBOARD</p>
        <hr className="px-16 my-4 border-gray-600" />
      </div>
      <ul className="text-xs">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-3 cursor-pointer p-2 ${
              active === item.label ? "bg-[#202733]" : ""
            }`}
            onClick={() => onSelect(item.label)}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
