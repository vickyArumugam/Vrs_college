import React, { useState } from 'react';

const Key_Dates = () => {
  const [newDate, setNewDate] = useState({ description: '', date: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle the form submission
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
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-center text-2xl font-bold mb-4">Add New Key Date</h2>

      {/* Form to add a new key date */}
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <input
          type="text"
          value={newDate.description}
          onChange={(e) => setNewDate({ ...newDate, description: e.target.value })}
          placeholder="Enter Description"
          className="p-2 border border-gray-300 rounded w-full text-black"
          required
        />
        <input
          type="date"
          value={newDate.date}
          onChange={(e) => setNewDate({ ...newDate, date: e.target.value })}
          className="p-2 border border-gray-300 rounded w-full text-black"
          required
        />
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Key Date'}
        </button>
      </form>

      {/* Error handling */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
};

export default Key_Dates;
