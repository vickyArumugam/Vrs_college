import React, { useState, useEffect } from "react";
import axios from "axios";

const OrganizingCommittee = () => {
  const [sections, setSections] = useState([]);
  const [editMember, setEditMember] = useState(null);
  const [newMember, setNewMember] = useState({ section: "", name: "", position: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fetchSections = async () => {
    try {
      const response = await axios.get("http://localhost/mailapp/organizing_Committee.php");
      setSections(response.data || []);
    } catch (err) {
      console.error("Error fetching sections:", err);
      setError("Failed to load data.");
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!newMember.section || !newMember.name || !newMember.position) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      if (editMember) {

        await axios.put(
          "http://localhost/mailapp/organizing_Committee.php",
          JSON.stringify({ id: editMember.id, ...newMember }),
          { headers: { "Content-Type": "application/json" } }
        );
        setMessage("Member updated successfully!");
      } else {

        await axios.post(
          "http://localhost/mailapp/organizing_Committee.php",
          JSON.stringify(newMember),
          { headers: { "Content-Type": "application/json" } }
        );
        setMessage("Member added successfully!");
      }
      fetchSections();
      setNewMember({ section: "", name: "", position: "" });
      setEditMember(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error saving member:", err);
      setError("Failed to save data.");
    }
  };

  const handleEditClick = (member) => {
    setEditMember(member);
    setNewMember({ section: member.section, name: member.name, position: member.position });
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setEditMember(null);
    setNewMember({ section: "", name: "", position: "" });
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost/mailapp/organizing_Committee.php?id=${id}`);
      setMessage("Member deleted successfully!");
      fetchSections();
    } catch (err) {
      console.error("Error deleting member:", err);
      setError("Failed to delete member.");
    }
  };

  return (
    <div className="p-6 bg-[#0B0A2A] text-white">
      <h2 className="text-center font-bold text-2xl mb-4">Organizing Committee</h2>
      {message && <p className="text-center text-green-500">{message}</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <button
        onClick={handleAddClick}
        className="bg-[#C8F51E] text-[#0B0A2A] px-6 py-2 rounded mb-4"
      >
        Add Member
      </button>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Section</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Position</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) =>
              section.members.map((member) => (
                <tr key={member.id}>
                  <td className="border border-gray-300 px-4 py-2 ">{section.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.position}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleEditClick(member)}
                      className="bg-yellow-500 text-[#0B0A2A] px-4 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(member.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#0B0A2A] text-white rounded-lg p-6 w-1/3">
            <h3 className="text-lg font-bold mb-4">{editMember ? "Edit Member" : "Add Member"}</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Section:</label>
                <select
                  name="section"
                  value={newMember.section}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white border rounded"
                  required
                >
                  <option value="">Select Section</option>
                  {["Chairman", "Convenors", "Advisory Committee", "Coordinators", "Members"].map(
                    (section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newMember.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white border rounded"
                  placeholder="Enter member's name"
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
                  className="w-full px-4 py-2 bg-gray-700 text-white border rounded"
                  placeholder="Enter member's position"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-[#C8F51E] text-[#0B0A2A] px-4 py-2 rounded">
                  {editMember ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizingCommittee;
