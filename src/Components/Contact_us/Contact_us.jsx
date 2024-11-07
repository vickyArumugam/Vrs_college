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
        <AboutLocation/>
        <div className='bg-footer-bg p-2 text-footer-text  text-center '>
                    <p className='text-[#C8F51E]'>
                        Copyright 2024 - V.R.S. College of Engineering and Technology

                    </p>

        </div>
    </div>
  )
}

export default Contact_us
