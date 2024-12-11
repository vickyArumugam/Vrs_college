import React, { useState } from 'react';
import axios from 'axios';

const DynamicFieldsForm = () => {
    const [fields, setFields] = useState([{ field_name: '' }]);
    const [message, setMessage] = useState('');

    const handleInputChange = (index, event) => {
        const values = [...fields];
        values[index].field_name = event.target.value;
        setFields(values);
    };

    const handleAddField = () => {
        setFields([...fields, { field_name: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (fields.some((field) => !field.field_name)) {
            setMessage('All fields must be filled out.');
            return;
        }

        try {
            const response = await axios.post('http://localhost/mailapp/author_conference_tracks.php', {
                fields: fields.map((field) => field.field_name),
            });
            setMessage(response.data.message || 'Fields added successfully');
            setFields([{ field_name: '' }]);
        } catch (error) {
            console.error('Error submitting fields:', error);
            setMessage('Error submitting fields.');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-10 mt-10">
                Dynamic Fields Form
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-[#0B0A2A] p-6 rounded-lg text-white w-full max-w-md"
            >
                {message && (
                    <p
                        className={`text-center text-lg font-medium ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'
                            } mb-4`}
                    >
                        {message}
                    </p>
                )}
                {fields.map((field, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={`field-${index}`} className="block text-sm mb-2">
                            Field #{index + 1}
                        </label>
                        <input
                            type="text"
                            id={`field-${index}`}
                            placeholder={`Enter field #${index + 1}`}
                            value={field.field_name}
                            onChange={(e) => handleInputChange(index, e)}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            required
                        />
                    </div>
                ))}
                <div className="flex justify-between items-center mt-4">
                    <button
                        type="button"
                        onClick={handleAddField}
                        className="p-3  bg-blue-500 hover:bg-blue-700 rounded text-white transition"
                    >
                        Add Another Field
                    </button>
                    <button
                        type="submit"
                        className="p-3 bg-green-500 hover:bg-green-700 rounded text-white transition"
                    >
                        Submit Fields
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DynamicFieldsForm;
