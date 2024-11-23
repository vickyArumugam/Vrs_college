import React, { useState } from "react";

export default function Scope_conference() {
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
            const response = await fetch('http://localhost/mailapp/about_scope_conference.php', {
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
          navigate('/');
        // Perform form submission or API call
    };

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center bg-[#fff] py-4 relative">
            <div className="my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol text-[#000]">
                    Scope Conference Details
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full px-5 md:w-8/12 lg:w-7/12 xl:w-5/12 bg-white p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter conference description"
                        required
                        rows="5"
                        className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>


                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}