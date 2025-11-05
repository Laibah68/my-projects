import React, { useState, useEffect } from 'react';
import Rifqi from "../assets/Ellipse 9.png";
const AgentModal = ({ agent, onClose, onSave }) => {
  const isEditMode = !!agent;

  const [form, setForm] = useState({
    avatar: '',
    name: '',
    status: 'Active',
    campaigns: 1,
    email: '',
    contact: '',
  });

  useEffect(() => {
    if (isEditMode) {
      setForm({
        avatar: agent.avatar || '',
        name: agent.name || '',
        status: agent.status || 'Active',
        campaigns: agent.campaigns || 1,
        email: agent.email || '',
        contact: agent.contact || '',
      });
    }
  }, [agent]);

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
    const newAgent = {
      id: isEditMode ? agent.id : Date.now(),
      name: form.name,
      status: form.status,
      campaigns: form.campaigns,
      email: form.email,
      contact: form.contact,
      avatar: form.avatar,
    };
    onSave(newAgent);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md w-[50%] max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* <h3 className="text-lg font-semibold mb-">
          {isEditMode ? 'Edit Agent' : 'Add Agent'}
        </h3> */}

        {/* Top Section: Avatar + Instructions */}
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="avatar" className="cursor-pointer">
              <img
                src={Rifqi}
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

          {/* Instructions */}
          <div className="flex items-center text-sm text-gray-600">
            <p className="leading-6">
              Update your avatar by clicking the image beside.<br />
              288x288 px size recommended<br />
              in PNG or JPG format only.
            </p>
          </div>
        </div>

        {/* Bottom Section: Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-700">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Name"
            />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm text-gray-700">Status</label>
            <input
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Status"
            />
          </div>

          {/* Campaigns */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-700">Campaigns</label>
            <input
              name="campaigns"
              value={form.campaigns}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Campaigns"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Email"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="text-sm text-gray-700">Contact</label>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Contact"
            />
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-[#007AFF] text-white rounded"
          >
            {isEditMode ? 'Save Changes' : 'Add Agent'}
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

export default AgentModal;




