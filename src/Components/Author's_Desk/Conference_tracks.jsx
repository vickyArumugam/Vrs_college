import React, { useEffect, useState } from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'


const Conference_tracks = () => {
  const [aboutConference, setAboutConference] = useState(null);
  const [isLoadingAbout, setIsLoadingAbout] = useState(true);
  const [error, setError] = useState(null);

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
      <AboutHeader title={"CONFERENCE TRACKS"} />
      <div className="text-center py-10 text-[#0B0A2A] font-bold text-lg space-y-10 bg-white ">
        <h1 className='font-bold text-25 font-Andika hover:text-[#C8F51E]'>
          {aboutConference[0].field_name}
        </h1>
        <hr className="border-[#0B0A2A] border-t-2 mt-4 text-center" />
        <h1 className='font-bold text-25 font-Andika hover:text-[#C8F51E] '>  {aboutConference[1].field_name}</h1>
        <hr className="border-[#0B0A2A] border-t-2 mt-4 text-center" />
        <h1 className='font-bold text-25 font-Andika hover:text-[#C8F51E]'> {aboutConference[2].field_name}</h1>
        <hr className="border-[#0B0A2A] border-t-2 mt-4 text-center" />
        <h1 className='font-bold text-25 font-Andika hover:text-[#C8F51E] '>  {aboutConference[3].field_name} </h1>
        <hr className="border-[#0B0A2A] border-t-2 mt-4 text-center" />
      </div>
      <AboutLocation />
      <AboutFooter />

    </div>
  )
}

export default Conference_tracks
