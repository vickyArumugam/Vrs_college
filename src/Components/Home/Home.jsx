import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Core/Header';

const Home = (props) => {
    const [eventData, setEventData] = useState(null);
    const [aboutConference, setAboutConference] = useState(null);
    const [keydates, setkeydates] = useState([]);
    const [keyInviees, setkeyInviees] = useState([]);
    const [patrons, setPatrons] = useState([]);
    const [rcards, setRcards] = useState([]);
    const [contact, setContact] = useState([]);
    const [map, setMap] = useState([]);
    const [links, setLinks] = useState([]);
    const [copyRight, setCopyRight] = useState([]);
    const [error, setError] = useState(null);
    const [isLoadingEvent, setIsLoadingEvent] = useState(true);
    const [isLoadingAbout, setIsLoadingAbout] = useState(true);
    const [isLoadingKey, setIsLoadingKey] = useState(true);
    const [isLoadingKeyInvitees, setIsLoadingKeyInvitees] = useState(true)
    const [isLoadingRegisterCard, setIsLoadingRegisterCard] = useState(true)
    const [isLoadingContact, setIsLoadingContact] = useState(true)
    const [isLoadingmap, setIsLoadingmap] = useState(true)
    const [isLoadingLinks, setIsLoadingLinks] = useState(true)
    const [isLoadingcopyRight, setIsLoadingCopyRight] = useState(true)
    const [isHovered, setIsHovered] = useState(false);

    const handleButtonClick = () => {
        navigate('/author/new_paper_submission');
    };

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
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const ordinal =
            day % 10 === 1 && day !== 11
                ? "st"
                : day % 10 === 2 && day !== 12
                    ? "nd"
                    : day % 10 === 3 && day !== 13
                        ? "rd"
                        : "th";

        const formattedDate = new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
        }).format(date);

        return `${day}${ordinal} ${formattedDate}`;
    };
    const icons = {
        Facebook: "/images/facebook_5968764 (1).png",
        Instagram: "/images/instagram_1384015.png",
        Twitter: "/images/twitter_3955031.png",
        YouTube: "/images/social_15707814.png"
    };

    useEffect(() => {
        fetchData('http://localhost/mailapp/updateConference.php', setEventData, setIsLoadingEvent);
        fetchData('http://localhost/mailapp/about_conference.php', setAboutConference, setIsLoadingAbout);
        fetchData('http://localhost/mailapp/KeyDates.php', setkeydates, setIsLoadingKey);
        fetchData('http://localhost/mailapp/Key_invitees.php', setkeyInviees, setIsLoadingKeyInvitees);
        fetchData('http://localhost/mailapp/chief_patrons.php', setPatrons, setIsLoadingKeyInvitees);
        fetchData('http://localhost/mailapp/register_card.php', setRcards, setIsLoadingRegisterCard);
        fetchData('http://localhost/mailapp/contact.php', setContact, setIsLoadingContact);
        fetchData('http://localhost/mailapp/map_url.php', setMap, setIsLoadingmap);
        fetchData('http://localhost/mailapp/social.php', setLinks, setIsLoadingLinks);
        fetchData('http://localhost/mailapp/CopyRights.php', setCopyRight, setIsLoadingCopyRight);

    }, []);

    const textColor = isHovered ? props.color2 : 'white';

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    if (isLoadingEvent || isLoadingAbout || isLoadingKey || isLoadingKeyInvitees || isLoadingRegisterCard || isLoadingContact || isLoadingmap || isLoadingLinks || isLoadingcopyRight) {
        return <p className="text-center text-white">Loading...</p>;
    }
    return (
        <div>
            <Header color1={props.color1} color2={props.color2} />
            <section className="relative sm:max-w-full h-auto py-4  bg-cover bg-center"
                style={{
                    backgroundImage: `url(${eventData[0]?.backgroundImage
                        ? `data:image/jpeg;base64,${eventData[0].backgroundImage}`
                        : '/images/corporate-businessman-giving-presentation-large-audience.jpg'
                        })`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="sm:max-w-full h-auto mx-auto text-center relative text-white mt-20 sm:mt-40 px-4">
                    <h1 className="text-[36px] sm:text-[54px] font-bold font-Kaisei-Decol mb-3">
                        {eventData[0].conferenceTitle}
                    </h1>
                    <h2 className="text-[20px] sm:text-[40px]  font-medium font-Playwrite animate-float animate-once animate-duration-1000 animate-ease-in-out mb-5" style={{ color: props.color2 }}>
                        {eventData[0].conferenceSubtitle}
                    </h2>
                    {eventData.length > 0 && (
                        <h2 className="text-[30px] sm:text-[50px] font-medium font-Helvetica mb-3">
                            {formatDate(eventData[0].conferenceDate)}
                        </h2>
                    )}
                    <h1 className="text-[30px] sm:text-[50px] mb-6 font-bold font-Kaisei-Decol">
                        {eventData[0].conferenceType}
                    </h1>
                    <button onClick={handleButtonClick} className="uppercase w-52 sm:w-64 h-12 mb-10 sm:mb-20 mt-5  bg-white text-[20px] sm:text-[23px] font-semibold rounded-full p-2 mr-4 pr-7" style={{ color: props.color2 }}   >
                        Regester
                    </button>
                </div>
            </section>


            <section className='w-full flex flex-col justify-center items-center  py-4 relative' style={{ backgroundColor: props.color1 }}>
                <div className='my-10 lg:my-20 max-w-5xl px-4 mx-auto text-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol' style={{ color: props.color2 }}>
                        About the Conference
                    </h1>
                </div>
                <div className='flex justify-center items-center w-full px-5 md:w-8/12 lg:w-7/12 xl:w-5/12 mb-10 lg:mb-20'>
                    <p className='text-white text-base p-5 lg:p-0 sm:text-lg md:text-xl lg:text-2xl font-Andika font-thin text-justify lg:leading-relaxed  tracking-wider '
                        style={{
                            color: textColor,
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        {aboutConference[0].description}
                    </p>
                </div>
            </section>

            <section className="w-full py-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-Kaisei-Decol mb-20 mt-10"
                        style={{ color: props.color2 }}
                    >
                        KEY DATES
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center my-10 gap-5 lg:gap-20">
                    {keydates.map((item, index) => (
                        <div
                            key={index}
                            className={`w-48 sm:w-60 h-60 lg:h-80 md:h-80 border-2 p-4 transition-all duration-300 ease-in-out`}
                            style={{
                                backgroundColor: index % 2 === 0 ? props.color1 : props.color2 + "99",
                                borderColor: "white",
                                borderRadius: index % 2 === 0
                                    ? "40px 0px 0px 40px"
                                    : "0px 40px 40px 0px",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = props.color2;
                                e.currentTarget.style.borderRadius = "0px";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "white";
                                e.currentTarget.style.borderRadius = index % 2 === 0
                                    ? "40px 0px 0px 40px"
                                    : "0px 40px 40px 0px";
                            }}
                        >
                            <div className="mt-[30%]">
                                <h1 className="font-Andika text-sm md:text-lg text-center font-bold">
                                    {item.description}
                                </h1>
                                <hr
                                    className="w-2/4 mx-auto my-3 md:my-5"
                                    style={{ borderColor: props.color2 }}
                                />
                                <h1 className="font-roboto text-lg text-center font-bold">
                                    {item.date}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full flex flex-col justify-center items-center py-4 bg-[url('/images/bg-img-2.png')] bg-cover bg-center relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: props.color1,
                        opacity: 0.25,
                    }}
                ></div>
                <div className="text-center relative">
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-bold font-Kaisei-Decol uppercase mt-12"
                        style={{ color: props.color2 }}
                    >
                        Key Invitees
                    </h1>
                </div>
                <div
                    className="flex flex-col justify-center items-center gap-4 my-10 sm:my-20 border-2 rounded-lg group relative transition-all duration-300 ease-in-out"
                    style={{
                        borderColor: props.color2,
                        backgroundColor: props.color1,
                    }}
                >
                    {keyInviees.length > 0 && keyInviees[0]?.image_url ? (
                        <div className="w-[300px] h-[400px] flex flex-col justify-center items-center rounded-xl bg-white border shadow-sm relative p-6">
                            <div
                                className="absolute rounded-full w-[80px] h-[80px] border-4 animate-wave1 left-[36%] top-[30%] lg:top-[18%] md:top-[18%]"
                                style={{
                                    borderColor: props.color2,
                                }}
                            />
                            <div
                                className="absolute rounded-full w-[80px] h-[80px] border-4 animate-wave2  left-[36%] top-[30%] lg:top-[18%] md:top-[18%]"
                                style={{
                                    borderColor: props.color2,
                                }}
                            />
                            <img
                                src={`data:image/jpeg;base64,${keyInviees[0].image_url}`}
                                className="w-32 h-32 rounded-full object-cover mb-50 z-10"
                                alt={keyInviees[0].name || "Key Invitee"}
                            />
                            <div>

                                <h1
                                    className="text-lg sm:text-xl md:text-2xl text-center font-bold mt-4 text-black"
                                >
                                    {keyInviees[0].name || "Unknown"}
                                </h1>
                                <p
                                    className="text-center text-sm sm:text-base md:text-lg mt-2 text-black"
                                >
                                    {keyInviees[0].title || "No Title"}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-red-500">No invitee data available</p>
                    )}
                </div>
            </section>

            <section
                className="w-full flex flex-col justify-center items-center py-4  bg-[url('/images/SL-043021-42650-16.jpg')] bg-cover bg-center relative"
                // style={{ backgroundColor: props.color1 || '#0B0A2A' }} // Dynamic section background color
            >
                  <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: props.color1,
                        opacity: 0.75,
                    }}
                ></div>
                <div className="text-center mb-10 sm:mb-20">
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-bold font-Kaisei-Decol mt-10 sm:mt-20 uppercase relative"
                        style={{ color: props.color2 || '#FFFFFF' }} // Dynamic title color
                    >
                        Chief Patrons
                    </h1>
                </div>
                <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-20 mb-10 sm:mb-20 px-4">
                    {patrons.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[320px] h-[350px] border-2 rounded-lg flex flex-col justify-end items-center transform transition-transform duration-500 hover:scale-105 bg-black"
                            style={{
                                borderColor: props.color2 || '#D1D5DB', // Dynamic card border color
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-full clip-curved"
                                style={{
                                    backgroundColor: props.color2 || '#7CB342', // Dynamic overlay color
                                }}
                            ></div>
                            <div
                                className="absolute top-5 w-[80px] h-[80px] rounded-full"
                                style={{
                                    backgroundColor: props.color2 || '#D1D5DB', // Dynamic icon background color
                                    border: `3px solid ${props.color2 || '#C8F51E'}`, // Dynamic icon border color
                                }}
                            ></div>
                            <div className="relative z-10 text-center mb-10 px-4 space-y-3">
                                <img
                                    src={`data:image/jpeg;base64,${item.image_url}`}
                                    className="w-32 h-32 rounded-full object-cover mb-50 z-10 mb-24 ml-10"
                                    alt={item.name || 'Key Invitee'}
                                />
                                <h1
                                    className="text-lg font-bold"
                                    style={{ color: props.color1 || '#FFFFFF' }} // Dynamic name color
                                >
                                    {item.name}
                                </h1>
                                <div
                                    className="w-12 h-1 mx-auto mt-1"
                                    style={{ backgroundColor: props.color1 || '#C8F51E' }} // Dynamic divider color
                                ></div>
                                <p
                                    className="text-sm"
                                    style={{ color: props.color2 || '#FFFFFF' }} // Dynamic role text color
                                >
                                    {item.role}
                                </p>
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
                            className="sm:w-52 h-64 md:w-64 md:h-auto lg:h-80 border-2 p-6 sm:p-8 rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                            style={{
                                backgroundColor: props.color2,
                                borderColor: item.borderColor || 'white',
                            }}
                        >
                            <h1
                                className="w-44 h-24 font-Trebuchet text-lg sm:text-xl text-center font-bold mb-3"
                                style={{
                                    color: item.textColor || 'white',
                                }}
                            >
                                {item.category}
                            </h1>
                            <h1
                                className="font-roboto text-2xl text-center font-bold"
                                style={{
                                    color: item.textColor || 'white',
                                }}
                            >
                                {item.currency}
                            </h1>
                            <hr
                                className="w-2/4 my-5"
                                style={{
                                    borderColor: props.color1 || '#C8F51E',
                                }}
                            />
                            <h1
                                className="font-roboto text-4xl sm:text-5xl text-center font-bold"
                                style={{
                                    color: item.highlightColor || '#FFD700', // Default yellow
                                }}
                            >
                                {Math.floor(item.value)}
                            </h1>
                            <button
                                className="uppercase w-32 sm:w-40 mt-4 h-10 font-medium rounded-lg"
                                style={{
                                    backgroundColor: item.buttonBgColor || '#DC2626', 
                                
                                    color: item.buttonTextColor || 'white',
                                }}
                            >
                                Register here
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className=' w-full h-[580px] text-center' style={{ backgroundColor: props.color1 }}>
                <div className='flex flex-col'>
                    <h1 className='text-[54px] font-bold font-Kaisei-Decol  mb-10 mt-10' style={{ color: props.color2 }}>Contact Us</h1>
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

            {map && (
                <section>
                    <div className="flex justify-center " >
                        <iframe
                            src={map.iframe_url}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="shadow-lg w-full h-[400px]"
                        />
                    </div>
                </section>
            )}

            <section className='bg-white'>
                <div className=' w-full h-20 flex justify-center items-center  gap-10 '>
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={`https://${link.link_url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
                        >
                            <img
                                src={icons[link.platform] || "/images/default_icon.png"}
                                alt={`${link.platform}-icon`}
                                className="w-8 h-8"
                            />
                        </a>
                    ))}
                </div>
                <div className='bg-footer-bg p-2 text-footer-text  text-center '>
                    <p style={{ backgroundColor: '#000', color: props.color2 }} className="p-2 text-center z-10">
                        {copyRight.copyRight}
                    </p>
                </div>
            </section>
        </div>
    );
}


export default Home;
