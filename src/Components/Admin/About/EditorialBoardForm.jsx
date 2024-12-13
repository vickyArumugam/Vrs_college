import React, { useState, useEffect } from "react";

const fetchMembers = async () => {
  try {
    const response = await fetch("http://localhost/mailapp/editorial_board.php");
    const result = await response.json();
    return result.success ? result.data : [];
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

const OrganizingCommittee = () => {
  const [formData, setFormData] = useState({ name: "", position: "", institution: "", location: "" });
  const [members, setMembers] = useState([]);
  const [editMemberId, setEditMemberId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMembers = async () => {
      const data = await fetchMembers();
      setMembers(data);
    };
    loadMembers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.position || !formData.institution || !formData.location) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    const method = editMemberId ? "PUT" : "POST";
    const url = editMemberId
      ? `http://localhost/mailapp/editorial_board.php?id=${editMemberId}`
      : "http://localhost/mailapp/editorial_board.php";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        const updatedMembers = await fetchMembers();
        setMembers(updatedMembers);
        setFormData({ name: "", position: "", institution: "", location: "" });
        setEditMemberId(null);
      } else {
        alert("Error saving member.");
      }
    } catch (error) {
      console.error("Error saving member:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (member) => {
    setEditMemberId(member.id);
    setFormData(member);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost/mailapp/editorial_board.php?id=${id}`, { method: "DELETE" });
      const result = await response.json();

      if (result.success) {
        const updatedMembers = await fetchMembers();
        setMembers(updatedMembers);
      } else {
        alert("Error deleting member.");
      }
    } catch (error) {
      console.error("Error deleting member:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 p-8 max-w-4xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-blue-900 mb-6">Organizing Committee</h1>
      <form className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">{editMemberId ? "Edit Member" : "Add New Member"}</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Position"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
          />
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleInputChange}
            placeholder="Institution"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className={`w-full py-3 text-white rounded-lg ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"}`}
          disabled={loading}
        >
          {loading ? "Saving..." : editMemberId ? "Update Member" : "Add Member"}
        </button>
      </form>
      <table className="w-full table-auto border-collapse bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Position</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Institution</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Location</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{member.name}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{member.position}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{member.institution}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{member.location}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEdit(member)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2 hover:bg-yellow-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizingCommittee;
