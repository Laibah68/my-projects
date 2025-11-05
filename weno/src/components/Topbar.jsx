import { FaBars, FaSearch } from 'react-icons/fa';
import logo from "../assets/Ellipse 3.png";
import { MailCheck, Bell, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Topbar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const placeholder =
    location.pathname === '/properties'
      ? 'Search Product or Name'
      : 'Search Lead';

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm border-b gap-2">
      <div className="flex items-center gap-2">
        {!sidebarOpen && (
          <FaBars
            className="text-[#A280FF] text-xl cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        )}
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder={placeholder}
            className="pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm w-[120px] md:w-64 focus:outline-none focus:ring-1 focus:ring-[#A280FF]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MailCheck className="w-6 h-6 stroke-gray-400 fill-white" />
        <Bell className="w-6 h-6 stroke-gray-400 fill-white" />

        <div className="flex items-center gap-1">
          <img src={logo} alt="profile" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-sm font-medium text-gray-700">Rifqi Arkaanul</span>
          <ChevronDown className="w-4 h-4 bg-transparent text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
