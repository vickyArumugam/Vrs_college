import React, { useEffect, useState } from 'react';
import AboutHeader from '../About/AboutHeader';
import AboutLocation from '../About/AboutLocation';
import AboutFooter from '../About/AboutFooter';

const ConferenceTracks = (props) => {
  const [aboutConference, setAboutConference] = useState([]);
  const [isLoadingAbout, setIsLoadingAbout] = useState(true);
  const [error, setError] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null); // For dynamic hover effect

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
    fetchData('http://localhost/mailapp/author_conference_tracks.php', setAboutConference, setIsLoadingAbout);
  }, []);

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (isLoadingAbout) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div>
      <AboutHeader title={"CONFERENCE TRACKS"} theme1={props.color1} theme2={props.color2} />
      <div className="text-center py-10 text-[#0B0A2A] font-bold text-lg space-y-10 bg-white">
        {aboutConference.map((item, index) => (
          <React.Fragment key={index}>
            <h1
              className="font-bold text-25 font-Andika"
              style={{
                color: hoverIndex === index ? props.hoverColor : props.color1, // Dynamic hover effect
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.field_name}
            </h1>
            {index < aboutConference.length - 1 && (
              <hr className="border-[#0B0A2A] border-t-2 mt-4 text-center" />
            )}
          </React.Fragment>
        ))}
      </div>
      <AboutLocation />
      <AboutFooter theme1={props.color1} theme2={props.color2} />
    </div>
  );
};

export default ConferenceTracks;
