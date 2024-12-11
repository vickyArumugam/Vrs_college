import React, { useState } from "react";

export default function KeyInviteesForm() {
    const [formData, setFormData] = useState({
        name: "",
        image: null,
        title: "",
    });
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("image", formData.image);
        data.append("title", formData.title);

        fetch("http://localhost/mailapp/key_invitees.php", {
            method: "POST",
            body: data,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setMessage("Data submitted successfully!");
                } else {
                    setMessage(result.error || "Failed to submit data.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setMessage("An error occurred while submitting data.");
            });
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff]">
            <div className="lg:my-20 max-w-5xl px-4 mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#000]">
                    Key Invitees
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-11/12 max-w-md bg-[#0B0A2A] border-2 border-b-white p-6 rounded-lg lg:mt-4 transition-all duration-300 ease-in-out"
            >
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-white mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-white mb-2">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-white mb-2">
                        Role
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Role & Address"
                        required
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 font-semibold text-white bg-[#C8F51E] rounded-lg hover:bg-[#a6d118] focus:ring-4 focus:ring-[#C8F51E]"
                >
                    Add Speaker
                </button>
            </form>

            {/* Display Added Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-md text-center border border-[#C8F51E]"
                    >
                        {card.imagePreview && (
                            <img
                                src={card.imagePreview}
                                alt={card.name}
                                className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
                            />
                        )}
                        <h2 className="text-lg font-bold text-black">
                            {card.name}
                        </h2>
                        <p className="text-sm text-gray-600">{card.title}</p>
                    </div>
                ))}
            </div>

            {message && (
                <div className="mt-4 text-center text-green-500">{message}</div>
            )}
        </div>
    );
}
