import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AboutHeader from './AboutHeader';
import AboutFooter from './AboutFooter';
import AboutLocation from './AboutLocation';

const Organizing_Committee = (props) => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchSections = async () => {
        try {
            const response = await axios.get('http://localhost/mailapp/organizing_committee.php');
            setSections(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching sections:', err);
            setError('Failed to load data.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSections();
    }, []);

    if (loading) {
        return <div className="text-center p-6">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 p-6">{error}</div>;
    }

    return (
        <div>
            <AboutHeader title={"ORGANIZING COMMITTEE"} theme1={props.color1} theme2={props.color2} />
            <AboutLocation />
            <div className="flex flex-col items-center justify-center p-6 md:p-8 gap-6">
                {sections.map((section, index) => (
                    <div key={index} className="w-full flex flex-col items-center text-center relative">
                        <div className="w-full max-w-sm md:max-w-md bg-box-editiorial text-white font-bold py-2 rounded-t mb-5">
                            {section.title}
                        </div>

                        <div className="border-blue-600 rounded-b p-4 w-full max-w-7xl">
                            <div className="font-Trebuchet text-base md:text-lg font-semibold text-blue-700 ">
                                {section.members.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className=" text-box-editiorial border-2 font-semibold border-box-editiorial p-4 w-full max-w-xs mx-auto"
                                    >
                                        <p className="font-semibold">{member.name}</p>
                                        <p>{member.position}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AboutFooter theme1={props.color1} theme2={props.color2} />
        </div>
    );
};

export default Organizing_Committee;
