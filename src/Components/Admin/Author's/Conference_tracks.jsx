import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicFieldsForm = () => {
    const [fields, setFields] = useState([ // Initial state with one field input
        { field_name: '' }
    ]);
    const [message, setMessage] = useState('');

    // Function to handle input changes dynamically
    const handleInputChange = (index, event) => {
        const values = [...fields];
        values[index].field_name = event.target.value;
        setFields(values);
    };

    // Function to handle adding a new field
    const handleAddField = () => {
        setFields([...fields, { field_name: '' }]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure no empty fields are submitted
        if (fields.some(field => !field.field_name)) {
            setMessage('All fields must be filled out.');
            return;
        }

        try {
            const response = await axios.post('http://localhost/mailapp/author_conference_tracks.php', {
                fields: fields.map(field => field.field_name) // Send an array of field names
            });
            setMessage(response.data.message || 'Fields added successfully');
            setFields([{ field_name: '' }]); // Reset the form after successful submission
        } catch (error) {
            console.error('Error submitting fields:', error);
        }
    };

    return (
        <div className=" h-[850px] text-center py-10 text-[#0B0A2A] font-bold text-lg space-y-10 bg-white">
           

            {/* Display any message */}
            {message && <p className="text-green-500">{message}</p>}

            {/* Dynamic Form */}
            <form onSubmit={handleSubmit} className="my-4">
                {/* Dynamically render input fields */}
                {fields.map((field, index) => (
                    <div key={index} className="flex justify-center gap-4 mb-4">
                        <input
                            type="text"
                            placeholder={`Enter field #${index + 1}`}
                            value={field.field_name}
                            onChange={(e) => handleInputChange(index, e)}
                            className="p-2 border rounded"
                            required
                        />
                    </div>
                ))}

                {/* Button to add more fields */}
                <button type="button" onClick={handleAddField} className="p-2 bg-blue-500 text-white rounded">
                    Add Another Field
                </button>

                {/* Submit Button */}
                <button type="submit" className="ml-2 p-2 bg-green-500 text-white rounded">Submit Fields</button>
            </form>
        </div>
    );
};

export default DynamicFieldsForm;
