import React, { useEffect, useState } from 'react';
import AboutHeader from './AboutHeader';
import AboutFooter from './AboutFooter';
import axios from 'axios';



const ConferenceTracks = () => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Fetch sections from the API
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
    <AboutHeader  title={"EARLIER CONFERENCES"}/>
    <section className="bg-[#0B0A2A]">
            {sections.map((section) => (
                <div className="mt-20 bg-black" key={section.id}>
                    <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Kaisei-Decol text-[#C8F51E] p-1 lg:p-0">
                        {section.conference_name}{section.conference_date}
                    </h1>
                    <p className="text-center text-base sm:text-lg md:text-xl text-bold font-Helvetica my-10">
                        {section.description}
                    </p>
                    <hr className="max-w-[46rem] h-1 bg-black border-0 mx-auto my-5"></hr>
                    <div className="flex justify-center items-center flex-col">
                        <img
                            src={section.image_url}
                            alt="Conference"
                            className="w-full sm:w-[50rem] md:w-[60rem] h-auto mb-20"
                        />
                    </div>
                </div>
            ))}
        </section>

      <AboutFooter/>
    </div>
  );
};

export default ConferenceTracks;
