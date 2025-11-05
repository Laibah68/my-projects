import React, { useState } from 'react';
import data from '../components/dummyData.json';
import {AgentRow} from '../components/Row';
import AgentModal from '../components/AgentModal';
import ConfirmDelete from '../components/ConfirmDelete';

const AddAgents = () => {
  const [agents, setAgents] = useState(data.agents);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = (agent) => {
    setSelectedAgent(agent);
    setShowEditModal(true);
  };

  const handleDelete = (agent) => {
    setSelectedAgent(agent);
    setShowDeleteModal(true);
  };

  const saveAgent = (updatedAgent) => {
    setAgents((prev) => {
        if (selectedAgent) {
            return prev.map((a) => (a.id === updatedAgent.id ? updatedAgent : a));
        } else {
            return [updatedAgent, ...prev];
        }
        });

    setShowEditModal(false);
  };

  const confirmDelete = () => {
    setAgents((prev) => prev.filter((a) => a.id !== selectedAgent.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="bg-[#F8F8F9] w-full h-full flex flex-col gap-2">
      {/* Top Container */}
      <div className="flex justify-between items-center bg-[#F8F8F9] rounded-md">
        <h2 className="text-xl font-semibold text-gray-800">Add Agents</h2>
        <button className="bg-[#007AFF] text-[12px] text-white px-8 py-2 rounded-md"
        onClick={() => {
            setSelectedAgent(null); // empty form
            setShowEditModal(true);
        }}
        >Add Agent</button>
      </div>

      {/* Bottom Container */}
      <div className="overflow-auto scrollbar-hide bg-[#F8F8F9] rounded-md">
        <table className="min-w-full table-auto">
          <thead className='sticky top-0 z-10'>
            <tr className="bg-gray-100 text-left text-[14px]">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Campaigns</th>
              <th className="p-2">Status</th>
              <th className="p-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <AgentRow
                key={agent.id}
                agent={agent}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <AgentModal
          agent={selectedAgent}
          onClose={() => setShowEditModal(false)}
          onSave={saveAgent}
        />
      )}

      {showDeleteModal && (
        <ConfirmDelete
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default AddAgents;
