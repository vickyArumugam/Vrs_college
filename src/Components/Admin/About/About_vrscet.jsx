import React, { useState } from "react";

export default function About_vrscet() {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        description: "",
        date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/mailapp/about_vrscet_conference.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className="flex flex-col justify-center items-center  py-4 w-full h-screen">
            <div className="my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center">
                <h1 className="text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E]">
                    Vrscet Conference Details
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full px-5 md:w-8/12 lg:w-7/12 xl:w-5/12 bg-[#0B0A2A] p-8 rounded-lg shadow-lg"
            >
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-semibold mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter conference description"
                        required
                        rows="5"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8F51E]"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 hover:bg-green-700 rounded text-white transition"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
