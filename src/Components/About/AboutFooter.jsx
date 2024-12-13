import React, { useEffect, useState } from 'react';

const AboutFooter = (props) => {
  const [hoveredImage, setHoveredImage] = useState(null);  // Track which image is hovered
  const [contact, setContact] = useState([]);
  const [eventData, setEventData] = useState(null);
  const [image, setImage] = useState([]);
  const [isLoadingContact, setIsLoadingContact] = useState(true);
  const [isLoadingEvent, setIsLoadingEvent] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [error, setError] = useState(null);
  const [copyRight, setCopyRight] = useState([]);
  const [isLoadingcopyRight, setIsLoadingCopyRight] = useState(true)

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
    fetchData('http://localhost/mailapp/CopyRights.php', setCopyRight, setIsLoadingCopyRight)
  }, []);

  const getYear = (date) => {
    return date ? new Date(date).getFullYear() : 'N/A';
  };

  const handleMouseEnter = (imageIndex) => {
    setHoveredImage(imageIndex);  // Set the hovered image
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);  // Reset the hovered image when mouse leaves
  };

  if (isLoadingContact || isLoadingEvent || isLoadingImage || isLoadingcopyRight) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (contact.length === 0) return <div>No contact information available.</div>;

  const backgroundImageStyle = {
    backgroundImage: image?.backgroundImage
      ? `url(data:image/jpeg;base64,${image.backgroundImage})`
      : `url('/images/default-background.jpg')`,
  };

  return (
    <div>
      <section
        className="w-full h-[300px] lg:h-[400px] flex flex-col text-center justify-center bg-cover bg-center relative"
        style={backgroundImageStyle}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative px-4">
          <h1 style={{ color: props.theme1 }} className="font-Kaisei-Decol text-4xl sm:text-5xl md:text-6xl font-extrabold my-5">
            For any inquiries
          </h1>
          <h3 style={{ color: props.theme1 }} className="font-montserrat-subrayada text-sm sm:text-lg md:text-2xl font-bold tracking-[0.5em] sm:tracking-[1em] uppercase">
            Contact
          </h3>
          <div className="w-full flex flex-col sm:flex-row justify-evenly mt-8 sm:mt-16">
            <h1 style={{ color: props.theme1 }} className="text-lg sm:text-xl md:text-2xl font-Playwrite font-semibold">
              Email ID: {contact[0]?.email || 'N/A'}
            </h1>
            <h1 style={{ color: props.theme1 }} className="text-lg sm:text-xl md:text-2xl font-Playwrite font-semibold mr-0 sm:mr-20">
              Mobile: +91 {contact[0]?.mobile || 'N/A'}
            </h1>
          </div>
        </div>
      </section>
      <div className='bg-footer-bg p-2 text-footer-text  text-center '>
        <p style={{ Color: '#000', color: props.color2 }} className="p-2 text-center z-10">
          {copyRight.copyRight}
        </p>
      </div>
    </div>
  );
};

export default AboutFooter;
