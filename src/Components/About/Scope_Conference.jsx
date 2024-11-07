import React from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import AboutLocation from './AboutLocation'

const Scope_Conference = () => {
  return (
    <div>
           <AboutHeader/>
            <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4 relative'>
              
                <div className=' flex justify-center items-center w-5/12  my-36 '>
                    <h1 className=' text-2xl  font-Andika leading-relaxed tracking-wider font-thin text-justify hover:text-[#C8F51E]'>
                    The main objective of the “International Conference on Veracity Research in Scientific Computation 
                    and Engineering Trends” is to provide an opportunity for academicians, research scholars and students
                     to address the issues and challenges in the latest developments of research and technologies. It facilitates 
                     the participants to get knowledge on latest trends and technologies in the current competitive world.
                    </h1>
                </div>
            </section>
       
            <AboutLocation/>
         <AboutFooter/>
      
    </div>
  )
}

export default Scope_Conference


 
