import React, { useState, useRef, useEffect } from 'react';
import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import info from '../assets/Ellipse 3.png';



export const AgentRow = ({ agent, onEdit, onDelete }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <tr className="border-b hover:bg-gray-50 text-[14px]">
      <td className="p-2">{agent.name}</td>
      <td className="p-2">{agent.email}</td>
      <td className="p-2">{agent.contact}</td>
      <td className="p-2">{agent.campaigns}</td>
      <td className="p-2 text-green-600">
        <span className="flex items-center">
          <CheckCircleIcon className="h-4 w-4 mr-1 text-green-600" />
          {agent.status}
        </span>
      </td>
      <td className="p-2 relative text-center" ref={dropdownRef}>
        <button onClick={() => setShowOptions(!showOptions)}>⋮</button>
        {showOptions && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-md z-10">
            <button
              className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              onClick={() => onEdit(agent)}
            >
              Edit
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              onClick={() => onDelete(agent)}
            >
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export const CustomerRow = ({ customer, onEdit, onDelete, onRowClick }) => {
  return (
    <tr className="border-b hover:bg-gray-50 text-[14px]">
      <td className="p-2 flex items-center gap-2"
      onClick={() => onRowClick && onRowClick(customer)}
      >
        <img src={info} className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-medium">{customer.name}</div>
          <div className="text-xs text-gray-500">{customer.email}</div>
        </div>
      </td>
      <td className="p-2">{customer.code}</td>
      <td className="p-2">{customer.phone}</td>
      <td className="p-2">{customer.country}</td>
      <td className="p-2 flex gap-2">
        <button onClick={() => onEdit(customer)} >
          <PencilIcon className="h-4 w-4 text-yellow-400" />
        </button>
        <button onClick={() => onDelete(customer)}>
          <TrashIcon className="h-4 w-4 text-red-600" />
        </button>
      </td>
    </tr>
  );
};
