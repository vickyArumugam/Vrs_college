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
        <div className="p-6 max-w-4xl mx-auto ">
            <h1 className="text-2xl font-bold mb-4 text-center">Organizing Committee</h1>
            <form className="bg-gray-100 shadow p-6 rounded-lg mb-6 text-black">
                <h2 className="text-lg font-semibold mb-4">{editMemberId ? "Edit Member" : "Add New Member"}</h2>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full mb-4 px-4 py-2 border rounded"
                />
                <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Position"
                    className="w-full mb-4 px-4 py-2 border rounded"
                />
                <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    placeholder="Institution"
                    className="w-full mb-4 px-4 py-2 border rounded"
                />
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="w-full mb-4 px-4 py-2 border rounded"
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                    className={`w-full py-2 text-white rounded ${
                        loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
                    }`}
                    disabled={loading}
                >
                    {loading ? "Saving..." : editMemberId ? "Update Member" : "Add Member"}
                </button>
            </form>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Position</th>
                        <th className="border px-4 py-2">Institution</th>
                        <th className="border px-4 py-2">Location</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td className="border px-4 py-2">{member.name}</td>
                            <td className="border px-4 py-2">{member.position}</td>
                            <td className="border px-4 py-2">{member.institution}</td>
                            <td className="border px-4 py-2">{member.location}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleEdit(member)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(member.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
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
