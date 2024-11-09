import React from 'react'
import Header from '../Core/Header'

const AboutHeader = () => {
  return (
  //   <div>
  //   <section className='-mt-10'>
  //     <div className=" w-full h-400 bg-[url('/images/bus-img.jpg')] bg-cover bg-center  relative ">
  //     <div className="absolute inset-0 bg-black opacity-25"></div>
 
  //     <Header/>
  //     <h1 className='text-44  font-light font-Kaisei-Decol  absolute top-52 left-1/4  ml-44 text-[#C8F51E] transition-all duration-300 ease-in-out hover: animate-float'>EARLIER CONFERENCES</h1>
  //     </div>
  //   </section>
  // </div>
  <div>
    <section className="-mt-10">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[url('/images/bus-img.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <Header />
            <h1 className=" text-center w-full text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-Kaisei-Decol absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-[#C8F51E] transition-all duration-300 ease-in-out animate-fadeup ">
                EARLIER CONFERENCES
            </h1>
        </div>
    </section>
</div>

 
  )
}

export default AboutHeader
