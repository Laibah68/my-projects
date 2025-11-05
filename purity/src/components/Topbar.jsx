import { FaBars, FaBell, FaChevronDown } from "react-icons/fa";
import Profile from "../assets/Ellipse 8.png"
export default function Topbar({user, onHamburgerClick, onDropdownClick }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between py-[1px] px-2 bg-gray-100 shadow">
      <FaBars className="w-8 h-8 p-1.5 text-white bg-teal-500 border rounded cursor-pointer text-xs " 
      onClick={onHamburgerClick}/>
      <div className="flex items-center gap-3">
        <FaBell className="w-8 h-8 p-1 text-xl text-teal-500 bg-white border border-gray-500 rounded " />
        <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full" />
        <div>
          <h2 className="font-bold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
        <FaChevronDown className="text-sm cursor-pointer" 
        onClick={onDropdownClick}/>
        
      </div>
    </div>
  );
}
