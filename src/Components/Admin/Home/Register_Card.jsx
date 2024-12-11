import React, { useState } from "react";

export default function Register_Card() {
    const [cards, setCards] = useState([]);
    const [formData, setFormData] = useState({
        category: "",
        currency: "",
        value: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.category && formData.currency && formData.value) {
            setCards([...cards, formData]);
            setFormData({ category: "", currency: "", value: "" });
            try {
                const response = await fetch("http://localhost/mailapp/register_card.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                if (data.success) {
                    setMessage("Chief Patron added successfully!");
                    setCards([...cards, formData]);
                } else {
                    setMessage(data.message || "Failed to add Chief Patron.");
                }
            } catch (error) {
                setMessage("An error occurred while adding the Chief Patron.");
            }
        }
    };

    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
            <div className="my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol  text-[#000]">
                    Register Card
                </h1>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-11/12 max-w-lg bg-[#0B0A2A] border border-gray-300 p-6 rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label className="block text-white font-medium mb-2">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Enter category (e.g., Academicians)"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block  text-white font-medium mb-2">Currency</label>
                    <input
                        type="text"
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        placeholder="Enter currency (e.g., INR)"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block  text-white font-medium mb-2">Value</label>
                    <input
                        type="text"
                        name="value"
                        value={formData.value}
                        onChange={handleChange}
                        placeholder="Enter value (e.g., 1000)"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500"
                >
                    Add Card
                </button>
            </form>

            {/* Cards Display */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-20 px-4 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="sm:w-52 h-64 md:w-64 lg:h-80 bg-[#0B0A2A] border-2 border-b-white p-6 sm:p-8 rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                    >
                        <h1 className="font-Trebuchet text-lg sm:text-xl text-center font-bold mb-3 text-white">
                            {card.category}
                        </h1>
                        <h1 className="font-roboto text-2xl text-center font-bold text-white">
                            {card.currency}
                        </h1>
                        <hr className="w-2/4 border-[#C8F51E] my-5" />
                        <h1 className="font-roboto text-4xl sm:text-5xl text-center font-bold text-yellow-300">
                            {Math.floor(card.value)}
                        </h1>
                        <button className="uppercase w-32 sm:w-40 mt-4 h-10 text-white bg-red-600 font-medium rounded-lg">
                            Register Here
                        </button>
                        <button
                            onClick={() => handleDeleteCard(index)}
                            className="mt-2 text-sm text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
