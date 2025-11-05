import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Dropdown({ label, options = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 border rounded-md bg-white text-sm shadow-sm"
      >
        {label}: <span className="font-medium text-[#A280FF]">{selected}</span>
        <FaChevronDown className="text-[#A280FF]" />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-40 bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
