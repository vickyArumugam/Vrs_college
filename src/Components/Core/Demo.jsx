                //header
// import React, { useState, useEffect } from 'react';

// export default function Header() {
//     const [isSticky, setIsSticky] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const handleMouseEnter = (dropdown) => {
//         setOpenDropdown(dropdown);
//     };

//     const handleMouseLeave = () => {
//         setOpenDropdown(null);
//     };

//     // Toggle sticky class based on scroll position
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsSticky(window.scrollY > 0);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="bg-transparent bg-cover bg-fixed bg-center relative">
//             {/* <div className="absolute inset-0 bg-black opacity-75"></div> */}
//             <nav
//                 className={`${isSticky ? 'fixed top-0 left-0 right-0 bg-[#0B0A2A] shadow-lg' : 'bg-transparent relative '
//                     } flex justify-around  max-w-full mx-auto py-4 transition-all duration-300 z-10 `}
//             >
//                 <div className='w-60 h-16 hover:opacity-50 relative'>
//                     <img src="/images/cropped-ICVRSCET-1.png" alt="logo" />
//                 </div>
//                 <div className='content-center hidden sm:flex'>
//                     <ul className='text-[#C8F51E] text-xl font-bold flex gap-10 items-center relative '>
//                         <li>
//                             <a href="/" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900 font-Kaisei-Decol text-19'>HOME</a>
//                         </li>
//                         <li>
//                             <a href="" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900 font-Kaisei-Decol text-19' onMouseEnter={() => handleMouseEnter('about')}>ABOUT US</a>
//                             {openDropdown === 'about' && (
//                                 <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
//                                     <ul onMouseLeave={handleMouseLeave} className='text-left '>
//                                         <li><a href='/about/conference_tracks' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>earlier conferences</a></li>
//                                         <li><a href='/about/about_conference' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>about the conference</a></li>
//                                         <li><a href='/about/scope_conference' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>scope of conference</a></li>
//                                         <li><a href='/about/about_vrscet' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>about vrscet</a></li>
//                                         <li><a href='/about/organizing_committee' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>organizing committee</a></li>
//                                         <li><a href='/about/editorial_board' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>editorial board</a></li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </li>
//                         <li>
//                             <a href="" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900 font-Kaisei-Decol text-19' onMouseEnter={() => handleMouseEnter('authors')}>AUTHOR'DESK</a>
//                             {openDropdown === 'authors' && (
//                                 <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
//                                     <ul onMouseLeave={handleMouseLeave} className='text-left'>
//                                         <li><a href='/author/conference_tracks' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>conference tracks</a></li>
//                                         <li><a href="/author/journal_publication" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>journal publication</a></li>
//                                         <li><a href="/author/key_dates" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>key dates</a></li>
//                                         <li><a href="/author/registration_details" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>registation datails</a></li>
//                                         <li><a href="/author/new_paper_submission" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>new paper submission</a></li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </li>
//                         <li> 
//                             <a href="" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900 font-Kaisei-Decol text-19' onMouseEnter={() => handleMouseEnter('reach')}>REACH US</a>
//                             {openDropdown === 'reach' && (
//                                 <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
//                                     <ul onMouseLeave={handleMouseLeave} className='text-left'>
//                                         <li><a href='/contact_us' className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>contact us</a></li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// }

  // home sec-2 ----------------
//   <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4 relative'>
//   <div className='my-20 max-w-[80rem] mx-auto'>
//       <h1 className='text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] '>About the Conference</h1>
//   </div>
//   <div className=' flex justify-center items-center w-5/12  mb-20 '>
//       <h1 className='text-white text-2xl font-Andika font-thin text-justify leading-relaxed tracking-wider hover:text-[#C8F51E]'>
//           The International Conference on Engineering Trends is a biennial conference which aims to provide high quality research by
//           bringing together researchers and practitioners from academia and industry. It is an international forum to communicate and
//           discuss various research findings, technological advancements and innovations in broad areas of research like Advanced Computer
//           Science and Information Technology. These emerging interdisciplinary research areas have helped to solve complex problems and gained
//           prominent attention in recent years. This conference will highlight innovative research directions, novel applications in design,
//           analysis, and modeling of the aforementioned key areas. This conference will be an ideal platform for researchers to exchange
//           and share innovative ideas, experience, challenges, and establish research relations worldwide.
//       </h1>
//   </div>

// </section>


// home-  sec-3 card-----------------

{/* <section className="w-full h-[900px] py-4 ">

<div className='max-w-[80rem] mx-auto text-center '>
    <h1 className='text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-36 mt-20'>KEY DATES</h1>
</div>
<div className='flex justify-center gap-20'>
    <div className='w-60 h-80 bg-[#0B0A2A] border-2 border-b-white  p-4  rounded-tl-[60px] rounded-br-[60px] mt-32 
     transition-all duration-300 ease-in-out hover:border-[#C8F51E] hover:rounded-none'>
        <div className='mt-[38%]'>
            <h1 className=' font-Andika text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
            <hr className='w-2/4 border-[#C8F51E] ml-14 my-5'></hr>
            <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
        </div>
    </div>
    <div className='flex gap-10 '>
        <div className='w-60 h-80 bg-[#C8F51E99]  border-2 border-b-white  p-4  rounded-tr-[60px] rounded-bl-[60px] 
         transition-all duration-300 ease-in-out hover:border-[#874ee2d7] hover:rounded-none'>
            <div className='mt-[38%]'>
                <h1 className=' font-Andika  text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
                <hr className='w-2/4 border-[#0B0A2A] ml-14 my-5 border-1'></hr>
                <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
            </div>
        </div>
        <div className='w-60 h-80 bg-[#C8F51E99]  border-2 border-b-white  p-4  rounded-tl-[60px] rounded-br-[60px]
             transition-all duration-300 ease-in-out hover:border-[#874ee2d7] hover:rounded-none'>
            <div className='mt-[38%]'>
                <h1 className=' font-Andika  text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
                <hr className='w-2/4 border-[#0B0A2A] ml-14 my-5 border-1'></hr>
                <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
            </div>
        </div>
    </div>
    <div className="w-60 h-80 bg-[#0B0A2A] border-2 border-white p-4 rounded-tr-[60px] rounded-bl-[60px] mt-32 
                   transition-all duration-300 ease-in-out hover:border-[#C8F51E] hover:rounded-none">
        <div className="mt-[38%]">
            <h1 className="font-Andika text-20 text-center font-bold">
                Last Date for Full Paper Submission
            </h1>
            <hr className="w-2/4 border-[#C8F51E] mx-auto my-5" />
            <h1 className="font-roboto text-20 text-center font-bold">
                17‐04‐2024
            </h1>
        </div>
    </div>
</div>
</section> */}


// home-  sec-4 single card 

{/* <section className="w-full flex flex-col justify-center items-center py-4 bg-[url('/images/bg-img-2.png')] bg-cover bg-center relative">
<div className="absolute inset-0 bg-gray-400 opacity-25"></div>
<div className=' text-center relative'>
    <h1 className='text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E]  uppercase' >Key Invitees</h1>
</div>
<div className="flex justify-center items-center gap-4 mb-28 mt-10 border-3 border-[#C8F51E] rounded-lg group">
    <div className="w-full min-h-80 flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm p-10 relative">
        <div className="absolute inset-0 rounded-full w-20 h-20 border-4 border-[#C8F51E] animate-wave1 left-[43%] top-[31%]" />
        <div className="absolute inset-0 rounded-full w-20 h-20 border-4 border-[#C8F51E] animate-wave2 left-[43%] top-[31%]" />
        <img
            src="/images/download-1-2048x2048.png"
            className="w-60 relative"
            alt="Mr. Thirumal Margabandu"
        />
        <h1 className="text-20 text-center font-bold text-black mt-4">
            Mr. Thirumal Margabandu
        </h1>
        <h1 className="text-center text-17 text-black">
            Software Test & Digital Transformation Consultant, Maargam IT, London, UK.
        </h1>
    </div>
</div>
</section> */}

//home sec-6 card-4

{/* <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4'>
                <div className=' text-center mb-20'>
                    <h1 className='text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mt-20 uppercase'>Chief Patrons</h1>
                </div>
                <div className=' max-w-[60%] flex flex-wrap gap-20 mb-20 '>
                    
                    <div className="flex justify-center items-center p-4">
                        <div className="relative w-[30rem] h-80 bg-[#0A0A23] border-2 border-gray-300 rounded-lg flex flex-col justify-end items-center  transform transition-transform duration-500 hover:scale-105">
                           
                            <div className="absolute top-0 left-0 w-full h-full bg-[#7CB342] clip-curved"></div>

                          
                            <div className="absolute top-5 w-36 h-36 bg-gray-300 rounded-full border-3 border-[#C8F51E]"></div>

                           
                            <div className="relative z-10 text-center mb-8 px-4 space-y-3">
                                <img src="/images/download-1-2048x2048.png" className="w-48 z-10 mb-[23px] ml-[13px]" alt="Profile" />
                                <h1 className="text-white text-25 font-bold text-lg">Er.Ln. M. Saravanan, M.E.,</h1>
                                <div className="w-16 h-1 bg-[#C8F51E] mx-auto mt-1"></div>
                                <p className="text-white text-19 text-sm">Former Chairperson</p>
                            </div>
                        </div>
                    </div>

                
                    <div className="flex justify-center items-center p-4">
                        <div className="relative w-[30rem] h-80 bg-[#0A0A23] border-2 border-gray-300 rounded-lg flex flex-col justify-end items-center  transform transition-transform duration-500 hover:scale-105">
                           
                            <div className="absolute top-0 left-0 w-full h-full bg-[#7CB342] clip-curved"></div>

                           
                            <div className="absolute top-5 w-36 h-36 bg-gray-300 rounded-full border-3 border-[#C8F51E]"></div>

                        
                            <div className="relative z-10 text-center mb-8 px-4 space-y-3">
                                <img src="/images/download-1-2048x2048.png" className="w-48 z-10 mb-[23px] ml-[13px]" alt="Profile" />
                                <h1 className="text-white text-25 font-bold text-lg">Er.Ln. M. Saravanan, M.E.,</h1>
                                <div className="w-16 h-1 bg-[#C8F51E] mx-auto mt-1"></div>
                                <p className="text-white text-19 text-sm">Former Chairperson</p>
                            </div>
                        </div>
                    </div>

                   
                    <div className="flex justify-center items-center p-4">
                        <div className="relative w-[30rem] h-80 bg-[#0A0A23] border-2 border-gray-300 rounded-lg flex flex-col justify-end items-center  transform transition-transform duration-500 hover:scale-105">
                            
                            <div className="absolute top-0 left-0 w-full h-full bg-[#7CB342] clip-curved"></div>

                          
                            <div className="absolute top-5 w-36 h-36 bg-gray-300 rounded-full border-3 border-[#C8F51E]"></div>

                           
                            <div className="relative z-10 text-center mb-8 px-4 space-y-3">
                                <img src="/images/download-1-2048x2048.png" className="w-48 z-10 mb-[23px] ml-[13px]" alt="Profile" />
                                <h1 className="text-white text-25 font-bold text-lg">Er.Ln. M. Saravanan, M.E.,</h1>
                                <div className="w-16 h-1 bg-[#C8F51E] mx-auto mt-1"></div>
                                <p className="text-white text-19 text-sm">Former Chairperson</p>
                            </div>
                        </div>
                    </div>

                 
                    <div className="flex justify-center items-center p-4">
                        <div className="relative w-[30rem] h-80 bg-[#0A0A23] border-2 border-gray-300 rounded-lg flex flex-col justify-end items-center  transform transition-transform duration-500 hover:scale-105">
                            
                            <div className="absolute top-0 left-0 w-full h-full bg-[#7CB342] clip-curved"></div>

                         
                            <div className="absolute top-5 w-36 h-36 bg-gray-300 rounded-full border-3 border-[#C8F51E]"></div>

                            
                            <div className="relative z-10 text-center mb-8 px-4 space-y-3">
                                <img src="/images/download-1-2048x2048.png" className="w-48 z-10 mb-[23px] ml-[13px]" alt="Profile" />
                                <h1 className="text-white text-25 font-bold text-lg">Er.Ln. M. Saravanan, M.E.,</h1>
                                <div className="w-16 h-1 bg-[#C8F51E] mx-auto mt-1"></div>
                                <p className="text-white text-19 text-sm">Former Chairperson</p>
                            </div>
                        </div>
                    </div>
                </div> */}


                //home sec-card last

                
        //     <section className="w-full h-[700px]">
        //     <div className='max-w-[80rem] mx-auto text-center'>
        //         <h1 className='text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-36 mt-20'>KEY DATES</h1>
        //     </div>
        //     <div className='flex  justify-center gap-10 '>
        //         <div className='flex justify-center gap-20'>
        //             <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
        //                 <div className=''>
        //                     <h1 className=' font-Trebuchet text-20 text-center font-bold mb-3'>Academicians</h1>
        //                     <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
        //                     <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
        //                     <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value1)}</h1>
        //                     <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='  flex  justify-center gap-20'>
        //             <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
        //                 <div className=''>
        //                     <h1 className=' font-Trebuchet text-20 text-center font-bold mb-3'>Academicians</h1>
        //                     <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
        //                     <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
        //                     <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value2)}</h1>
        //                     <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='flex justify-center gap-20'>
        //             <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
        //                 <div className=''>
        //                     <h1 className=' font-Trebuchet text-20 text-center font-bold mb-3'>Academicians</h1>
        //                     <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
        //                     <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
        //                     <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value3)}</h1>
        //                     <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='flex justify-center gap-20'>
        //             <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
        //                 <div className=''>
        //                     <h1 className=' font-Trebuchet text-20 text-center font-bold mb-3'>Academicians</h1>
        //                     <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
        //                     <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
        //                     <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value4)}</h1>
        //                     <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>