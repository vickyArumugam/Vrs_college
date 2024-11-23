import React, { useState } from "react";

const EditorialBoardForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        institution: "",
        location: "",
    });

    const [members, setMembers] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddMember = async () => {
        if (
            formData.name &&
            formData.position &&
            formData.institution &&
            formData.location
        ) {
            try {
                const response = await fetch("http://localhost/mailapp/editorial_board.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (result.success) {
                    alert("Member added successfully!");
                    setMembers([...members, { ...formData }]); // Add the member to the local list
                    setFormData({
                        name: "",
                        position: "",
                        institution: "",
                        location: "",
                    });
                } else {
                    alert("Error adding member. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("Error submitting form. Please try again.");
            }
        } else {
            alert("Please fill in all fields before adding a member.");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-10">
            <form className="bg-white shadow-lg p-8 rounded-lg">
                <h2 className="text-xl font-semibold text-center mb-4">Add New Member</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 text-black"
                        required
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
                        required
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
                        required
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
                        required
                    />
                </div>

                <button
                    type="button"
                    onClick={handleAddMember}
                    className="w-full py-2 mb-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300"
                >
                    Add Member
                </button>

                {members.length > 0 && (
                    <>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Members Added</h3>
                        <ul className="list-disc list-inside mb-4">
                            {members.map((member, index) => (
                                <li key={index} className="mb-2">
                                    {`${member.name}, ${member.position}, ${member.institution}, ${member.location}`}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </form>
        </div>
    );
};

export default EditorialBoardForm;
