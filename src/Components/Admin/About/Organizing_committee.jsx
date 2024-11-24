import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrganizingCommittee = () => {
  const [sections, setSections] = useState([]);
  const [newMember, setNewMember] = useState({
    section: '',
    name: '',
    position: '',
  });
  const [membersTable, setMembersTable] = useState([]);
  const [message, setMessage] = useState('');

  const fetchSections = async () => {
    try {
      const response = await axios.get('http://localhost/mailapp/organizing_committee.php');
      setSections(response.data);
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMember.section && newMember.name && newMember.position) {
      setMembersTable([...membersTable, newMember]);
      setNewMember({ section: '', name: '', position: '' });
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  const handleSubmitAll = async () => {
    try {
      const response = await axios.post('http://localhost/mailapp/organizing_committee.php', membersTable);
      setMessage(response.data.message || 'Members added successfully!');
      setMembersTable([]);
      fetchSections(); // Refresh the sections list
    } catch (error) {
      console.error('Error submitting members:', error);
      setMessage('Error submitting members.');
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  return (
    <div className="p-6 bg-gray-100 text-black">
      <h2 className="text-center font-bold text-xl mb-4">Organizing Committee</h2>
      {message && <p className="text-center text-green-500">{message}</p>}

      {/* Form for adding a member */}
      <form onSubmit={handleAddMember} className="space-y-4 mb-6">
        <div>
          <label className="block mb-2">Section:</label>
          <select
            name="section"
            value={newMember.section}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded text-black"
            required
          >
            <option value="">Select Section</option>
            <option value="Chairman">Chairman</option>
            <option value="Convenors">Convenors</option>
            <option value="Advisory Committee">Advisory Committee</option>
            <option value="Coordinators">Coordinators</option>
            <option value="Members">Members</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={newMember.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Position:</label>
          <input
            type="text"
            name="position"
            value={newMember.position}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
          Add to Table
        </button>
      </form>

      {/* Members Table */}
      {membersTable.length > 0 && (
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-2">Members to be Submitted:</h3>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Position</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {membersTable.map((member, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{member.section}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleSubmitAll}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded"
          >
            Submit All
          </button>
        </div>
      )}

      {/* Display existing sections */}
      <div>
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-bold text-lg mb-2">{section.title}</h3>
            <ul className="list-disc ml-4">
              {section.members.map((member, idx) => (
                <li key={idx} className="text-gray-700">
                  {member.name} - {member.position}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingCommittee;
