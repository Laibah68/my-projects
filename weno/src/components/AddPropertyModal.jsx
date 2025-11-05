import { PhotographIcon } from '@heroicons/react/solid';

export default function AddPropertyModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-2 py-4 ">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-xl space-y-6 overflow-auto scrollbar-hide h-[90vh] sm:h-auto">

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
            <PhotographIcon className="w-6 h-6 text-gray-500" />
          </div>

          <div className="flex-1 w-full">
            <label className="text-sm font-medium text-gray-700">Upload Property Image</label>
            <input type="file" className="mt-1 block w-full text-sm text-gray-600" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Property Name</label>
              <input
                type="text"
                placeholder="Enter property name"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Property Type</label>
              <input
                type="text"
                placeholder="Enter property type"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Price Range</label>
              <input
                type="text"
                placeholder="Enter price range"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                placeholder="Enter city"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 w-full sm:w-auto"
          >
            Back
          </button>
          <button className="px-4 py-2 bg-[#A280FF] text-white rounded-md text-sm w-full sm:w-auto">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
