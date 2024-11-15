import React, { useState } from 'react';

function Update() {
  const [conferenceData, setConferenceData] = useState({
    title: '',
    date: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    setConferenceData({ ...conferenceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/mailapp/updateConference.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(conferenceData)
      });
    
      const result = await response.json();
      console.log(result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Conference Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Conference Title</label>
            <input
              type="text"
              name="title"
              value={conferenceData.title}
              onChange={handleChange}
              placeholder="Enter conference title"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Conference Date</label>
            <input
              type="text"
              name="date"
              value={conferenceData.date}
              onChange={handleChange}
              placeholder="Enter conference date"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Conference Description</label>
            <input
              type="text"
              name="description"
              value={conferenceData.description}
              onChange={handleChange}
              placeholder="Enter conference description"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={conferenceData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            Update Conference
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
