import {
  FaUsers,
  FaWallet,
  FaFileAlt,
} from 'react-icons/fa';
import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaBagShopping,
} from 'react-icons/fa6';

import pic from "../assets/Rectangle 1326.png";
import { CalendarClock, CircleDollarSignIcon, Sofa } from 'lucide-react';

export function Card({ title, value, percent, trend }) {
  const icons = {
    'Total Leads': <FaUsers />,
    Contacted: <FaWallet />,
    Closes: <FaBagShopping />,
    Pending: <FaFileAlt />,
  };

  const isUp = trend === 'up';
  const bgColor = isUp ? 'bg-yellow-100' : 'bg-red-100';
  const textColor = isUp ? 'text-yellow-600' : 'text-red-600';
  const arrowIcon = isUp ? <FaArrowTrendUp /> : <FaArrowTrendDown />;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-[#A280FF] text-lg">{icons[title]}</div>
          <span className="text-sm font-semibold text-gray-700">{title}</span>
        </div>
        <span
          className={`text-xs font-semibold ${bgColor} ${textColor} px-2 py-0.5 rounded-md flex items-center gap-1`}
        >
          {percent} {arrowIcon}
        </span>
      </div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </div>
  );
}




export function PropertyCard({ name, unit, address, year, price }) {
  return (
    <div className="border-b border-black p-4 hover:bg-[#A280FF] transition group cursor-pointer bg-white">
      <div className="flex gap-2">
        <img
          src={pic}
          alt=""
          className="w-8 h-8 rounded-md object-cover"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h4 className="text-[11px] truncate font-bold text-gray-800 group-hover:text-white">
              {name}
            </h4>
            <p className="text-[10px] text-gray-500 group-hover:text-white">
              {unit}
            </p>
          </div>
          <div>
            <p className="mt-2 text-[10px] truncate text-gray-500 group-hover:text-white">{address}</p>
            <div className="flex justify-between mt-2">
              <button className="flex items-center gap-1 border rounded-2xl px-2 py-1 text-xs group-hover:text-white group-hover:border-white">
                <CalendarClock className="w-3 h-3" />
                {year}
              </button>
              <button className="flex items-center gap-1 border rounded-2xl px-2 py-1 text-xs group-hover:text-white group-hover:border-white">
                <Sofa className="w-3 h-3" />
                5
              </button>
              <button className="flex items-center gap-1 border rounded-2xl px-2 py-1 text-xs group-hover:text-white group-hover:border-white">
                <CircleDollarSignIcon className="w-3 h-3" />
                {price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
