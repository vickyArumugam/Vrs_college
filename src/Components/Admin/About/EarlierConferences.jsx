import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EarlierConferences() {
    const [formData, setFormData] = useState({
        conferenceName: "",
        conferenceDate: "",
        collegeName: "",
        address: "",
        image: null,
    });

    const [conferences, setConferences] = useState([]);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Fetch existing conferences
    useEffect(() => {
        const fetchConferences = async () => {
            try {
                const response = await axios.get("http://localhost/mailapp/earlier_conference.php");
                setConferences(response.data);
            } catch (err) {
                console.error("Error fetching conferences:", err);
                setError("Failed to load conferences. Please try again later.");
            }
        };

        fetchConferences();
    }, []);

    // Handle input changes for text fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    // Submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("conferenceName", formData.conferenceName);
        data.append("conferenceDate", formData.conferenceDate);
        data.append("collegeName", formData.collegeName);
        data.append("address", formData.address);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            const response = await axios.post("http://localhost/mailapp/earlier_conference.php", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.success) {
                setMessage("Conference added successfully!");
                setConferences((prev) => [...prev, response.data.conference]);
                setFormData({
                    conferenceName: "",
                    conferenceDate: "",
                    collegeName: "",
                    address: "",
                    image: null,
                });
            } else {
                setError(response.data.message || "Error adding conference.");
            }
        } catch (err) {
            console.error("Error submitting form:", err);
            setError("Error submitting form. Please try again.");
        }
    };

    return (
        <div className="mt-10 p-6 bg-black text-white">
            {/* Form Card */}
            <div className="max-w-md mx-auto bg-[#1C1C1C] shadow-lg rounded-lg p-6">
                <h2 className="text-center font-bold text-xl mb-4 text-[#C8F51E]">Add Conference Details</h2>
                {message && <p className="text-center text-green-500">{message}</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Conference Name:</label>
                        <input
                            type="text"
                            name="conferenceName"
                            value={formData.conferenceName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 text-black rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Conference Date:</label>
                        <input
                            type="date"
                            name="conferenceDate"
                            value={formData.conferenceDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 text-black rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">College Name:</label>
                        <input
                            type="text"
                            name="collegeName"
                            value={formData.collegeName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 text-black rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Address:</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 text-black rounded"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Upload Image:</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 text-green-500 rounded"
                        />
                    </div>
                    <button type="submit" className=" bg-green-500 hover:bg-green-700  text-white px-6 py-2 rounded font-bold">
                        Submit
                    </button>
                </form>
            </div>

            {/* Conferences Display Section */}
            <div className="mt-10">
                <h3 className="text-lg font-bold mb-4">Existing Conferences</h3>
                {conferences.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conferences.map((conf) => (
                            <div
                                key={conf.id}
                                className="p-4 bg-[#1C1C1C] rounded shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h4 className="text-lg font-bold text-[#C8F51E] mb-2">
                                    {conf.conferenceName || "No Name"} {/* Fallback if conferenceName is missing */}
                                </h4>
                                <p className="text-sm text-gray-300">
                                    <strong>Date:</strong> {conf.conferenceDate}
                                </p>
                                <p className="text-sm text-gray-300">
                                    <strong>College:</strong> {conf.collegeName}
                                </p>
                                <p className="text-sm text-gray-300">
                                    <strong>Address:</strong> {conf.address}
                                </p>
                                {conf.image && (
                                    <img
                                        src={`data:image/jpeg;base64,${conf.image}`}
                                        alt="Conference"
                                        className="mt-4 w-full h-40 object-cover rounded"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ) :  (
                <p className="text-center text-gray-400">No conferences found.</p>
                )}
            </div>
        </div>
    );
}
