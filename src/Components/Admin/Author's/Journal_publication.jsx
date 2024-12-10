import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Journal_publication = () => {
  const [journals, setJournals] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    descriptions: [''],
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get('http://localhost/mailapp/author_Journal_publication.php');
        const data = Array.isArray(response.data) ? response.data : [];
        setJournals(data);
      } catch (error) {
        console.error('Error fetching journals:', error);
        setJournals([]);
      }
    };

    fetchJournals();
  }, []);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedDescriptions = [...formData.descriptions];
    updatedDescriptions[index] = value;

    setFormData((prevState) => ({
      ...prevState,
      descriptions: updatedDescriptions,
    }));
  };

  const handleAddDescription = () => {
    setFormData((prevState) => ({
      ...prevState,
      descriptions: [...prevState.descriptions, ''],
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    if (!formData.title || formData.descriptions.some((desc) => !desc.trim())) {
      setMessage('Both title and at least one description are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost/mailapp/author_Journal_publication.php', formData);
      setMessage(response.data.message || 'Data submitted successfully!');
      setFormData({ title: '', descriptions: [''] }); 
      setJournals([...journals, formData]); // Add new journal to list
    } catch (error) {
      setMessage('Error submitting data');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center py-10  text-white">
      <h1 className="font-bold text-[40px] font-Andika text-[#C8F51E] mb-6">
        Journals for Publication
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#14132E] p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label htmlFor="title" className="block mb-2 text-lg">
            Journal Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter Journal Title"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-[#C8F51E]"
            required
          />
        </div>

        {formData.descriptions.map((description, index) => (
          <div key={index}>
            <label className="block mb-2 text-lg">{`Description #${index + 1}`}</label>
            <textarea
              name="descriptions"
              value={description}
              onChange={(e) => handleInputChange(e, index)}
              placeholder={`Enter Description #${index + 1}`}
              className="w-full p-2 rounded bg-gray-700 text-white border-none focus:ring-2 focus:ring-[#C8F51E]"
              required
            />
          </div>
        ))}

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleAddDescription}
            className="flex-1 p-2 bg-blue-500 hover:bg-blue-700 rounded text-white"
          >
            Add Another Description
          </button>
          <button
            type="submit"
            className="flex-1 p-2 bg-green-500 hover:bg-green-700 rounded text-white"
          >
            Submit Journal
          </button>
        </div>
      </form>

      {message && <p className="mt-4 text-green-400">{message}</p>}

      <div className="mt-8 w-full max-w-5xl space-y-4">
        {Array.isArray(journals) && journals.length > 0 ? (
          journals.map((journal, index) => (
            <div
              key={index}
              className="bg-[#0B0A2A] p-4 rounded-lg shadow-md text-center"
            >
              <h2 className="font-bold text-xl text-[#C8F51E] mb-2">
                {journal.title}
              </h2>
              {Array.isArray(journal.descriptions) &&
                journal.descriptions.map((desc, idx) => (
                  <p key={idx} className="text-gray-300">{desc}</p>
                ))}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No journals available.</p>
        )}
      </div>
    </div>
  );
};

export default Journal_publication;
