import React, { useEffect, useState } from 'react';
import Header from '../Core/Header';

export default function Home() {
    const colors = ['text-red-500', 'text-[#C8F51E]', 'text-yellow-300'];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Header />
            <section className="w-full h-auto py-4">
                <div className="w-full h-[600px] max-w-[80rem] mx-auto text-center relative text-white">
                    <h1 className='text-[54px] font-bold font-Helvetica mt-40 '>
                        5<sup className={`${colors[colorIndex]}`}>th</sup> International Conference
                    </h1>
                    <h2 className="text-[40px] h-20 text-[#C8F51E] font-medium font-Helvetica animate-fade-up">
                        on Veracity Research in Scientific Computing and Engineering Trends
                    </h2>
                    <h2 className='text-[50px] font-medium font-Helvetica'>
                        26<sup className={`${colors[colorIndex]}`}>th</sup> April, 2024
                    </h2>
                    <h1 className='text-[50px] mb-4 font-bold font-Helvetica'>ICVRSCET - 2024 (Hybrid)</h1>
                    <button className='uppercase w-52 h-12 mb-60 mt-5 text-[#afcf38] bg-white text-[23px] font-semibold  rounded-full p-2 mr-4'>
                        Register
                    </button>
                    <img src="public/images/right-arrow_14625513.gif" alt="arrow" className='w-10 h-10 absolute top-[58.8%] left-[53.3%]' />
                </div>
            </section>

            <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4'>
                <div className='my-20 max-w-[80rem] mx-auto'>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E]'>About the Conference</h1>
                </div>
                <div className='w-6/12 mb-20 max-w-[80rem] mx-auto'>
                    <h1 className='text-white text-2xl font-thin text-justify'>
                        The International Conference on Engineering Trends is a biennial conference which aims to provide high quality research by
                        bringing together researchers and practitioners from academia and industry. It is an international forum to communicate and
                        discuss various research findings, technological advancements and innovations in broad areas of research like Advanced Computer
                        Science and Information Technology. These emerging interdisciplinary research areas have helped to solve complex problems and gained
                        prominent attention in recent years. This conference will highlight innovative research directions, novel applications in design,
                        analysis, and modeling of the aforementioned key areas. This conference will be an ideal platform for researchers to exchange
                        and share innovative ideas, experience, challenges, and establish research relations worldwide.
                    </h1>
                </div>
            </section>

            <section className="w-full h-[900px] py-4">
                <div className='max-w-[80rem] mx-auto text-center'>
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

            <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4'>
                <div className=' text-center'>
                    <h1 className='text-[54px] font-bold font-Helvetica text-[#C8F51E] mb-5 mt-20'>KEY DATES</h1>
                </div>
                <div className=' flex justify-center items-center gap-4'>
                    <div class=" w-full mt-10  min-h-80 flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm  p-10">
                        <img src="public\images\download-1-2048x2048.png" className='w-60 ' />
                        <h1 className=' text-20 text-center font-bold text-black '>Mr. Thirumal Margabandu</h1>
                        <h1 className='text-center text-17 text-black'>Software Test & Digital Transformation Consultant, Maargam IT, London, UK.</h1>
                    </div>
                </div>

            </section>
        </div>
    );
}







