import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Theme() {
    const [color1, setColor1] = useState("#ff0000");
    const [color2, setColor2] = useState("#00ff00");
    const [savedColors, setSavedColors] = useState([]);

    const fetchColors = async () => {
        try {
            const response = await axios.get("http://localhost/mailapp/colors.php");
            if (response.data && Array.isArray(response.data)) {
                setSavedColors(response.data);
            } else {
                console.error("Invalid data format from server:", response.data);
            }
        } catch (error) {
            console.error("Error fetching colors:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost/mailapp/colors.php", { color1, color2 });
            fetchColors(); // Refresh the list of saved colors
            setColor1("#ff0000"); // Reset the input values
            setColor2("#00ff00");
        } catch (error) {
            console.error("Error saving colors:", error);
        }
    };

    useEffect(() => {
        fetchColors();
    }, []);

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Set Theme</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Theme 1</label>
                    <input
                        type="color"
                        value={color1}
                        onChange={(e) => setColor1(e.target.value)}
                        className="w-full h-10 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-green-300"
                    />
                    <span className="text-black">OR</span>
                    <input
                        type="text"
                        value={color1}
                        onChange={(e) => setColor1(e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300  text-black"
                        placeholder="Enter HEX code"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Theme 2</label>
                    <input
                        type="color"
                        value={color2}
                        onChange={(e) => setColor2(e.target.value)}
                        className="w-full h-10 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-green-300"
                    />
                     <span className="text-black">OR</span>
                    <input
                        type="text"
                        value={color2}
                        onChange={(e) => setColor2(e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300 text-black"
                        placeholder="Enter HEX code"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition duration-300"
                >
                    Submit Colors
                </button>
            </form>

            <h3 className="text-xl font-semibold mt-8 text-gray-800">Saved Colors</h3>
            <table className="w-full mt-4 border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border text-black">Color 1</th>
                        <th className="py-2 px-4 border text-black">Color 2</th>
                    </tr>
                </thead>
                <tbody>
                    {savedColors.map((row, index) => (
                        <tr key={index} className="text-center">
                            <td
                                className="py-2 px-4 border"
                                style={{ backgroundColor: row.color1 }}
                            >
                                {row.color1}
                            </td>
                            <td
                                className="py-2 px-4 border"
                                style={{ backgroundColor: row.color2 }}
                            >
                                {row.color2}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
