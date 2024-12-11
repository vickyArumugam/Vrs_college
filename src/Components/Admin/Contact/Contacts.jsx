import React, { useState } from 'react';
import axios from 'axios';

export default function Contacts() {
  const [formData, setFormData] = useState({
    collegeName: '',
    isoNumber: '',
    village: '',
    district: '',
    mobile: '',
    email: '',
    states: '',
    country: '',
  });

  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost/mailapp/contact.php', formData);
      setResponse(res.data.message);
      setFormData({
        collegeName: '',
        isoNumber: '',
        village: '',
        district: '',
        mobile: '',
        email: '',
        states: '',
        country: '',
      });
    } catch (error) {
      setResponse('Error: Unable to submit the form.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-10 mt-10">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#0B0A2A] p-6 rounded-lg text-white w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="collegeName" className="block mb-1">College Name</label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isoNumber" className="block mb-1">ISO Number</label>
          <input
            type="text"
            id="isoNumber"
            name="isoNumber"
            value={formData.isoNumber}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="village" className="block mb-1">Village</label>
          <input
            type="text"
            id="village"
            name="village"
            value={formData.village}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="district" className="block mb-1">District</label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="district" className="block mb-1">States</label>
          <input
            type="text"
            id="states"
            name="states"
            value={formData.states}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="district" className="block mb-1">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block mb-1">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {response && <p className="mt-4 text-white">{response}</p>}
    </div>
  );
}
