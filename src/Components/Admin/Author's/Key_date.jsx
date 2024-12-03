import React, { useState } from 'react';

const Key_Dates = () => {
  const [newDate, setNewDate] = useState({ description: '', date: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost/mailapp/key_dates.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDate),
      });

      const result = await response.json();
      if (response.ok) {
        setNewDate({ description: '', date: '' }); // Reset form
        alert('Date added successfully');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Error adding date: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-8">
        Add Key Date
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#0B0A2A] p-6 rounded-lg text-white w-full max-w-md shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <input
            type="text"
            id="description"
            value={newDate.description}
            onChange={(e) => setNewDate({ ...newDate, description: e.target.value })}
            placeholder="Enter Description"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">Date</label>
          <input
            type="date"
            id="date"
            value={newDate.date}
            onChange={(e) => setNewDate({ ...newDate, date: e.target.value })}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Key Date'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default Key_Dates;
