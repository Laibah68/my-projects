import React, { useState } from 'react';
import data from '../components/dummyData.json';
import { CustomerRow } from '../components/Row';
import CustomerModal from '../components/CustomerModal';
import ConfirmDelete from '../components/Delete1';
import ClientView from '../components/ClientView'; // ✅ NEW IMPORT
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Customers = () => {
  const [customers, setCustomers] = useState(data.customers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClientView, setShowClientView] = useState(false); // ✅ NEW STATE

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(customers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedCustomers = customers.slice(startIndex, startIndex + rowsPerPage);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const handleDelete = (customer) => {
    setSelectedCustomer(customer);
    setShowDeleteModal(true);
  };

  const handleRowClick = (customer) => { // ✅ NEW HANDLER
    setSelectedCustomer(customer);
    setShowClientView(true);
  };

  const handleCloseClientView = () => { // ✅ NEW HANDLER
    setShowClientView(false);
    setSelectedCustomer(null);
  };

  const saveCustomer = (updated) => {
    if (selectedCustomer) {
      setCustomers((prev) =>
        prev.map((c) => (c.id === updated.id ? updated : c))
      );
    } else {
      setCustomers((prev) => [updated, ...prev]);
    }
    setShowModal(false);
  };

  const confirmDelete = () => {
    setCustomers((prev) => prev.filter((c) => c.id !== selectedCustomer.id));
    setShowDeleteModal(false);
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md w-full h-full flex flex-col gap-4 font-poppins">
     
     
       {showClientView && selectedCustomer ? (
    <ClientView client={selectedCustomer} onClose={handleCloseClientView} />
  ) : (
     <div>
      <div className="flex justify-between items-center bg-white p-2">
        <h2 className="text-xl font-semibold">Customers</h2>
        <button
          className="bg-green-600 text-white px-8 py-2 rounded-2xl text-xs"
          onClick={() => {
            setSelectedCustomer(null);
            setShowModal(true);
          }}
        >
          Add New
        </button>
      </div>

      {/* Bottom Container */}
      <div className="overflow-auto scrollbar-hide max-h-[60vh] bg-white">
      
        <table className="min-w-full table-auto text-sm">
          <thead className="sticky top-0 text-xs border-b-2 text-gray-500 bg-white z-10">
            <tr>
              <th className="p-2 text-left">Client Details</th>
              <th className="p-2 text-left">Code</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Country</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((c) => (
              <CustomerRow
                key={c.id}
                customer={c}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onRowClick={handleRowClick} // ✅ PASS NEW PROP
              />
            ))}
          </tbody>
        </table>
  
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center px-2 py-2 text-sm gap-20">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsChange}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value={5}>5</option>
            <option value={8}>8</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span>{currentPage} of {totalPages}</span>
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="p-1 text-xs disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="p-1 text-xs disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      

      {/* Modals */}
      {showModal && (
        <CustomerModal
          customer={selectedCustomer}
          onClose={() => setShowModal(false)}
          onSave={saveCustomer}
        />
      )}

      {showDeleteModal && (
        <ConfirmDelete
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
      </div>

      
      )}
    </div>
    
  );
};

export default Customers;
