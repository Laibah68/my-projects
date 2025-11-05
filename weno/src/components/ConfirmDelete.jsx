import React from 'react';

const ConfirmDelete = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed text-[12px] inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-[30%] max-w-sm">
        <h3 className="text-lg font-semibold mb-4">Are you sure you want to Remove this agent from the campaign?</h3>
        <div className="flex justify-center gap-2">
          <button onClick={onClose} className="px-6 py-2 bg-gray-300 text-white rounded">Cancel</button>
          <button onClick={onConfirm} className="px-6 py-2 bg-[#182B57] text-white rounded">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
