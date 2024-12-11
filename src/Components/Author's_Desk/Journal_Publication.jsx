import React, { useEffect, useState } from 'react';
import AboutHeader from '../About/AboutHeader';
import AboutLocation from '../About/AboutLocation';
import AboutFooter from '../About/AboutFooter';

const Journal_Publication = (props) => {
  const [aboutConference, setAboutConference] = useState([]);
  const [isLoadingAbout, setIsLoadingAbout] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url, setDataCallback, setLoadingCallback) => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      const data = JSON.parse(text);
      setDataCallback(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoadingCallback(false);
    }
  };


  useEffect(() => {
    fetchData(
      'http://localhost/mailapp/author_Journal_publication.php',
      setAboutConference,
      setIsLoadingAbout
    );
  }, []);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (isLoadingAbout) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (aboutConference.length === 0) {
    return <p className="text-center text-gray-500">No journals available.</p>;
  }
  return (
    <div>
      <AboutHeader title={"JOURNAL PUBLICATION"} theme1={props.color1} theme2={props.color2} />
      <div className=" flex flex-col justify-center items-center text-center py-8 md:py-10 text-orange-500 font-bold text-lg space-y-6 md:space-y-8 bg-white">
        <h3 className=" w-[65%] text-base font-Helvetica md:text-lg lg:text-4xl font-bold text-[#0B0A2A] px-4 mb-10">
          {aboutConference[1].title}
        </h3>

        {aboutConference.map((journal, index) => (
          <div
            key={index}
            className="w-full max-w-3xl h-auto bg-[#0B0A2A] text-white text-lg md:text-2xl font-Trebuchet text-center rounded-lg mb-4"
          >
            <p className="my-3">{journal.description}</p>
          </div>
        ))}
      </div>
      <AboutLocation />
      <AboutFooter theme1={props.color1} theme2={props.color2} />
    </div>
  );
};

export default Journal_Publication;
