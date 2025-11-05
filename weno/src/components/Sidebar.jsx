import {
  FaTachometerAlt,
  FaBox,
  FaUserTie,
  FaMoneyBill,
  FaUsers,
  FaCog,
  FaSun,
  FaMoon,
  FaChevronRight,
  FaUsersCog,
} from "react-icons/fa";
import { BookDown } from 'lucide-react';
import { NavLink } from "react-router-dom";
import weno from "../assets/App Icon Blue.png";

const navItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
  { name: "Properties", icon: <FaBox />, path: "/properties" },
  { name: "Agents", icon: <FaUsers />, path: "/agents" },
  { name: "Customers", icon: <FaUsersCog />, path: "/customers" },
  { name: "Leads", icon: <FaUserTie />, path: "/leads" },
  { name: "Income", icon: <FaMoneyBill />, path: "/income" },
];

export default function Sidebar({
  setSidebarOpen,
  theme,
  toggleTheme,
  collapsed,
  setCollapsed,
  isMobile,
}) {
  const isLight = theme === "light";

  // Mobile layout: use original logic
  if (isMobile) {
    return (
      <div
        className={`w-[200px] h-screen flex flex-col justify-between border-r transition-all duration-300 ${
          isLight ? "bg-white border-gray-100" : "bg-[#1E1E2D] border-gray-700"
        }`}
      >
        <div>
          <div className="flex items-center justify-between px-4 pt-4 border border-gray-100">
            <img src={weno} alt="logo" className="w-12 h-12" />
            <BookDown
              className="text-[#A280FF] cursor-pointer w-6 h-6   rotate-90"
              onClick={() => setSidebarOpen(false)}
            />
          </div>
          <nav className="mt-2 flex flex-col space-y-1">
            {navItems.map(({ name, icon, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#F4EFFF] text-[#A280FF]"
                      : "text-gray-400 hover:text-[#A280FF]"
                  }`
                }
              >
                <span className="text-base">{icon}</span>
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="px-5 py-4 border-t border-gray-100 space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaCog />
              <span>Settings</span>
            </div>
            <FaChevronRight className="text-gray-300 text-xs" />
          </div>
          <div className="flex items-center justify-between text-xs font-medium bg-gray-50 p-1 rounded-full">
            <button
              onClick={() => toggleTheme("light")}
              className={`flex items-center gap-1 rounded-full px-3 py-1 transition-all ${
                isLight ? "bg-white text-[#A280FF] shadow-sm" : "text-gray-400"
              }`}
            >
              <FaSun className={`${isLight ? "text-[#A280FF]" : "text-gray-400"}`} />
              Light
            </button>
            <button
              onClick={() => toggleTheme("dark")}
              className={`flex items-center gap-1 rounded-full px-3 py-1 transition-all ${
                !isLight ? "bg-white text-[#A280FF] shadow-sm" : "text-gray-400"
              }`}
            >
              <FaMoon className={`${!isLight ? "text-[#A280FF]" : "text-gray-400"}`} />
              Dark
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout with collapse logic
  return (
    <div
      className={`h-screen flex flex-col justify-between border-r transition-all duration-300 ${
        collapsed ? "w-[70px]" : "w-[200px]"
      } ${isLight ? "bg-white border-gray-100" : "bg-[#1E1E2D] border-gray-700"}`}
    >
      <div>
        <div className="flex items-center justify-between p-2 pt-4 border border-gray-100">
          <img
            src={weno}
            alt="logo"
            className="w-10 h-10 cursor-pointer"
            onClick={() => setCollapsed(false)}
          />
          {!collapsed && (
            <BookDown
              className="text-[#A280FF] text-lg cursor-pointer w-6 h-6 rotate-90"
              onClick={() => setCollapsed(true)}
            />
          )}
        </div>
        <nav className="mt-2 flex flex-col space-y-1">
          {navItems.map(({ name, icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#F4EFFF] text-[#A280FF]"
                    : "text-gray-400 hover:text-[#A280FF]"
                }`
              }
            >
              <span className="text-base">{icon}</span>
              {!collapsed && <span>{name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="px-5 py-4 border-t border-gray-100 space-y-3">
        {collapsed ? (
          <div className="flex flex-col items-center gap-4">
            <FaCog className="text-gray-400 text-lg cursor-pointer" />
            <button
              onClick={() => toggleTheme(isLight ? "dark" : "light")}
              className="text-lg text-gray-400"
            >
              {isLight ? <FaSun className="text-[#A280FF]" /> : <FaMoon className="text-[#A280FF]" />}
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaCog />
                <span>Settings</span>
              </div>
              <FaChevronRight className="text-gray-300 text-xs" />
            </div>
            <div className="flex items-center justify-between text-xs font-medium bg-gray-50 p-1 rounded-full">
              <button
                onClick={() => toggleTheme("light")}
                className={`flex items-center gap-1 rounded-full px-3 py-1 transition-all ${
                  isLight ? "bg-white text-[#A280FF] shadow-sm" : "text-gray-400"
                }`}
              >
                <FaSun className={`${isLight ? "text-[#A280FF]" : "text-gray-400"}`} />
                Light
              </button>
              <button
                onClick={() => toggleTheme("dark")}
                className={`flex items-center gap-1 rounded-full px-3 py-1 transition-all ${
                  !isLight ? "bg-white text-[#A280FF] shadow-sm" : "text-gray-400"
                }`}
              >
                <FaMoon className={`${!isLight ? "text-[#A280FF]" : "text-gray-400"}`} />
                Dark
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

