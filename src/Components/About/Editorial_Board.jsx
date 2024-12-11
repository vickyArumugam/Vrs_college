import React, { useEffect, useState } from "react";
import AboutHeader from "./AboutHeader";
import AboutFooter from "./AboutFooter";
import AboutLocation from "./AboutLocation";

const Editorial_Board = (props) => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMembers = async () => {
        try {
            const response = await fetch("http://localhost/mailapp/editorial_board.php");
            if (!response.ok) {
                throw new Error(`Error fetching members: ${response.statusText}`);
            }
            const data = await response.json();
            if (data.success) {
                setMembers(data.data);
            } else {
                throw new Error("Failed to fetch members");
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    if (isLoading) {
        return <p className="text-center text-gray-700">Loading...</p>;
    }

    return (
        <div>
            <AboutHeader title={"EDITORIAL BOARD"}  theme1={props.color1} theme2={props.color2}/>
            <div className="w-auto h-auto flex flex-wrap justify-center my-20 gap-4 p-8">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="w-[40rem] font-Trebuchet text-19 border-2 font-semibold border-box-editiorial rounded-lg text-center text-box-editiorial"
                    >
                        <p>{member.name}</p>
                        <p>{member.position}</p>
                        <p>{member.institution}</p>
                        <p>{member.location}</p>
                    </div>
                ))}
            </div>
            <AboutLocation />
            <AboutFooter theme1={props.color1} theme2={props.color2} />
        </div>
    );
};

export default Editorial_Board;
