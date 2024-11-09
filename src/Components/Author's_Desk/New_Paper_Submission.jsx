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
      <div className='w-full my-24 flex items-center justify-center bg-gray-100 p-4 md:p-8'>
        <form className='bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg md:max-w-2xl w-full space-y-6 my-10 md:my-20'>
          <h2 className='text-xl md:text-2xl font-semibold text-center text-green-600'>Submit Your Paper</h2>

          <div>
            <label className='block text-green-600 font-medium'>Enter Paper Title</label>
            <input
              type='text' required
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Full Name</label>
            <input
              type='text' required
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Mobile Number</label>
            <input
              type='text' required
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Email Address</label>
            <input
              type='email' required
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Enter First Author Institution Name</label>
            <input
              type='text' required
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block text-green-600 font-medium'>Select First Author Category</label>
            <div className='relative'>
              <select
                className='appearance-none mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700'
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
                className='ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600'
              >
                Choose File
              </label>
            </div>
          </div>


          <button
            type='submit'
            className='w-full bg-green-400 text-white py-2 rounded-lg hover:bg-green-500 transition duration-200'
            // onClick={}
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




// import React, { useState } from 'react';

// const SubmitPaperForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     authorName: '',
//     mobile: '',
//     email: '',
//     institution: '',
//     category: '',
//     file: null,
//   });
//   const [fileName, setFileName] = useState(''); // For displaying file name

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       file: file,
//     });
//     setFileName(file ? file.name : '');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();

//     // Append form data to FormData object
//     data.append('title', formData.title);
//     data.append('authorName', formData.authorName);
//     data.append('mobile', formData.mobile);
//     data.append('email', formData.email);
//     data.append('institution', formData.institution);
//     data.append('category', formData.category);
//     data.append('file', formData.file);

//     try {
//       const response = await fetch('https://your-backend-url.com/api/submit-paper', {
//         method: 'POST',
//         body: data,
//       });

//       if (response.ok) {
//         console.log('Form submitted successfully!');
//       } else {
//         console.error('Failed to submit form');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-100 p-4 md:p-8">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg md:max-w-2xl w-full space-y-6 my-10 md:my-20"
//       >
//         <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800">
//           Submit Your Paper
//         </h2>

//         <div>
//           <label className="block text-gray-700 font-medium">Enter Paper Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Enter First Author Full Name</label>
//           <input
//             type="text"
//             name="authorName"
//             value={formData.authorName}
//             onChange={handleChange}
//             required
//             className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Enter First Author Mobile Number</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//             className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Enter First Author Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Enter First Author Institution Name</label>
//           <input
//             type="text"
//             name="institution"
//             value={formData.institution}
//             onChange={handleChange}
//             required
//             className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Select First Author Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="appearance-none mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//           >
//             <option value="Academicians">Academicians</option>
//             <option value="Students & PG/Ph.D Scholar">Students & PG/Ph.D Scholar</option>
//             <option value="Industry Delegates">Industry Delegates</option>
//             <option value="Overseas Delegates">Overseas Delegates</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-green-600 font-medium">Upload Paper</label>
//           <div className="flex items-center mt-1">
//             <label
//               className={`flex-grow px-4 py-2 border border-gray-300 rounded-lg ${
//                 fileName ? 'text-green-600' : 'text-red-500'
//               }`}
//             >
//               {fileName || 'No file chosen'}
//             </label>
//             <input
//               type="file"
//               name="file"
//               required
//               className="hidden"
//               id="fileInput"
//               onChange={handleFileChange}
//             />
//             <label
//               htmlFor="fileInput"
//               className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
//             >
//               Choose File
//             </label>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
//         >
//           Submit Paper
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SubmitPaperForm;

