import React, { useState } from 'react';

const UploadLogo = () => {
  const [formData, setFormData] = useState({
    backgroundImage: null,
  });

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === 'backgroundImage') {
      setFormData({ ...formData, backgroundImage: files[0] });
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('backgroundImage', formData.backgroundImage);

    try {
      const response = await fetch('http://localhost/mailapp/uploadlogo.php', {
        method: 'POST',
        body: formDataObj,
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl font-extrabold text-[#C8F51E] mb-8 text-center">
        Upload Logo
      </h1>
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-[#0B0A2A]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Upload Logo
            </label>
            <input
              type="file"
              name="backgroundImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300"
          >
            Upload Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadLogo;
