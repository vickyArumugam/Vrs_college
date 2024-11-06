import React from 'react'
import AboutHeader from '../About/AboutHeader'
import AboutLocation from '../About/AboutLocation'
import AboutFooter from '../About/AboutFooter'

const Key_Dates = () => {
    const dates = [
        { description: "Last Date for Full Paper Submission", date: "17-04-2024", bgColor: "bg-[#00003F]" },
        { description: "Notification of Paper Acceptance", date: "18-04-2024", bgColor: "bg-[#FFA500]" },
        { description: "Camera Ready Paper Submission", date: "20-04-2024", bgColor: "bg-[#00003F]" },
        { description: "Last Date for Registration / Payment", date: "22-04-2024", bgColor: "bg-[#FFA500]" },
    ];
  return (
    <div>
        <AboutHeader/>
        <div className="w-full">
            {dates.map((item, index) => (
                <div key={index} className={`${item.bgColor} flex justify-center py-6`}>
                    <div className="flex items-center space-x-4">
                        <span className="text-white border border-white px-4 py-2 font-bold">
                            {item.description}
                        </span>
                        <span className="text-white border border-white px-4 py-2 font-bold">
                            {item.date}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      
            <AboutLocation/>
         <AboutFooter/>
      
    </div>
  )
}

export default Key_Dates
