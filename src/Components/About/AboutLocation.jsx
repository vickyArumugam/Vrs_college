import React from 'react'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const AboutLocation = () => {
    return (
      <section className="flex flex-col items-center justify-center w-full h-[680px] lg:h-[480px] bg-green-200 relative">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative flex flex-col items-center text-white px-4 md:px-8 lg:px-16">
    <div className="flex flex-col md:flex-col lg:flex-row lg:gap-96 gap-10 text-center mt-8 md:mt-0">
      <div className="flex flex-col items-center">
        <FaMapMarkerAlt className="text-4xl mb-1 w-14 h-14 lg:m-0 mt-16" color="#C8F51E" size={60} />
        <h1 className="uppercase font-semibold font-Playwrite text-lg md:text-xl my-4">Where</h1>
        <span className="font-semibold font-Playwrite text-sm md:text-base">
          <p className="my-2">V.R.S. College of Engineering and Technology</p>
          <p className="my-2">Arasur - 607 107</p>
          <p className="my-2">Villupuram District</p>
        </span>
      </div>
      <div className="flex flex-col items-center">
        <FaClock className="text-4xl mb-1" color="#C8F51E" size={60} />
        <h1 className="uppercase font-semibold font-Playwrite text-lg md:text-xl my-4">When</h1>
        <span className="font-semibold font-Playwrite text-sm md:text-base">
          <p className="my-2">26<sup>th</sup> April, 2024</p>
          <p className="my-2">(Friday)</p>
        </span>
      </div>
    </div>
    <button className="uppercase w-40 md:w-52 h-12 mt-8 bg-red-600 text-white tracking-wide font-medium hover:bg-btn-bg transition duration-200">
      Register Here
    </button>
  </div>
</section>

    // bg-[url('/images/002051.jpg')] bg-cover bg-center
    )
}

export default AboutLocation
