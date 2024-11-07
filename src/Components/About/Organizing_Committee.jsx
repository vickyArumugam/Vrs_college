import React from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import AboutLocation from './AboutLocation'

const Organizing_Committee = () => {
    const sections = [
       
        {
            title: "Convenors",
            members: [
                {
                    name: "Dr.J. Joseph Ignatious, M.E., Ph.D.",
                    position: "Professor / ECE"
                },
                {
                    name: "Dr.G.Perumal, M.E., Ph.D.",
                    position: "Professor & Head / MECH"
                },
                {
                    name: "Dr.J.K. Jothi Kalpana, M.Tech., Ph.D.",
                    position: "Professor / CSE"
                },
                {
                    name: "Dr.S. Shanmuga Sundaram, M.E., Ph.D.",
                    position: "Coordinator/ S&H"
                }
            ]
        },
        {
            title: "Advisory Committee",
            members: [
                {
                    name: "Mr.G.Sadiq Basha",
                    position: "HOD / ECE"
                },
                {
                    name: "Mr.K. Ramesh",
                    position: "HOD / CSE"
                },
                {
                    name: "Mr.S. Manimaran",
                    position: "HOD / EEE"
                },
                {
                    name: "Mr.A.Kumar",
                    position: "HOD / CIVIL"
                }
            ]
        }, {
            title: "Advisory Committee",
            members: [
                {
                    name: "Mr.G.Sadiq Basha",
                    position: "HOD / ECE"
                },
                {
                    name: "Mr.K. Ramesh",
                    position: "HOD / CSE"
                },
                {
                    name: "Mr.S. Manimaran",
                    position: "HOD / EEE"
                },
                {
                    name: "Mr.A.Kumar",
                    position: "HOD / CIVIL"
                }
            ]
        }, {
            title: "Advisory Committee",
            members: [
                {
                    name: "Mr.G.Sadiq Basha",
                    position: "HOD / ECE"
                },
                {
                    name: "Mr.K. Ramesh",
                    position: "HOD / CSE"
                },
                {
                    name: "Mr.S. Manimaran",
                    position: "HOD / EEE"
                },
                {
                    name: "Mr.A.Kumar",
                    position: "HOD / CIVIL"
                }, {
                    name: "Mr.A.Kumar",
                    position: "HOD / CIVIL"
                }
            ]
        }
    ];
  return (
    <div>
        <AboutHeader/>
        <AboutLocation/>
        <div className="flex flex-col items-center justify-center p-8 gap-6 ">
                <div className="w-full flex flex-col items-center text-center">
                    <div className="w-full max-w-[360px] bg-box-editiorial text-white font-bold py-2 rounded-t">
                        Chairman
                    </div>
                    <div className="border-blue-600 rounded-b p-4  max-w-[40rem]">
                        <div className="font-Trebuchet text-19 font-semibold text-blue-700  ">
                            <div className="text-box-editiorial border-2 font-semibold border-box-editiorial  p-4  min-w-[360px] max-w-[20rem] w-full mx-auto">
                                <p className="font-semibold">Dr.N.Anbazhaghan, M.E., Ph.D.</p>
                                <p>Principal</p>
                            </div>
                        </div>
                    </div>
                </div>

                {sections.map((section, index) => (
                    <div key={index} className="w-full flex flex-col items-center text-center relative">
                     
                        <div className="w-full max-w-[360px] bg-box-editiorial text-white font-bold py-2 rounded-t">
                            {section.title}
                        </div>
                    
                        <div className="border-blue-600 rounded-b p-4 w-full max-w-7xl">
                            <div className="font-Trebuchet text-19 font-semibold text-blue-700 grid grid-cols-1 md:grid-cols-2  gap-y-4 ">
                                {section.members.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="text-box-editiorial border-2 font-semibold border-box-editiorial  p-4  min-w-[600px] max-w-[20rem] w-full mx-auto"
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

        <AboutFooter/>
      
    </div>
  )
}

export default Organizing_Committee
