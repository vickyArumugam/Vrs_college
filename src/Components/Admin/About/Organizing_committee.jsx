import React, { useState, useEffect } from "react";
import axios from "axios";

const OrganizingCommittee = () => {
  const [sections, setSections] = useState([]); // Holds existing data
  const [editMember, setEditMember] = useState(null); // To hold the member being edited
  const [newMember, setNewMember] = useState({ section: "", name: "", position: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch all sections and members
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  // Add or update a member
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!newMember.section || !newMember.name || !newMember.position) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      if (editMember) {
        // Update an existing member
        await axios.put(
          "http://localhost/mailapp/organizing_Committee.php",
          JSON.stringify({ id: editMember.id, ...newMember }),
          { headers: { "Content-Type": "application/json" } }
        );
        setMessage("Member updated successfully!");
      } else {
        // Add a new member
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
    } catch (err) {
      console.error("Error saving member:", err);
      setError("Failed to save data.");
    }
  };

  // Populate the form with the selected member's details for editing
  const handleEditClick = (member) => {
    setEditMember(member);
    setNewMember({ section: member.section, name: member.name, position: member.position });
  };

  // Delete a member
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
    <div className="p-6 bg-gray-100 text-black">
      <h2 className="text-center font-bold text-2xl mb-4">Organizing Committee</h2>
      {message && <p className="text-center text-green-500">{message}</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block mb-2">Section:</label>
          <select
            name="section"
            value={newMember.section}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
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
            className="w-full px-4 py-2 border rounded"
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
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter member's position"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
          {editMember ? "Update Member" : "Add Member"}
        </button>
      </form>

      {/* Table */}
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
                  <td className="border border-gray-300 px-4 py-2">{section.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.position}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleEditClick(member)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
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
    </div>
  );
};

export default OrganizingCommittee;
