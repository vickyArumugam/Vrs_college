import React, { useState } from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'
import axios from 'axios';

const New_Paper_Submission = () => {

  const [fileName, setFileName] = useState(null);
  const [paper_title,setPaper_title] =useState();
  const [author_name,setAuthor_name] =useState();
  const [mobile_no,setMobile_no] = useState();
  const [email,setEmail]=useState();
  const [institution,setInstitution] = useState();
  const [category, setCategory] = useState('');
  
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }
   const handleSubmit = (e) => {
    e.preventDefault();
     const formData = new FormData();
    formData.append('paper_title', paper_title);
    formData.append('author_name', author_name);
    formData.append('mobile_no', mobile_no);
    formData.append('email', email);
    formData.append('institution', institution);
    formData.append('category', category);

    // If a file is selected, append it to the form data
    if (fileName) {
      const fileInput = document.getElementById('fileInput');
      formData.append('file', fileInput.files[0]);
    }

    // You can now send the formData to the backend API
    // Example using fetch:
    /*
    fetch('your-api-endpoint', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    */

    // For testing, log the form data:
    console.log('Form submitted:', {
      paper_title,
      author_name,
      mobile_no,
      email,
      institution,
      category,
      fileName,
   });
   }
  return (
    <div>
      <AboutHeader />
      <div className='w-full my-24 flex items-center justify-center bg-gray-100 p-4 md:p-8'>
        <form className='bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg md:max-w-2xl w-full space-y-6 my-10 md:my-20'>
          <h2 className='text-xl md:text-2xl font-semibold text-center text-green-600'>Submit Your Paper</h2>

          <div>
            <label className='block text-green-600 font-medium'>Enter Paper Title</label>
            <input
              type='text' required name='paper_title' id='paper_title' value={paper_title} onChange={(e)=>setPaper_title(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Full Name</label>
            <input
              type='text' required name='author_name' id='author_name' value={author_name} onChange={(e)=>setAuthor_name(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Mobile Number</label>
            <input
              type='text' required name='mobile_no' id='mobile_no' value={mobile_no} onChange={(e)=>setMobile_no(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Email Address</label>
            <input
              type='email' required name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Institution Name</label>
            <input
              type='text' required name='institution' id='institution' value={institution} onChange={(e)=>setInstitution(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Select First Author Category</label>
            <div className='relative'>
              <select
                className='appearance-none mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700'
                name='category' id='category' value={category} onChange={(e)=>setCategory(e.target.value)}
              >
                <option value='Academicians'>Academicians</option>
                <option value='Students & PG/Ph.D Scholar'>Students & PG/Ph.D Scholar</option>
                <option value='Industry Delegates'>Industry Delegates</option>
                <option value='Overseas Delegates'>Overseas Delegates</option>
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className='block text-green-600 font-medium'>Upload Paper</label>
            <div className='flex items-center mt-1'>
              <label
                className={`flex-grow px-4 py-2 border border-gray-300 rounded-lg ${fileName ? 'text-green-600' : 'text-red-500'
                  }`}
              >
                {fileName || 'No file chosen'}
              </label>
              <input
                type='file'
                required
                className='hidden'
                id='fileInput'
                onChange={handleFileChange}
              />
              <label
                htmlFor='fileInput'
                className='ml-4 px-4 py-2 bg-green-400 text-white rounded-lg cursor-pointer hover:bg-green-500'
              >
                Choose File
              </label>
            </div>
          </div>


          <button
            type='submit'
            className='w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-500 transition duration-200'
            onClick={handleSubmit}
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




