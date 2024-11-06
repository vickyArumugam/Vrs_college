import React, { useEffect, useState } from 'react';
import Header from '../Core/Header';

const Home = ({ endValue = 750 }) => {
    const colors = ['text-red-500', 'text-[#C8F51E]', 'text-yellow-300'];
    const [colorIndex, setColorIndex] = useState(0);

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);

    const targets = [750, 750, 1500, 2500];


    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const incrementTime = 20;
        const totalIncrements = 100;


        const increments = targets.map(target => target / totalIncrements);

        const interval = setInterval(() => {
            setValue1((prev) => Math.min(prev + increments[0], targets[0]));
            setValue2((prev) => Math.min(prev + increments[1], targets[1]));
            setValue3((prev) => Math.min(prev + increments[2], targets[2]));
            setValue4((prev) => Math.min(prev + increments[3], targets[3]));


            if (value1 >= targets[0] && value2 >= targets[1] && value3 >= targets[2] && value4 >= targets[3]) {
                clearInterval(interval);
            }
        }, incrementTime);

        return () => clearInterval(interval);
    }, [targets]);



    return (
        <div>
            <Header />
            <section className=" sm:max-w-full h-auto py-4 bg-[url('public/images/corporate-businessman-giving-presentation-large-audience.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-75"></div> 
                <div className="sm:max-w-full h-[600px]  mx-auto text-center relative text-white">
                    <h1 className='text-[54px] font-bold font-Helvetica sm:mt-40 '>
                        5<sup className={`${colors[colorIndex]}`}>th</sup> International Conference
                    </h1>
                    <h2 className=" text-[20px] sm:text-[40px] h-20 text-[#C8F51E] font-medium font-Helvetica animate-fade-up">
                        on Veracity Research in Scientific Computing and Engineering Trends
                    </h2>
                    <h2 className='text-[50px] font-medium font-Helvetica'>
                        26<sup className={`${colors[colorIndex]}`}>th</sup> April, 2024
                    </h2>
                    <h1 className='text-[50px] mb-4 font-bold font-Helvetica'>ICVRSCET - 2024 (Hybrid)</h1>
                    <button className='uppercase w-52 h-12 mb-60 mt-5 text-[#afcf38] bg-white text-[23px] font-semibold  rounded-full p-2 mr-4 pr-7 '>
                        Register
                    </button>
                    <img src="/images/right-arrow_14625513.gif" alt="arrow" className='w-10 h-10 absolute  top-[58.9%] left-[52%]' />
                </div>
            </section>

            <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4 relative'>
                <div className='my-20 max-w-[80rem] mx-auto'>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E] '>About the Conference</h1>
                </div>
                <div className=' flex justify-center items-center w-5/12  mb-20 '>
                    <h1 className='text-white text-2xl font-thin text-justify'>
                        The International Conference on Engineering Trends is a biennial conference which aims to provide high quality research by
                        bringing together researchers and practitioners from academia and industry. It is an international forum to communicate and
                        discuss various research findings, technological advancements and innovations in broad areas of research like Advanced Computer
                        Science and Information Technology. These emerging interdisciplinary research areas have helped to solve complex problems and gained
                        prominent attention in recent years. This conference will highlight innovative research directions, novel applications in design,
                        analysis, and modeling of the aforementioned key areas. This conference will be an ideal platform for researchers to exchange
                        and share innovative ideas, experience, challenges, and establish research relations worldwide.
                    </h1>
                    <img src="/images/freepik__background__56115.png" alt="img" className='w-96 h-400 absolute left-[5%] top-[30%] ' />

                </div>
               

            </section>

            <section className="w-full h-[900px] py-4 ">

                <div className='max-w-[80rem] mx-auto text-center '>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E] mb-36 mt-20'>KEY DATES</h1>
                </div>
                <div className='flex justify-center gap-20'>
                    <div className='w-60 h-80 bg-[#0B0A2A] border-2 border-b-white  p-4  rounded-tl-[60px] rounded-br-[60px] mt-32'>
                        <div className='mt-[38%]'>
                            <h1 className=' font-roboto text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
                            <hr className='w-2/4 border-[#C8F51E] ml-14 my-5'></hr>
                            <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
                        </div>
                    </div>
                    <div className='flex gap-10 '>
                        <div className='w-60 h-80 bg-[#C8F51E99]  border-2 border-b-white  p-4  rounded-tr-[60px] rounded-bl-[60px] '>
                            <div className='mt-[38%]'>
                                <h1 className=' font-roboto text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
                                <hr className='w-2/4 border-[#0B0A2A] ml-14 my-5 border-1'></hr>
                                <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
                            </div>
                        </div>
                        <div className='w-60 h-80 bg-[#C8F51E99]  border-2 border-b-white  p-4  rounded-tl-[60px] rounded-br-[60px]'>
                            <div className='mt-[38%]'>
                                <h1 className=' font-roboto text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
                                <hr className='w-2/4 border-[#0B0A2A] ml-14 my-5 border-1'></hr>
                                <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-60 h-80 bg-[#0B0A2A] border-2 border-b-white p-4 rounded-tr-[60px] rounded-bl-[60px] mt-32 '>
                        <div className='mt-[38%]'>
                            <h1 className=' font-roboto text-20 text-center font-bold'>Last Date for Full Paper Submission</h1>
                            <hr className='w-2/4 border-[#C8F51E] ml-14 my-5'></hr>
                            <h1 className=' font-roboto text-20 text-center font-bold'>17‐04‐2024</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center py-4 bg-[url('/images/bg-img-2.png')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gray-400 opacity-25"></div>
                <div className=' text-center relative'>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E]  uppercase' >Key Invitees</h1>
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
            </section>

            <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4'>
                <div className=' text-center mb-20'>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E] mt-20 uppercase'>Chief Patrons</h1>
                </div>
                <div className=' max-w-[70%] flex flex-wrap gap-20 mb-20'>
                    <div className=' flex justify-center items-center gap-4 m-0    rounded-lg '>
                        <div class=" w-full min-h-100 flex flex-col justify-center items-center rounded-xl  border-2 border-[#C8F51E] shadow-sm  p-10 bg-black">
                        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                            <img src="/images/download-1-2048x2048.png" className='w-60 relative ' />
                            <h1 className=' text-20 text-center font-bold text-white relative'>Mr. Thirumal Margabandu</h1>
                            <h1 className='text-center text-17 text-white relative'>Software Test & Digital Transformation Consultant, Maargam IT, London, UK.</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-4    rounded-lg '>
                        <div class=" w-full   min-h-80 flex flex-col justify-center items-center rounded-xl  bg-black border border-[#C8F51E] shadow-sm  p-10">
                            <img src="/images/download-1-2048x2048.png" className='w-60 ' />
                            <h1 className=' text-20 text-center font-bold text-white '>Mr. Thirumal Margabandu</h1>
                            <h1 className='text-center text-17 text-white'>Software Test & Digital Transformation Consultant, Maargam IT, London, UK.</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-4    rounded-lg '>
                        <div class=" w-full   min-h-80 flex flex-col justify-center items-center rounded-xl bg-black border border-[#C8F51E] shadow-sm  p-10">
                            <img src="/images/download-1-2048x2048.png" className='w-60 ' />
                            <h1 className=' text-20 text-center font-bold text-white '>Mr. Thirumal Margabandu</h1>
                            <h1 className='text-center text-17 text-white'>Software Test & Digital Transformation Consultant, Maargam IT, London, UK.</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center gap-4    rounded-lg '>
                        <div class=" w-full   min-h-80 flex flex-col justify-center items-center rounded-xl bg-black border border-[#C8F51E] shadow-sm  p-10">
                            <img src="/images/download-1-2048x2048.png" className='w-60 ' />
                            <h1 className=' text-20 text-center font-bold text-white '>Mr. Thirumal Margabandu</h1>
                            <h1 className='text-center text-17 text-white'>Software Test & Digital Transformation Consultant, Maargam IT, London, UK.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-[700px]">
                <div className='max-w-[80rem] mx-auto text-center'>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E] mb-36 mt-20'>KEY DATES</h1>
                </div>
                <div className='flex  justify-center gap-10 '>
                    <div className='flex justify-center gap-20'>
                        <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
                            <div className=''>
                                <h1 className=' font-roboto text-20 text-center font-bold'>Academicians</h1>
                                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                                <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
                                <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value1)}</h1>
                                <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
                            </div>
                        </div>
                    </div>
                    <div className='  flex  justify-center gap-20'>
                        <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
                            <div className=''>
                                <h1 className=' font-roboto text-20 text-center font-bold'>Academicians</h1>
                                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                                <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
                                <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value2)}</h1>
                                <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-20'>
                        <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
                            <div className=''>
                                <h1 className=' font-roboto text-20 text-center font-bold'>Academicians</h1>
                                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                                <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
                                <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value3)}</h1>
                                <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-20'>
                        <div className='w-64 h-380  bg-[#0B0A2A] border-2 border-b-white  p-8'>
                            <div className=''>
                                <h1 className=' font-roboto text-20 text-center font-bold'>Academicians</h1>
                                <h1 className='font-roboto text-29 text-center font-bold'>INR</h1>
                                <hr className='w-2/4 border-[#C8F51E] ml-12 my-5'></hr>
                                <h1 className='font-roboto text-85 text-center font-bold text-yellow-300'>{Math.floor(value4)}</h1>
                                <button className='uppercase w-40 rounded-lg h-10 text-white bg-red-600 font-medium ml-4 mt-3'>Register here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=' w-full h-[460px] text-center bg-[#0B0A2A] '>
                <div className='flex flex-col'>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E] mb-10 mt-10'>Contact Us</h1>
                    <h2 className='text-4xl text-white font-bold'>V.R.S. College of Engineering & Technology,</h2>
                    <h3 className='text-2xl  my-6 text-yellow-300'>(Reaccredited by NAAC and An ISO 9001:2008 Recertified Institution)</h3>
                    <h1 className='text-2xl text-white mb-14 font-roboto'>Arasur - 607 107,
                        <br />
                        Villupuram District
                        <br />
                        Mobile : +91 8870301652
                        <br />
                        Email ID : icvrscet@gmail.com
                    </h1>

                </div>

            </section>

            <section>
                <div className="flex justify-center" >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52538.87974771864!2d79.41420418992182!3d11.836981751948784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54ab06a0d742d3%3A0xeabe40e3ddd35f48!2sVRS%20College%20Of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1729960808177!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="shadow-lg w-full h-96"
                    />
                </div>
            </section>

            <section className='bg-white'>
                <div className=' w-full h-20 flex justify-center items-center  gap-10 '>
                    <img src="/images/facebook_5968764 (1).png" alt='facebook-icon' className='transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full' />
                    <img src="/images/twitter_3955031.png" alt="twitter-icon" className='transform transition-transform duration-200 hover:scale-110  border-3 hover:border-[#C8F51E] rounded-full' />
                    <img src="/images/instagram_1384015.png" alt="insta-icon" className='transform transition-transform duration-200 hover:scale-110  border-3 hover:border-[#C8F51E] rounded-full' />
                    <img src="/images/social_15707814.png" alt="youtube-icon" className='transform transition-transform duration-200 hover:scale-110  border-3 hover:border-[#C8F51E] rounded-full' />
                </div>
                <div className='bg-footer-bg p-2 text-footer-text  text-center '>
                    <p className='text-[#C8F51E]'>
                        Copyright 2024 - V.R.S. College of Engineering and Technology

                    </p>

                </div>
            </section>

        </div>
    );
}


export default Home;







