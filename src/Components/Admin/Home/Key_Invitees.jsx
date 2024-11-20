import React, { useState } from "react";

export default function SpeakerCardForm() {
    const [cards, setCards] = useState([]); // Stores all cards
    const [formData, setFormData] = useState({
        name: "",
        imageUrl: "",
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.imageUrl && formData.title && formData.description) {
            setCards([...cards, formData]); // Add the new card to the array
            setFormData({ name: "", imageUrl: "", title: "", description: "" }); // Reset the form
        }
    };

    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index)); // Remove the card by index
    };

    const handleFinalSubmit = () => {
        // Submit all cards (e.g., to an API or console log)
        console.log("All Speaker Data:", cards);
        alert("All speaker details submitted successfully!");
        // Add API integration here if needed
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff] py-10">
            <div className="my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#000]">
                    Add Speaker Details
                </h1>
            </div>

            {/* Form to add a new card */}
            <form
                onSubmit={handleSubmit}
                className="w-11/12 max-w-md bg-[#0B0A2A] border-2 border-b-white p-6 rounded-lg lg:mt-16 transition-all duration-300 ease-in-out"
            >
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-white mb-2">Name</label>
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
                    <label className="block text-sm font-semibold text-white mb-2">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        required
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-white mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                        required
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-white mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                        required
                        rows="3"
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 font-semibold text-white bg-[#C8F51E] rounded-lg hover:bg-[#a6d118] focus:ring-4 focus:ring-[#C8F51E]"
                >
                    Add Speaker
                </button>
            </form>

            {/* Render the cards dynamically */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 my-10 sm:my-20 border-2 border-[#C8F51E] rounded-lg group relative"
                    >
                        <div className="max-w-sm lg:max-w-lg min-h-80 flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm sm:p-10 relative">
                            <img
                                src={card.imageUrl}
                                className="w-48 sm:w-48 md:w-60 relative"
                                alt={card.name}
                            />
                            <h1 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-black mt-4">
                                {card.name}
                            </h1>
                            <p className="text-center text-sm sm:text-base md:text-lg text-black mt-2">
                                {card.title}
                            </p>
                            <p className="text-center text-sm sm:text-base md:text-lg text-black mt-2">
                                {card.description}
                            </p>
                            <button
                                onClick={() => handleDeleteCard(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Final Submit Button */}
            {cards.length > 0 && (
                <button
                    onClick={handleFinalSubmit}
                    className="mt-10 py-2 px-6 font-semibold text-white bg-[#C8F51E] rounded-lg hover:bg-[#a6d118] focus:ring-4 focus:ring-[#C8F51E]"
                >
                    Submit All
                </button>
            )}
        </div>
    );
}
