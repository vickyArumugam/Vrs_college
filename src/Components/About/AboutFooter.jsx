import React, { useEffect, useState } from 'react';

const AboutFooter = () => {
  const [isLoadingContact, setIsLoadingContact] = useState(true);
  const [contact, setContact] = useState([]);
  const [error, setError] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoadingEvent, setIsLoadingEvent] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

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
    fetchData('http://localhost/mailapp/contact.php', setContact, setIsLoadingContact);
    fetchData('http://localhost/mailapp/updateConference.php', setEventData, setIsLoadingEvent);
    fetchData('http://localhost/mailapp/footerBackgroundImage.php', setImage, setIsLoadingImage);
  }, []);

  const getYear = (date) => {
    return date ? new Date(date).getFullYear() : 'N/A';
  };

  if (isLoadingContact || isLoadingEvent || isLoadingImage) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (contact.length === 0) return <div>No contact information available.</div>;

  return (
    <div>
      <section className="w-full h-[300px] lg:h-[400px] flex flex-col text-center justify-center  bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${image[0]?.backgroundImage
              ? `data:image/jpeg;base64,${image[0].backgroundImage}`
              : '/images/corporate-businessman-giving-presentation-large-audience.jpg'
            })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative px-4">
          <h1 className="text-[#0B0A2A] font-Kaisei-Decol text-4xl sm:text-5xl md:text-6xl font-extrabold my-5">
            For any inquiries
          </h1>
          <h3 className="text-[#0B0A2A] font-montserrat-subrayada text-sm sm:text-lg md:text-2xl font-bold tracking-[0.5em] sm:tracking-[1em] uppercase">
            Contact
          </h3>

          <div className="w-full flex flex-col sm:flex-row justify-evenly mt-8 sm:mt-16">
            <h1 className="text-[#0B0A2A] text-lg sm:text-xl md:text-2xl font-Playwrite font-semibold">
              Email ID: {contact[0]?.email || 'N/A'}
            </h1>
            <h1 className="text-[#0B0A2A] text-lg sm:text-xl md:text-2xl font-Playwrite font-semibold mr-0 sm:mr-20">
              Mobile: +91 {contact[0]?.mobile || 'N/A'}
            </h1>
          </div>

          <div className="w-full h-20 flex justify-center items-center gap-6 sm:gap-10 mt-0 lg:mt-10">
            <img
              src="/images/facebook_5968764 (1).png"
              alt="facebook-icon"
              className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
            <img
              src="/images/twitter_3955031.png"
              alt="twitter-icon"
              className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
            <img
              src="/images/instagram_1384015.png"
              alt="insta-icon"
              className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
            <img
              src="/images/social_15707814.png"
              alt="youtube-icon"
              className="transform transition-transform duration-200 hover:scale-110 border-3 hover:border-[#C8F51E] rounded-full"
            />
          </div>
        </div>
      </section>

      <div className="bg-footer-bg p-2 text-[#C8F51E] text-center z-10">
        Copyright {getYear(eventData?.[0]?.conferenceDate)} - V.R.S. College of Engineering and Technology
      </div>
    </div>
  );
};

export default AboutFooter;
