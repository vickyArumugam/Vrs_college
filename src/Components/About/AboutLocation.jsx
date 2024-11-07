import React from 'react'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const AboutLocation = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-[450px] bg-green-200 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center text-white">
        <div className="flex gap-80 mr-32 text-center mt-8">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl mb-1 w-14 h-14"  color="#C8F51E" size={60} />
            <h1 className="uppercase font-semibold t font-Playwrite text-23 my-6">Where</h1>
            <span className="font-semibold  font-Playwrite text-20">
              <p className='my-3'>V.R.S. College of Engineering and Technology</p>
              <p className='my-3'>Arasur - 607 107</p>
              <p className='my-3'>Villupuram District</p>
             </span>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-4xl mb-1" color="#C8F51E" size={60} />
            {/* <img src="public/images/calendar_10265353.png" alt="calendar_img" /> */}
            <h1 className="uppercase font-semibold t font-Playwrite text-23 my-6">When</h1>
            <span className="font-semibold  font-Playwrite text-20">
             <p className='my-3'>26<sup>th</sup> April, 2024</p> 
              <p  className='my-3'>(Friday)</p></span>
          </div>
        </div>
        <button className="uppercase w-52 h-12 mt-10 bg-red-600 text-white tracking-wide font-medium  hover:bg-btn-bg transition duration-200 ">
          Register Here
        </button>
      </div>
    </section>
    // bg-[url('/images/002051.jpg')] bg-cover bg-center
    )
}

export default AboutLocation
