import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const AboutLocation = () => {
  const [isLoadingContact, setIsLoadingContact] = useState(true);
  const [contact, setContact] = useState([]);
  const [error, setError] = useState(null);
  const [isLoadingEvent, setIsLoadingEvent] = useState(true);
  const [eventData, setEventData] = useState(null);

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
    fetchData('http://localhost/mailapp/contact.php', setContact, setIsLoadingContact);
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (isLoadingEvent || isLoadingContact) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const getDayName = (date) => {
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-[680px] lg:h-[480px] bg-green-200 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center text-white px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-col lg:flex-row lg:gap-96 gap-10 text-center mt-8 md:mt-0">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl mb-1 w-14 h-14 lg:m-0 mt-16" color="#C8F51E" size={60} />
            <h1 className="uppercase font-semibold font-Playwrite text-lg md:text-xl my-4">Where</h1>
            <span className="font-semibold font-Playwrite text-sm md:text-base">
              <p className="my-2">{contact[0].college_name}</p>
              <p className="my-2">{contact[0].village}</p>
              <p className="my-2">{contact[0].district}</p>
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-4xl mb-1" color="#C8F51E" size={60} />
            <h1 className="uppercase font-semibold font-Playwrite text-lg md:text-xl my-4">When</h1>
            <span className="font-semibold font-Playwrite text-sm md:text-base">
              <p className="my-2"> {eventData[0].conferenceDate}</p>
              <p className="my-2">( {getDayName(eventData[0].conferenceDate)} )</p>
            </span>
          </div>
        </div>
        <button className="uppercase w-40 md:w-52 h-12 mt-8 bg-red-600 text-white tracking-wide font-medium hover:bg-btn-bg transition duration-200">
          Register Here
        </button>
      </div>
    </section>
  )
}

export default AboutLocation
