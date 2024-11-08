import React from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

function Contact_us() {
  return (
    <div>
        <AboutHeader/>
        <section>
                <div className="flex justify-center" >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52538.87974771864!2d79.41420418992182!3d11.836981751948784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54ab06a0d742d3%3A0xeabe40e3ddd35f48!2sVRS%20College%20Of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1729960808177!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="shadow-lg w-full h-[700px]"
                    />
                </div>
        </section>

         <section className="flex flex-col items-center justify-center w-full h-[450px] bg-green-200 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center text-white">
        <div className="flex gap-80 mr-32 text-center mt-8">
          <div className="flex flex-col items-center">
            {/* <FaMapMarkerAlt className="text-4xl mb-1 w-14 h-14"  color="#C8F51E" size={60} /> */}
            <p>CALL US @</p>
            <h1 className="uppercase font-semibold t font-Playwrite text-40 my-6">+91 8870301652</h1>
            <span className="font-semibold  font-Playwrite text-20">
              <p className='my-3'>V.R.S. College of Engineering and Technology</p>
              <p className='my-3'>Arasur - 607 107, Villupuram District,</p>
              <p className='my-3'>Tamilnadu, India.</p>
             </span>
          </div>
          {/* <div className="flex flex-col items-center">
            <FaClock className="text-4xl mb-1" color="#C8F51E" size={60} />
            <img src="public/images/calendar_10265353.png" alt="calendar_img" />
            <h1 className="uppercase font-semibold t font-Playwrite text-23 my-6">When</h1>
            <span className="font-semibold  font-Playwrite text-20">
             <p className='my-3'>26<sup>th</sup> April, 2024</p> 
              <p  className='my-3'>(Friday)</p></span>
          </div> */}
        </div>
        {/* <button className="uppercase w-52 h-12 mt-10 bg-red-600 text-white tracking-wide font-medium  hover:bg-btn-bg transition duration-200 ">
          Register Here
        </button> */}
      </div>
    </section>
       
        <div className='bg-footer-bg p-2 text-footer-text  text-center '>
                    <p className='text-[#C8F51E]'>
                        Copyright 2024 - V.R.S. College of Engineering and Technology

                    </p>

        </div>
    </div>
  )
}

export default Contact_us
