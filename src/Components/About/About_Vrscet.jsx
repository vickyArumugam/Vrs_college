import React from 'react'
import AboutHeader from './AboutHeader'
import AboutFooter from './AboutFooter'
import AboutLocation from './AboutLocation'

const About_Vrscet = () => {
    return (
        <div>
            <AboutHeader />
            <section className="w-full flex flex-col justify-center items-center bg-[#0B0A2A] py-4 px-4 md:px-8 lg:px-16 relative">
                <div className="flex justify-center items-center w-full md:w-10/12 lg:w-8/12 xl:w-6/12 my-10 md:my-16 lg:my-20">
                    <h1 className="text-white text-lg md:text-xl lg:text-2xl font-Andika leading-relaxed tracking-wide font-thin text-justify hover:text-[#C8F51E] p-3 lg:p-0">
                        V.R.S. College of Engineering and Technology was established in the year 1994 under the aegis of S.P.S Educational Trust.
                        The college excels with the approval of All India Council for Technical Education, New Delhi, Affiliation of Anna University,
                        Chennai, Reaccreditation by NAAC, Bengaluru [earlier by NBA, New Delhi] and Recertification by ISO 9001 : 2008. It is managed by
                        the Board of Governors with Er.M.Saravanan as its Chairman and Mr.S.R. Ramanathan as the Secretary & Correspondent.
                        Rapid dissemination of scientific principles and its vast exploitation through innovative inventions have triggered tremendous impact
                        on the socio-economic development of our Country. However, the needs of more resources and their meticulous contributions have become
                        vital to face the confronting socio-economic behavior of our country. By inculcating the educational and professional experience to the
                        resources through innovative applied research, a well-developed economic structure can be established in our country. Keeping this as a
                        mission, VRSCET has been established in a rural area and provides intellectual and career oriented professional education through various
                        disciplines. Known for its excellent infrastructure and facilities for learning, the college has consistently registered impressive academic
                        performance. A gateway to success, the college has set a longrange planning to enlarge and enrich its programmes and activities to empower
                        the youth, who aspire to become successful Engineers, Scientists and Managers.
                    </h1>
                </div>
            </section>

            <AboutLocation />
            <AboutFooter />

        </div>
    )
}

export default About_Vrscet


