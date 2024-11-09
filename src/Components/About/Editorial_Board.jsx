import React from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import AboutLocation from './AboutLocation'


const Editorial_Board = () => {
    const members = [
        {
            name: "Dr.B.Deepanraj",
            position: "ASP/Mechanical Engg.",
            institution: "Prince Mohammed Bin Fahd University",
            location: "Al Khobar, Saudi Arabia."
        },
        {
            name: "Dr.D.Lenin Singaravelu",
            position: "ASP/Production Engg.",
            institution: "National Institute of Technology",
            location: "Trichy."
        },
        {
            name: "Dr.N.Senthil Kumar",
            position: "AP & Head / Mech",
            institution: "National Institute of Technology",
            location: "Karaikal, UT of Puducherry."
        },
        {
            name: "Dr.K.Devakumar",
            position: "Manager",
            institution: "Advanced Technology Products, BHEL",
            location: "Trichy."
        },
        {
            name: "Dr.Nadir Dizge",
            position: "Professor",
            institution: "Dept. of Environmental Science & Engg., Mersin University",
            location: "Turkey."
        }
    ];
  return (
    <div>
         <AboutHeader />
            <div className=" w-auto  h-[750px] lg:h-460 flex flex-wrap justify-center my-20 gap-4 p-8">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className=" w-[40rem] font-Trebuchet text-19 border-2 font-semibold border-box-editiorial rounded-lg  text-center text-box-editiorial "
                    >
                        <p >{member.name}</p>
                        <p>{member.position}</p>
                        <p>{member.institution}</p>
                        <p>{member.location}</p>
                    </div>
                ))}
            </div>
            <AboutLocation />
            <AboutFooter />
      
    </div>
  )
}

export default Editorial_Board
