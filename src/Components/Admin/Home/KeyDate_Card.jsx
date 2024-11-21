import React, { useState } from "react";

export default function KeyDate_Card() {
    const [cards, setCards] = useState([]); // To store all card data
    const [formData, setFormData] = useState({
        description: "",
        date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitCard = (e) => {
        e.preventDefault();
        if ( formData.description && formData.date) {
            setCards([...cards, formData]);
            setFormData({  description: "", date: "" });
        }
    };

    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    };

    const handleSubmitAll = async () => {
        if (cards.length === 0) return;
    
        try {
            const response = await fetch('http://localhost/mailapp/keyDates.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cards), // Send all cards as JSON
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
    
            const result = await response.json(); // Parse response
            console.log('API Response:', result);
            alert('All cards submitted successfully!');
    
            // Optionally clear cards after successful submission
            setCards([]);
        } catch (error) {
            console.error('Error submitting cards:', error);
            alert('Failed to submit cards.');
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff]">
            <div className="my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol text-[#000]">
                    Key Date Update
                </h1>
            </div>

            {/* Form to add a new card */}
            <form
                onSubmit={handleSubmitCard}
                className="w-11/12 max-w-md bg-[#0B0A2A] border-2 border-b-white p-6 rounded-lg lg:mt-1 transition-all duration-300 ease-in-out"
            >
                {/* <div className="mb-4">
                    <label className="block text-sm font-semibold text-white mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                        required
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    />
                </div> */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-white mb-2">
                        Description
                    </label>
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
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-white mb-2">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 font-semibold text-white bg-[#C8F51E] rounded-lg hover:bg-[#a6d118] focus:ring-4 focus:ring-[#C8F51E]"
                >
                    Add Card
                </button>
            </form>

            {/* Render the cards dynamically */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative w-60 h-60 bg-[#0B0A2A] border-2 border-b-white p-4 rounded-tr-[40px] rounded-bl-[40px] transition-all duration-300 ease-in-out hover:border-[#C8F51E] hover:rounded-none"
                    >
                        {/* Card Number */}
                        <div className="absolute top-2 left-2 bg-[#C8F51E] text-black text-sm font-bold px-3 py-1 rounded">
                            {`Card ${index+1}`}
                        </div>
                        {/* Delete Button */}
                        <button
                            onClick={() => handleDeleteCard(index)}
                            className="absolute top-2 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                        {/* Card Content */}
                        <div className="mt-[30%] text-white">
                            {/* <h1 className="font-Andika text-lg text-center font-bold">
                                {card.title}
                            </h1> */}
                            
                            <p className="text-center">{card.description}</p>
                            <hr className="w-2/4 border-[#C8F51E] mx-auto my-3" />
                            <h1 className="font-roboto text-lg text-center font-bold mt-3">
                                {card.date}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Submit All Button */}
            {cards.length > 0 && (
                <button
                    onClick={handleSubmitAll}
                    className="m-10 py-2 px-6 font-semibold text-white bg-[#0B0A2A] rounded-lg hover:bg-[#0B0A2A] focus:ring-4 focus:ring-[#C8F51E]"
                >
                    Submit All
                </button>
            )}
        </div>
    );
}
