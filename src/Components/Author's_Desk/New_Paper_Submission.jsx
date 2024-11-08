import React, { useState } from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const New_Paper_Submission = () => {

  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }
  return (
    <div>
      <AboutHeader />
      <div className="flex items-center justify-center  bg-gray-100">
        <form className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full my-20 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Submit Your Paper</h2>

          <div>
            <label className="block text-gray-700 font-medium">Enter Paper Title</label>
            <input
              type="text" required
              className="mt-1 w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Enter First Author Full Name</label>
            <input
              type="text" required
              className="mt-1 w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Enter First Author Mobile Number</label>
            <input
              type="text" required
              className="mt-1 w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Enter First Author Email Address</label>
            <input
              type="email" required
              className="mt-1 w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Enter First Author Institution Name</label>
            <input
              type="text" required
              className="mt-1 w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Select First Author Category</label>
            <div className="relative">
              <select
                className="appearance-none mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              >
                <option value="Academicians">Academicians</option>
                <option value="Students & PG/Ph.D Scholar">Students & PG/Ph.D Scholar</option>
                <option value="Industry Delegates">Industry Delegates</option>
                <option value="Overseas DElegates">Overseas DElegates</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Upload Paper</label>
            <div className="flex items-center mt-1">
              <label className="flex-grow px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
                {fileName || "No file chosen"}
              </label>
              <input
                type="file"
                required
                className="hidden"
                id="fileInput"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
              >
                Choose File
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Paper
          </button>
        </form>
      </div>



      <AboutLocation />
      <AboutFooter />

    </div>
  )
}


export default New_Paper_Submission



