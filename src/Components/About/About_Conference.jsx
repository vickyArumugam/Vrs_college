import React from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import AboutLocation from './AboutLocation'

function About_Conference() {
  return (
    <div>
         <AboutHeader/>
         <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4 relative'>
                <div className=' flex justify-center items-center w-5/12  my-20 '>
                    <h1 className='text-white text-2xl font-Andika leading-relaxed tracking-wider font-thin text-justify hover:text-[#C8F51E]'>
                    The International Conference on Engineering Trends is a biennial conference which aims to provide high quality
                     research by bringing together researchers and practitioners from academia and industry. It is an international
                      forum to communicate and discuss various research findings, technological advancements and innovations in broad
                       areas of research like Advanced Computer Science and Information Technology. These emerging inter disciplinary
                        research areas have helped to solve complex problems and gained prominent attention in recent years. This conference
                         will highlight innovative research directions, novel applications in design, analysis and modeling of the aforementioned 
                         key areas. This conference will be an ideal platform for the researchers to exchange and share innovative ideas, experience, 
                         challenges and establish research relations worldwide.
                    </h1>
                </div>
            </section>
            <AboutLocation/>
         <AboutFooter/>
    </div>
  )
}

export default About_Conference
