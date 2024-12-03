import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const [conferenceData, setConferenceData] = useState({
    conferenceTitle: '',
    conferenceSubtitle: '',
    conferenceDate: '',
    conferenceType: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setConferenceData({ ...conferenceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/mailapp/updateConference.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(conferenceData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    navigate('/');
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl font-extrabold  text-[#C8F51E] mb-8 text-center">Welcome Page Update</h1>
      
      <div className="w-full max-w-md p-8  rounded-lg shadow-lg bg-[#0B0A2A] ">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Update Conference Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#0B0A2A]">
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Conference Title</label>
            <input
              type="text"
              name="conferenceTitle"
              value={conferenceData.conferenceTitle}
              onChange={handleChange}
              placeholder="Enter conference title"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Conference Subtitle</label>
            <input
              type="text"
              name="conferenceSubtitle"
              value={conferenceData.conferenceSubtitle}
              onChange={handleChange}
              placeholder="Enter conference subtitle"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-whitetext-sm font-semibold mb-2">Conference Date</label>
            <input
              type="date"
              name="conferenceDate"
              value={conferenceData.conferenceDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-2">Conference Type</label>
            <input
              type="text"
              name="conferenceType"
              value={conferenceData.conferenceType}
              onChange={handleChange}
              placeholder="Enter conference type"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300"
          >
            Update Conference
          </button>
        </form>
      </div>
    </div>
  );
}

export default WelcomePage;
