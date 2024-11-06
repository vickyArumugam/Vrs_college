import React from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const Journal_Publication = () => {
  return (
    <div>
        <AboutHeader/>
           <div className="text-center py-10 text-orange-500 font-bold text-lg space-y-10 bg-white flex flex-col justify-center items-center">
            <h3 className='text-20 font-bold text-blue-500'>Selected, Peer reviewed and Plagiarism free high quality article will <br /> be recommended for publication in IEEE access and SCOPUS.</h3>
            <div className='w-8/12 h-16 bg-blue-500 text-white text-29 font-Trebuchet text-center rounded-lg'>
            <p className='p-4'>
            International Journal of Research in Engineering Science (IJRES)
            </p>
            </div>
            <div className='w-8/12 h-16 bg-blue-500 text-white text-29 font-Trebuchet text-center rounded-lg'>
            <p className='p-4'>
            International Journal of Research in Engineering Science (IJRES)
            </p>
            </div>
            <div className='w-8/12 h-16 bg-blue-500 text-white text-29 font-Trebuchet text-center rounded-lg '>
            <p className='p-4'>
            International Journal of Research in Engineering Science (IJRES)
            </p>
            </div>
        </div>
            <AboutLocation/>
         <AboutFooter/>
      
    </div>
  )
}

export default Journal_Publication
