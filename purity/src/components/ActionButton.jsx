import { FaInfoCircle, FaExchangeAlt, FaTrashAlt, FaUserPlus } from "react-icons/fa";

const iconMap = {
  Details: <FaInfoCircle className="mr-2" />,
  Transfer: <FaExchangeAlt className="mr-2" />,
  Delete: <FaTrashAlt className="mr-2" />,
  Assign: <FaUserPlus className="mr-2" />,
};

export default function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-3 py-1 text-white bg-teal-500 rounded hover:bg-blue-700 transition"
    >
      {iconMap[label]}
      <span>{label}</span>
    </button>
  );
}
