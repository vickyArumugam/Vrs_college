import React from 'react'

const AboutFooter = () => {
    return (
        <div>
           <section className="w-full h-[300px] lg:h-[400px] flex flex-col text-center justify-center bg-[url('/images/footer-img-2.jpg')] bg-cover bg-center relative">
    <div className="absolute inset-0 bg-black opacity-25"></div>
    <div className="relative px-4">
        <h1 className="text-[#0B0A2A] font-Kaisei-Decol text-4xl sm:text-5xl md:text-6xl font-extrabold my-5">
            For any inquiries
        </h1>
        <h3 className="text-[#0B0A2A] font-montserrat-subrayada text-sm sm:text-lg md:text-2xl font-bold tracking-[0.5em] sm:tracking-[1em] uppercase">
            Contact
        </h3>

        <div className="w-full flex flex-col sm:flex-row justify-evenly mt-8 sm:mt-16">
            <h1 className="text-[#0B0A2A] text-lg sm:text-xl md:text-2xl font-Playwrite font-semibold">
                Email ID: icvrscet@gmail.com
            </h1>
            <h1 className="text-[#0B0A2A] text-lg sm:text-xl md:text-2xl font-Playwrite font-semibold mr-0 sm:mr-20">
                Mobile: +91 8870301652
            </h1>
        </div>
        
        <div className="w-full h-20 flex justify-center items-center gap-6 sm:gap-10 mt-0 lg:mt-10">
            <img
                src="/images/facebook_5968764 (1).png"
                alt="facebook-icon"
                className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
            <img
                src="/images/twitter_3955031.png"
                alt="twitter-icon"
                className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
            <img
                src="/images/instagram_1384015.png"
                alt="insta-icon"
                className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
            <img
                src="/images/social_15707814.png"
                alt="youtube-icon"
                className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
        </div>
    </div>
</section>

            <div className='bg-footer-bg p-2 text-[#C8F51E]  text-center   z-10'>
                Copyright 2024 - V.R.S. College of Engineering and Technology
            </div>
        </div>
    )
}

export default AboutFooter
