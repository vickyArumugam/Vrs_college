import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Journal_publication = () => {
    const [journals, setJournals] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        descriptions: ['']
    });
    const [message, setMessage] = useState('');


    useEffect(() => {
        const fetchJournals = async () => {
            try {
                const response = await axios.get('http://localhost/mailapp/author_Journal_publication.php');
                // Ensure response.data is an array
                const data = Array.isArray(response.data) ? response.data : [];
                setJournals(data);
            } catch (error) {
                console.error('Error fetching journals:', error);
                setJournals([]); // Fallback to empty array in case of error
            }
        };

        fetchJournals();
    }, []);


    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedDescriptions = [...formData.descriptions];
        updatedDescriptions[index] = value;

        setFormData((prevState) => ({
            ...prevState,
            [name]: updatedDescriptions
        }));
    };


    const handleAddDescription = () => {
        setFormData((prevState) => ({
            ...prevState,
            descriptions: [...prevState.descriptions, '']
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title || formData.descriptions.some((desc) => !desc.trim())) {
            setMessage('Both title and at least one description are required.');
            return;
        }

        try {
            const response = await axios.post('http://localhost/mailapp/author_Journal_publication.php', formData);
            setMessage(response.data.message || 'Data submitted successfully!');
            setFormData({ title: '', descriptions: [''] }); // Reset form
            setJournals([...journals, formData]); // Add new journal to list
        } catch (error) {
            setMessage('Error submitting data');
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="text-center py-10 text-[#0B0A2A] font-bold text-lg space-y-10 bg-white">
            <h1 className="font-bold text-25 font-Andika hover:text-[#C8F51E]">
                Journals for Publication
            </h1>


            <form onSubmit={handleSubmit} className="my-4">
                <div className="mb-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter Journal Title"
                        className="p-2 border rounded w-[60%]"
                        required
                    />
                </div>


                {formData.descriptions.map((description, index) => (
                    <div key={index} className="mb-4">
                        <textarea
                            name="descriptions"
                            value={description}
                            onChange={(e) => handleInputChange(e, index)}
                            placeholder={`Enter Description #${index + 1}`}
                            className="p-2 border rounded  w-[60%]"
                            required
                        />
                    </div>
                ))}


                <button
                    type="button"
                    onClick={handleAddDescription}
                    className="p-2 bg-blue-500 text-white rounded mb-4 mr-4"
                >
                    Add Another Description
                </button>


                <button type="submit" className="p-2 bg-green-500 text-white rounded ">
                    Submit Journal
                </button>
            </form>


            {message && <p className="text-green-500">{message}</p>}


            <div>
                {Array.isArray(journals) && journals.length > 0 ? (
                    journals.map((journal, index) => (
                        <div key={index} className="w-full max-w-3xl h-auto md:h-16 bg-[#0B0A2A] text-white text-lg md:text-2xl font-Trebuchet text-center rounded-lg mb-4">
                            <p className="my-3">{journal.title}</p>
                            {Array.isArray(journal.descriptions) &&
                                journal.descriptions.map((desc, idx) => (
                                    <p key={idx} className="my-3">{desc}</p>
                                ))}
                        </div>
                    ))
                ) : (
                    <p>No journals available.</p>
                )}
            </div>
        </div>
    );
};

export default Journal_publication;
