import React, { useState } from 'react';
import AboutHeader from '../About/AboutHeader';
import AboutLocation from '../About/AboutLocation';
import AboutFooter from '../About/AboutFooter';

const New_Paper_Submission = (props) => {
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [paperTitle, setPaperTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [category, setCategory] = useState('Academicians');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('paper_title', paperTitle);
    formData.append('author_name', authorName);
    formData.append('mobile_no', mobileNo);
    formData.append('email', email);
    formData.append('institution', institution);
    formData.append('category', category);

    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const response = await fetch('http://localhost/mailapp/mail.php', {
        method: 'POST',
        body: formData,
      });
      const result = await response.text();
      console.log('Server response:', result);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div>
      <AboutHeader title={"NEW PAPER SUBMISSION"} theme1={props.color1} theme2={props.color2} />
      <div className='w-full flex items-center justify-center bg-gray-100 p-4 md:p-8'>
        <form
          className='bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg md:max-w-2xl w-full space-y-6 my-10 md:my-20'
          onSubmit={handleSubmit}
          action="mail.php"
          method="POST"
          enctype="multipart/form-data"
        >
          <h2
            className='text-xl md:text-2xl font-semibold text-center'
            style={{ color: props.color2 }}
          >
            Submit Your Paper
          </h2>

          <div>
            <label className='block font-medium' style={{ color: props.color2 }}>
              Enter Paper Title
            </label>
            <input
              type='text'
              required
              value={paperTitle}
              onChange={(e) => setPaperTitle(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium' style={{ color: props.color2 }}>
              Enter First Author Full Name
            </label>
            <input
              type='text'
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium' style={{ color: props.color2 }}>
              Enter First Author Mobile Number
            </label>
            <input
              type='text'
              required
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium' style={{ color: props.color2 }}>
              Enter First Author Email Address
            </label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium' style={{ color: props.color2 }}>
              Enter First Author Institution Name
            </label>
            <input
              type='text'
              required
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium' style={{ color: props.color2 }}>
              Select First Author Category
            </label>
            <select
              className='appearance-none mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='Academicians'>Academicians</option>
              <option value='Students & PG/Ph.D Scholar'>Students & PG/Ph.D Scholar</option>
              <option value='Industry Delegates'>Industry Delegates</option>
              <option value='Overseas Delegates'>Overseas Delegates</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className='block font-medium' style={{ color: props.color2 }}>
              Upload Paper
            </label>
            <div className='flex items-center mt-1'>
              <label
                className={`flex-grow px-4 py-2 border border-gray-300 rounded-lg ${fileName ? 'text-gray-700' : 'text-red-500'
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
                className='ml-4 px-4 py-2 rounded-lg cursor-pointer'
                style={{ backgroundColor: props.color2, color: 'white' }}
              >
                Choose File
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-2 rounded-lg transition duration-200'
            style={{ backgroundColor: props.color2, color: 'white' }}
          >
            Submit Paper
          </button>
        </form>
      </div>

      <AboutLocation />
      <AboutFooter theme1={props.color1} theme2={props.color2} />
    </div>
  );
};

export default New_Paper_Submission;