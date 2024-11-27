import React, { useState, useEffect } from "react";

const fetchMembers = async () => {
    try {
        const response = await fetch("http://localhost/mailapp/editorial_board.php", {
            method: "GET",
        });
        const result = await response.json();
        if (result.success) {
            return result.data;  // Assuming the data returned is an array of members
        } else {
            alert("Error fetching members.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching members:", error);
        return [];
    }
};

const handleSubmit = async (formData, editMemberId, setFormData, setMembers) => {
    if (!formData.name || !formData.position || !formData.institution || !formData.location) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const method = editMemberId ? "PUT" : "POST";
        const url = editMemberId
            ? `http://localhost/mailapp/editorial_board.php?id=${editMemberId}`
            : "http://localhost/mailapp/editorial_board.php";

        const response = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (result.success) {
            alert(editMemberId ? "Member updated successfully!" : "Member added successfully!");
            const updatedMembers = await fetchMembers();
            setMembers(updatedMembers);
            setFormData({ name: "", position: "", institution: "", location: "" });
        } else {
            alert("Error saving member.");
        }
    } catch (error) {
        console.error("Error saving member:", error);
    }
};

const handleEdit = (member, setEditMemberId, setFormData) => {
    setEditMemberId(member.id);
    setFormData({
        name: member.name,
        position: member.position,
        institution: member.institution,
        location: member.location,
    });
};

const handleDelete = async (id, setMembers) => {
    try {
        const response = await fetch(`http://localhost/mailapp/editorial_board.php?id=${id}`, {
            method: "DELETE",
        });
        const result = await response.json();

        if (result.success) {
            alert("Member deleted successfully!");
            const updatedMembers = await fetchMembers();
            setMembers(updatedMembers);
        } else {
            alert("Error deleting member.");
        }
    } catch (error) {
        console.error("Error deleting member:", error);
    }
};

const OrganizingCommittee = () => {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        institution: "",
        location: "",
    });

    const [members, setMembers] = useState([]);
    const [editMemberId, setEditMemberId] = useState(null);

    // Fetch members on component mount
    useEffect(() => {
        const loadMembers = async () => {
            const fetchedMembers = await fetchMembers();
            setMembers(fetchedMembers);
        };

        loadMembers();
    }, []);

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-10">
            <form className="bg-white shadow-lg p-8 rounded-lg mb-6">
                <h2 className="text-xl font-semibold text-center mb-4 text-black">
                    {editMemberId ? "Edit Member" : "Add New Member"}
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Position</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Institution</label>
                    <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-black"
                    />
                </div>

                <button
                    type="button"
                    onClick={() => handleSubmit(formData, editMemberId, setFormData, setMembers)}
                    className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300"
                >
                    {editMemberId ? "Update Member" : "Add Member"}
                </button>
            </form>

            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Members List</h3>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Position</th>
                            <th className="border border-gray-300 px-4 py-2">Institution</th>
                            <th className="border border-gray-300 px-4 py-2">Location</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td className="border border-gray-300 px-4 py-2">{member.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{member.position}</td>
                                <td className="border border-gray-300 px-4 py-2">{member.institution}</td>
                                <td className="border border-gray-300 px-4 py-2">{member.location}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        onClick={() => handleEdit(member, setEditMemberId, setFormData)}
                                        className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(member.id, setMembers)}
                                        className="bg-red-500 text-white px-4 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrganizingCommittee;
