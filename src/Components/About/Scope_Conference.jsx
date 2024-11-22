import React from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import AboutLocation from './AboutLocation'

const Scope_Conference = () => {
  return (
    <div>
      <AboutHeader title={"SCOPE OF CONFERENCE"} />
      <section className="w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4 px-4 md:px-8 lg:px-16 relative">
        <div className="flex justify-center items-center w-full md:w-10/12 lg:w-8/12 xl:w-6/12 my-10 md:my-16 lg:my-20">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-Andika leading-relaxed tracking-wide font-thin text-justify hover:text-[#C8F51E] p-3 lg:p-0">
            The main objective of the “International Conference on Veracity Research in Scientific Computation
            and Engineering Trends” is to provide an opportunity for academicians, research scholars and students
            to address the issues and challenges in the latest developments of research and technologies. It facilitates
            the participants to get knowledge on latest trends and technologies in the current competitive world.
          </h1>
        </div>
      </section>
      <AboutLocation />
      <AboutFooter />

    </div>
  )
}

export default Scope_Conference




