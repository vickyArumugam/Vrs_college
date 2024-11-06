import React from 'react'

const AboutFooter = () => {
    return (
        <div>
            <section className=" w-full h-[470px] flex flex-col text-center justify-center  bg-[url('/images/contact-img.jpg')] bg-cover bg-top relative">
             <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className='z-10 ml-20 relative'>
                    <h3 className='text-about-text-col font-roboto text-20 font-bold tracking-[1em] uppercase'>Contact</h3>
                    <h1 className='text-about-text-col font-roboto text-50 font-extrabold my-5'>For any inquiries</h1>
                    <div className='w-full flex justify-evenly mt-16'>
                        <h1 className='text-about-text-col text-2xl font-roboto text-23 font-semibold'>Email ID : icvrscet@gmail.com</h1>
                        <h1 className='text-about-text-col text-2xl font-roboto text-23 font-semibold mr-20'>Mobile : +91 8870301652</h1>
                    </div>
                    <div className=' w-full h-20 flex justify-center items-center  gap-10 '>
                        <img src="\images\facebook_5968764 (1).png" alt='facebook-icon' className='transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full' />
                        <img src="\images\twitter_3955031.png" alt="twitter-icon" className='transform transition-transform duration-200 hover:scale-110  border-3 hover:border-[#C8F51E] rounded-full' />
                        <img src="\images\instagram_1384015.png" alt="insta-icon" className='transform transition-transform duration-200 hover:scale-110  border-3 hover:border-[#C8F51E] rounded-full' />
                        <img src="\images\social_15707814.png" alt="youtube-icon" className='transform transition-transform duration-200 hover:scale-110  border-3 hover:border-[#C8F51E] rounded-full' />
                    </div>
                </div>
              
            </section>
            <div className='bg-footer-bg p-2 text-[#C8F51E]  text-center mt-10 z-10'>
                Copyright 2024 - V.R.S. College of Engineering and Technology
            </div>
        </div>
    )
}

export default AboutFooter
