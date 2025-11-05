import { useState } from 'react';
import { XIcon, SearchIcon } from '@heroicons/react/solid';
import AddPropertyModal from './AddPropertyModal';

export default function PropertyHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full gap-1">
        
        <h2 className="text-xl font-semibold text-gray-800 mr-1">Properties</h2>

        <div className="relative mr-1">
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-64"
          />
        </div>
        <div className="flex items-center border border-black px-2 py-1 rounded-md mr-1">
          <span className="text-sm">
            <strong>Property type</strong>{' is '}
            <span className="text-gray-700 font-medium">Villa</span>
          </span>
          <XIcon className="h-4 w-4 text-gray-500 ml-2 cursor-pointer" />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#007AFF] text-white px-6 py-2 rounded-md text-sm font-medium ml-auto"
        >
          Add Property
        </button>
      </div>
      {showModal && <AddPropertyModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
