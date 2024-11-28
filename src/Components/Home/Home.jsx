import React, { useEffect, useState } from 'react';
import Header from '../Core/Header';

const Home = () => {
    const [eventData, setEventData] = useState(null);
    const [aboutConference, setAboutConference] = useState(null);
    const [keydates, setkeydates] = useState([]);
    const [keyInviees, setkeyInviees] = useState([]);
    const [patrons, setPatrons] = useState([]);
    const [rcards, setRcards] = useState([]);
    const [contact, setContact] = useState([]);
    const [error, setError] = useState(null);
    const [isLoadingEvent, setIsLoadingEvent] = useState(true);
    const [isLoadingAbout, setIsLoadingAbout] = useState(true);
    const [isLoadingKey, setIsLoadingKey] = useState(true);
    const [isLoadingKeyInvitees, setIsLoadingKeyInvitees] = useState(true)
    const [isLoadingRegisterCard, setIsLoadingRegisterCard] = useState(true)
    const [isLoadingContact, setIsLoadingContact] = useState(true)

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const targets = [750, 750, 1500, 2500];

    useEffect(() => {
        const incrementTime = 40;
        const totalIncrements = 100;
        const increments = targets.map(target => target / totalIncrements);

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const triggerPosition = document.documentElement.scrollHeight / 2;

            if (scrollPosition >= triggerPosition) {
                const interval = setInterval(() => {
                    setValue1(prev => Math.min(prev + increments[0], targets[0]));
                    setValue2(prev => Math.min(prev + increments[1], targets[1]));
                    setValue3(prev => Math.min(prev + increments[2], targets[2]));
                    setValue4(prev => Math.min(prev + increments[3], targets[3]));

                    if (
                        value1 >= targets[0] &&
                        value2 >= targets[1] &&
                        value3 >= targets[2] &&
                        value4 >= targets[3]
                    ) {
                        clearInterval(interval);
                    }
                }, incrementTime);
                window.removeEventListener('scroll', handleScroll);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [targets, value1, value2, value3, value4]);

    const fetchData = async (url, setDataCallback, setLoadingCallback) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const data = await response.json();
            setDataCallback(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
        } finally {
            setLoadingCallback(false);
        }
    };

    useEffect(() => {
        fetchData('http://localhost/mailapp/updateConference.php', setEventData, setIsLoadingEvent);
        fetchData('http://localhost/mailapp/about_conference.php', setAboutConference, setIsLoadingAbout);
        fetchData('http://localhost/mailapp/KeyDates.php', setkeydates, setIsLoadingKey);
        fetchData('http://localhost/mailapp/Key_invitees.php', setkeyInviees, setIsLoadingKeyInvitees);
        fetchData('http://localhost/mailapp/chief_patrons.php', setPatrons, setIsLoadingKeyInvitees);
        fetchData('http://localhost/mailapp/register_card.php', setRcards, setIsLoadingRegisterCard );
        fetchData('http://localhost/mailapp/contact.php', setContact,setIsLoadingContact);
    }, []);

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    if (isLoadingEvent || isLoadingAbout || isLoadingKey || isLoadingKeyInvitees || isLoadingRegisterCard || isLoadingContact ) {
        return <p className="text-center text-white">Loading...</p>;
    }
    return (
        <div>
            <Header />
            <section className="relative sm:max-w-full h-auto py-4 bg-[url('/images/corporate-businessman-giving-presentation-large-audience.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="sm:max-w-full h-auto mx-auto text-center relative text-white mt-20 sm:mt-40 px-4">
                    <h1 className="text-[36px] sm:text-[54px] font-bold font-Kaisei-Decol mb-3">
                        {eventData[0].conferenceTitle}
                    </h1>
                    <h2 className="text-[20px] sm:text-[40px] text-[#C8F51E] font-medium font-Playwrite animate-float animate-once animate-duration-1000 animate-ease-in-out mb-5">
                        {eventData[0].conferenceSubtitle}
                    </h2>
                    <h2 className="text-[30px] sm:text-[50px] font-medium font-Helvetica mb-3">
                        {eventData[0].conferenceDate}
                    </h2>
                    <h1 className="text-[30px] sm:text-[50px] mb-6 font-bold font-Kaisei-Decol">
                        {eventData[0].conferenceType}
                    </h1>
                    <button className="uppercase w-52 sm:w-64 h-12 mb-10 sm:mb-20 mt-5 text-[#afcf38] bg-white text-[20px] sm:text-[23px] font-semibold rounded-full p-2 mr-4 pr-7">
                        Regester
                    </button>
                </div>
            </section>


            <section className='w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4 relative'>
                <div className='my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E]'>
                        About the Conference
                    </h1>
                </div>
                <div className='flex justify-center items-center w-full px-5 md:w-8/12 lg:w-7/12 xl:w-5/12 mb-10 lg:mb-20'>
                    <p className='text-white text-base p-5 lg:p-0 sm:text-lg md:text-xl lg:text-2xl font-Andika font-thin text-justify lg:leading-relaxed  tracking-wider hover:text-[#C8F51E]'>
                        {aboutConference[0].description}
                    </p>
                </div>
            </section>

            <section className="w-full py-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-20 mt-10">
                        KEY DATES
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center my-10 gap-5 lg:gap-20">
                    {keydates.map((item, index) => (
                        <div
                            key={index}
                            className={`w-48 sm:w-60 h-60 lg:h-80 ${index % 2 === 0 ? "bg-[#0B0A2A]" : "bg-[#C8F51E99]"
                                } border-2 border-b-white p-4 ${index % 2 === 0
                                    ? "rounded-tl-[40px] rounded-br-[40px]"
                                    : "rounded-tr-[40px] rounded-bl-[40px]"
                                } transition-all duration-300 ease-in-out hover:border-[#C8F51E] hover:rounded-none`}
                        >
                            <div className="mt-[30%]">
                                <h1 className="font-Andika text-sm md:text-lg text-center font-bold">
                                    {item.description}
                                </h1>
                                <hr className="w-2/4 border-[#C8F51E] mx-auto my-3 md:my-5" />
                                <h1 className="font-roboto text-lg text-center font-bold">
                                    {item.date}
                                </h1>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center py-4 bg-[url('/images/bg-img-2.png')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gray-400 opacity-25"></div>
                <div className="text-center relative">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] uppercase mt-12">
                        Key Invitees
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 my-10 sm:my-20 border-2 border-[#C8F51E] rounded-lg group relative">
                    <div className="w-[300px] h-[400px] flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm relative p-6">
                        <div
                            className="absolute rounded-full w-[80px] h-[80px] border-4 border-[#C8F51E] animate-wave1 left-[36%] top-[30%] lg:top-[22%]"

                        />
                        <div
                            className="absolute rounded-full w-[80px] h-[80px] border-4 border-[#C8F51E] animate-wave2 left-[36%] top-[30%] lg:top-[22%]"

                        />
                        <img
                            src={keyInviees[0].image_url}
                            className="w-32 h-32 rounded-full object-cover mb-50 z-10"

                        />
                        <h1 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-black mt-4">
                            {keyInviees[0].name}
                        </h1>
                        <p className="text-center text-sm sm:text-base md:text-lg text-black mt-2">
                            {keyInviees[0].title}
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4">
                <div className="text-center mb-10 sm:mb-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mt-10 sm:mt-20 uppercase">
                        Chief Patrons
                    </h1>
                </div>
                <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-20 mb-10 sm:mb-20 px-4">

                    {patrons.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[320px] h-[350px] bg-[#0A0A23] border-2 border-gray-300 rounded-lg flex flex-col justify-end items-center transform transition-transform duration-500 hover:scale-105"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[#7CB342] clip-curved"></div>
                            <div className="absolute top-5 w-[120px] h-[120px] bg-gray-300 rounded-full border-3 border-[#C8F51E]"></div>
                            <div className="relative z-10 text-center mb-10 px-4 space-y-3">
                                <img
                                    src={item.image_url}
                                    className="w-[110px] h-[110px] object-cover rounded-full mb-[6.10rem]"
                                    alt={item.name}
                                />
                                <h1 className="text-white text-lg font-bold">
                                    {item.name}
                                </h1>
                                <div className="w-12 h-1 bg-[#C8F51E] mx-auto mt-1"></div>
                                <p className="text-white text-sm">{item.role}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <section className="w-full py-10 sm:py-20 bg-black">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-20 px-4">
                    
                         {rcards.map((item, index) => (
                            <div
                                key={index}
                                className="sm:w-52 h-64 md:w-64 lg:h-80 bg-[#0B0A2A] border-2 border-b-white p-6 sm:p-8 rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                            >
                                <h1 className="font-Trebuchet text-lg sm:text-xl text-center font-bold mb-3 text-white">
                                 {item.category}
                                </h1>
                                <h1 className="font-roboto text-2xl text-center font-bold text-white">
                                  {item.currency}
                                </h1>
                                <hr className="w-2/4 border-[#C8F51E] my-5" />
                                <h1 className="font-roboto text-4xl sm:text-5xl text-center font-bold text-yellow-300">
                                    {Math.floor(item.value)}
                                </h1>
                                <button className="uppercase w-32 sm:w-40 mt-4 h-10 text-white bg-red-600 font-medium rounded-lg">
                                    Register here
                                </button>
                            </div>
                        ))}
                    
                </div>
            </section>
            <section className=' w-full h-[580px] text-center bg-[#0B0A2A] '>
                <div className='flex flex-col'>
                    <h1 className='text-[54px] font-bold font-Kaisei-Decol text-[#C8F51E] mb-10 mt-10'>Contact Us</h1>
                    <h2 className=' text-2xl  lg:text-4xl text-white font-bold font-montserrat-subrayada'>{contact[0].college_name}</h2>
                    <h3 className='  text-xl  lg:text-2xl  my-6 text-yellow-300'>({contact[0].iso_number})</h3>
                    <span className=' text-xl lg:text-2xl text-white mb-14 font-Playwrite '>
                        <p className='my-2'>{contact[0].village},</p>
                        <p className='my-2'>{contact[0].district}</p>
                        <p className='my-2'>Mobile : +91 {contact[0].mobile}</p>
                        <p className='my-2 '>Email ID : {contact[0].email}</p>
                    </span>
                </div>
            </section>

            <section>
                <div className="flex justify-center " >
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
