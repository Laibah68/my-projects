import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ClientView = ({ client, onClose }) => {
  return (
    <div className="w-full h-full p-2 bg-white z-50 overflow-auto scrollbar-hide font-poppins ">
      <div className="flex flex-col md:flex-row gap-2 h-full ">
        {/* Left Container */}
        <div className="md:w-6/6 w-full  space-y-2">
          {/* Top Section */}
          <div className="space-y-2 border rounded-xl p-2">
            <h2 className="text-lg font-semibold">Client Details</h2>
            <h3 className="text-xl font-bold">{client.name}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-blue-500">{client.email}</span>
              <span className="mx-2 text-blue-500">|</span>
              <span className='text-blue-500'>{client.phone}</span>
            </div>
            <div className="mt-2">
              <label className="text-sm text-gray-700">Address</label>
              <div className="border p-2 rounded bg-gray-50 text-sm">
                Dubai Silicon Oasis, Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          {/* Campaigns Section */}
          <div className="space-y-2 p-2 border rounded-xl">
            <h2 className="text-lg font-semibold">Client Campaigns</h2>
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b rounded py-1 flex justify-between items-center text-sm">
                <div>
                  <div className="font-medium">ABC Campaign {i}</div>
                  <div className="text-xs text-gray-500">01/01/2024 – 01/06/2024</div>
                </div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-2xl text-xs">In Progress</button>
              </div>
            ))}
            <div className="flex justify-end items-center gap-2 text-xs">
              <span>1 of 2</span>
              <FaChevronLeft className="cursor-pointer" />
              <FaChevronRight className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="md:w-2/1 w-full p-2 space-y-2 border rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Client Contacts</h2>
            <button className="bg-green-600 text-white px-4 py-1 rounded-2xl text-xs">Add New</button>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-xs">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">ABC Infotech {i}</td>
                  <td className="p-2">info@abc{i}.ae</td>
                  <td className="p-2">+971 50999 9995</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-4 text-xs">
            <span>Rows per page:</span>
            <select className="border rounded px-2 py-1">
              <option>6</option>
              <option>8</option>
            </select>
            <span>1 of 1</span>
            <FaChevronLeft className="cursor-pointer" />
            <FaChevronRight className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientView;
