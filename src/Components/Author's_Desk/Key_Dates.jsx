import React, { useEffect, useState } from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const Key_Dates = (props) => {
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
        fetchData('http://localhost/mailapp/key_dates.php', setAboutConference, setIsLoadingAbout);
    }, []);

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    if (isLoadingAbout) {
        return <p className="text-center text-white">Loading...</p>;
    }

    return (
        <div>
            <AboutHeader title={"KEY DATES"} theme1={props.color1} theme2={props.color2}/>
            <div className="w-full lg:h-[600px] bg-[#0B0A2A] flex flex-col items-center justify-center">
                {aboutConference.map((item, index) => (
                    <div key={index} className={`${item.bgColor} flex justify-center py-4 md:py-6`}>
                        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 lg:gap-10">
                            <span className=" lg:w-96 text-white border border-[#C8F51E] px-3 md:px-4 py-3 md:py-4 font-bold text-sm md:text-base lg:text-lg text-center">
                                {item.description}
                            </span>
                            <span className="text-white border border-[#C8F51E] px-3 md:px-4 py-3 md:py-4 font-bold text-sm md:text-base lg:text-lg text-center">
                                {item.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <AboutLocation />
            <AboutFooter theme1={props.color1} theme2={props.color2} />

        </div>
    )
}

export default Key_Dates
