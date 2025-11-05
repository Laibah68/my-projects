import { useState, useRef, useEffect } from 'react';
import {Card} from '../components/Card';
import Graph from '../components/Graph';
import LeadSource from '../components/LeadSource';
import TargetGauge from '../components/TargetGauge';
import { FaChevronDown } from 'react-icons/fa';

export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownOptions = ['Today', 'This Week', 'This Month'];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2">
      
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>

        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            <span className="text-sm font-medium text-gray-700">Filter by Date</span>
            <FaChevronDown className="w-3 h-3 text-gray-500" />
          </button>

          {isDropdownOpen && (
            <ul className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
              {dropdownOptions.map((option, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    console.log(`Selected: ${option}`);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card title="Total Leads" value="2,512" percent="16%" trend="down" />
            <Card title="Contacted" value="1,503" percent="16%" trend="up" />
            <Card title="Closes" value="124" percent="16%" trend="up" />
            <Card title="Pending" value="2" percent="16%" trend="down" />
          </div>
          <Graph />
        </div>
        <div className="lg:col-span-4 space-y-4">
          <TargetGauge />
          <LeadSource />
        </div>
      </div>
    </div>
  );
}
