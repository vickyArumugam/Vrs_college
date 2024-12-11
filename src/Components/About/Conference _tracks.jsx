import React, { useEffect, useState } from 'react';
import AboutHeader from './AboutHeader';
import AboutFooter from './AboutFooter';
import axios from 'axios';

const ConferenceTracks = (props) => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost/mailapp/earlier_conference.php")
            .then((response) => {
                setSections(response.data);
            })
            .catch((error) => {
                console.error("Error fetching sections:", error);
            });
    }, []);

    return (
        <div>
            <AboutHeader title={"EARLIER CONFERENCES"} theme1={props.color1} theme2={props.color2} />
            <section className="bg-[#0B0A2A]">
                {sections.map((section) => (
                    <div className="bg-black" key={section.id}>
                        <h1 className="w-[60%] ml-[20%] mt-20 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Kaisei-Decol text-[#C8F51E] p-1 lg:p-0">
                            {section.conference_name}
                        </h1>
                        <p className="w-[40%] ml-[30%] text-center text-base sm:text-lg md:text-xl text-bold font-Helvetica my-10">
                            on {section.conference_date} {section.college_name} {section.address}
                        </p>
                        <hr className="max-w-[46rem] h-1 bg-black border-0 mx-auto my-5"></hr>
                        <div className="flex justify-center items-center flex-col">
                            <img
                                src={section.image ? `data:image/jpeg;base64,${section.image}` : 'default-image.jpg'}
                                alt="Conference"
                                className="w-full sm:w-[50rem] md:w-[60rem] h-auto mb-20"
                            />
                        </div>
                    </div>
                ))}
            </section>
            <AboutFooter theme1={props.color1} theme2={props.color2} />
        </div>
    );
};

export default ConferenceTracks;
