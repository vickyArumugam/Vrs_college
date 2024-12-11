import React, { useState } from "react";

export default function Chief_Patrons() {
    const [cards, setCards] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        image: null,
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.role && formData.image) {
            try {
                const data = new FormData();
                data.append("name", formData.name);
                data.append("role", formData.role);
                data.append("image", formData.image);

                const response = await fetch("http://localhost/mailapp/chief_patrons.php", {
                    method: "POST",
                    body: data,
                });

                const responseData = await response.json();
                if (responseData.success) {
                    setMessage("Chief Patron added successfully!");
                    const newCard = {
                        name: formData.name,
                        role: formData.role,
                        imageUrl: responseData.imageUrl || "",
                    };
                    setCards([...cards, newCard]);
                } else {
                    setMessage(responseData.message || "Failed to add Chief Patron.");
                }
            } catch (error) {
                setMessage("An error occurred while adding the Chief Patron.");
            }

            setFormData({ name: "", role: "", image: null });
        } else {
            setMessage("Please fill out all fields.");
        }
    };


    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index)); // Remove a card by index
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Add Chief Patrons Details
                </h1>
                {message && <p className="text-green-600 mt-2">{message}</p>}
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="w-11/12 max-w-md bg-[#0B0A2A] border border-gray-300 p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white font-medium mb-2">Role</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Enter role or designation"
                        required
                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white font-medium mb-2">Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-green-500  text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500"
                >
                    Add Chief Patron
                </button>
            </form>

            {/* Speaker Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {cards.map((card, index) => (
                    <div key={index} className="flex justify-center items-center p-2 sm:p-4">
                        <div className="relative w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[25rem] lg:max-w-[30rem] h-80 bg-[#0A0A23] border-2 border-gray-300 rounded-lg flex flex-col justify-end items-center transform transition-transform duration-500 hover:scale-105">
                            <div className="absolute top-0 left-0 w-full h-full bg-[#7CB342] clip-curved"></div>
                            <div className="absolute top-5 w-[7rem] sm:w-24 md:w-28 lg:w-36 h-[7rem] sm:h-24 md:h-28 lg:h-36 bg-gray-300 rounded-full border-3 border-[#C8F51E]"></div>
                            <div className="relative z-10 text-center mb-10 sm:mb-8 md:mb-8 px-4 space-y-2 sm:space-y-3">
                                <img
                                    src={card.imageUrl}
                                    className="w-[5rem] sm:w-36 md:w-44 lg:w-48 z-10 lg:mb-5 lg:ml-[57px] mb-[67px] ml-[38px]"
                                    alt="Profile"
                                />
                                <h1 className="text-white text-lg sm:text-2xl md:text-25 font-bold">
                                    {card.name}
                                </h1>
                                <div className="w-8 sm:w-12 md:w-16 h-1 bg-[#C8F51E] mx-auto mt-1"></div>
                                <p className="text-white text-xs sm:text-sm md:text-19">
                                    {card.role}
                                </p>
                                <button
                                    onClick={() => handleDeleteCard(index)}
                                    className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
