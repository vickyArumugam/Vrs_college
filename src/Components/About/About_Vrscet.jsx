import React, { useEffect, useState } from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import AboutLocation from './AboutLocation'

const About_Vrscet = (props) => {
    const [aboutConference, setAboutConference] = useState(null);
    const [isLoadingAbout, setIsLoadingAbout] = useState(true);
    const [error, setError] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

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
        fetchData('http://localhost/mailapp/about_vrscet_conference.php', setAboutConference, setIsLoadingAbout);
    }, []);

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    if (isLoadingAbout) {
        return <p className="text-center text-white">Loading...</p>;
    }

    const textColor = isHovered ? props.color2 : 'white';

  
    
    return (
        <div>
            <AboutHeader title={props.title} theme1={props.color1} theme2={props.color2}/>
            <section className="w-full flex flex-col justify-center items-center  py-4 px-4 md:px-8 lg:px-16 relative"style={{ backgroundColor: props.color1 }}>
                <div className="flex justify-center items-center w-full md:w-10/12 lg:w-8/12 xl:w-6/12 my-10 md:my-16 lg:my-20">
                    <h1 className="text-white text-lg md:text-xl lg:text-2xl font-Andika leading-relaxed tracking-wide font-thin text-justify  p-3 lg:p-0"
                    style={{
                        color: textColor,  // Use dynamic text color
                      }}
                      onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
                      onMouseLeave={() => setIsHovered(false)}
                    >
                        {aboutConference[0].description}
                    </h1>
                </div>
            </section>

            <AboutLocation />
            <AboutFooter theme1={props.color1} theme2={props.color2} />

        </div>
    )
}

export default About_Vrscet


