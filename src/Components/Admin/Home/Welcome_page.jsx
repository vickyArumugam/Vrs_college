import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavbar from '../../SideBar/SideNavbar';
import TopNavBar from '../../SideBar/TopNavBar';

function Welcome_page() {
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
    <div>
      <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol text-[#000]">
            Welcome page Update
          </h1>
        </div>
        <div className=" w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Conference Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">Conference Title</label>
              <input
                type="text"
                name="conferenceTitle"
                value={conferenceData.conferenceTitle}
                onChange={handleChange}
                placeholder="Enter conference title"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">Conference Subtitle</label>
              <input
                type="text"
                name="conferenceSubtitle"
                value={conferenceData.conferenceSubtitle}
                onChange={handleChange}
                placeholder="Enter conference subtitle"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">Conference Date</label>
              <input
                type="date"
                name="conferenceDate"
                value={conferenceData.conferenceDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-semibold mb-2">Conference Type</label>
              <input
                type="text"
                name="conferenceType"
                value={conferenceData.conferenceType}
                onChange={handleChange}
                placeholder="Enter conference type"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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
    </div>
    
  );
}

export default Welcome_page;
