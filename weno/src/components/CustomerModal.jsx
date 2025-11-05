import React, { useState, useEffect } from 'react';

const CustomerModal = ({ customer, onClose, onSave }) => {
  const isEditMode = !!customer;

  const [form, setForm] = useState({
    avatar: '',
    name: '',
    code: '',
    phone: '',
    country: '',
    email: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setForm({
        avatar: customer.avatar || '',
        name: customer.name || '',
        code: customer.code || '',
        phone: customer.phone || '',
        country: customer.country || '',
        email: customer.email || '',
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, avatar: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = () => {
    const newCustomer = {
      id: isEditMode ? customer.id : Date.now(),
      ...form,
    };
    onSave(newCustomer);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md w-[50%] max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <h3 className="text-lg font-semibold mb-4">
          {isEditMode ? 'Edit Customer' : 'Add Customer'}
        </h3>

        {/* Avatar + Instructions */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="avatar" className="cursor-pointer">
              <img
                src={form.avatar || 'https://via.placeholder.com/288'}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover border"
              />
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleAvatarUpload}
            />
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <p className="leading-6">
              Update your avatar by clicking the image beside.<br />
              288x288 px size recommended<br />
              in PNG or JPG format only.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Company Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Code</label>
            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Code"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Country</label>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Country"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Email"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-2">
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-[#007AFF] text-white rounded"
          >
            {isEditMode ? 'Save Changes' : 'Add Customer'}
          </button>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;
