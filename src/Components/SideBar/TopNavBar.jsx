import React, { useState } from 'react'
import AboutLocation from "../About/AboutLocation";
import Welcome_page from "../Admin/Home/Welcome_page";
import ConferenceForm from "../Admin/Home/ConferenceForm";
import KeyDate_Card from "../Admin/Home/KeyDate_Card";
import Key_Invitees from "../Admin/Home/Key_Invitees";
import Chief_Patrons from "../Admin/Home/Chief_Patrons";
import Register_Card from "../Admin/Home/Register_Card";

function TopNavBar() {
  const [activeTab, setActiveTab] = useState("home1"); // Default active tab: Welcome Page
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state


  return (
      
   <div>
        {activeTab === "home" && (
          <div className="bg-[#9897c7] text-white p-4 shadow">
            <nav className="flex justify-center space-x-6">
              <button
                onClick={() => setActiveTab("home1")}
                className={`px-4 py-2 rounded ${
                  activeTab === "home1" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                Welcome Page
              </button>
              <button
                onClick={() => setActiveTab("home2")}
                className={`px-4 py-2 rounded ${
                  activeTab === "home2" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                About the Conference
              </button>
              <button
                onClick={() => setActiveTab("home3")}
                className={`px-4 py-2 rounded ${
                  activeTab === "home3" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                Key Dates
              </button>
              <button
                onClick={() => setActiveTab("home4")}
                className={`px-4 py-2 rounded ${
                  activeTab === "home4" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                Key Invitees
              </button>
              <button
                onClick={() => setActiveTab("home5")}
                className={`px-4 py-2 rounded ${
                  activeTab === "home5" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                Chief Patrons
              </button>
              <button
                onClick={() => setActiveTab("home6")}
                className={`px-4 py-2 rounded ${
                  activeTab === "home6" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                Register
              </button>
            </nav>
          </div>
        )}
        <div
          className={`p-6 ${
            activeTab === "home" ? "pt-22" : "" /* Adjust padding for fixed navbar */
          }`}
        >
          {activeTab === "home1" && <Welcome_page />}
          {activeTab === "home2" && <ConferenceForm />}
          {activeTab === "home3" && <KeyDate_Card />}
          {activeTab === "home4" && <Key_Invitees />}
          {activeTab === "home5" && <Chief_Patrons />}
          {activeTab === "home6" && <Register_Card />}
          {activeTab === "home7" && <Contacts/>}
          {activeTab === "about" && <div><AboutLocation /></div>}
          {activeTab === "services" && <div>Our Services</div>}
          {activeTab === "contact" && <div>Contact Us</div>}
        </div>

      </div>
  )
}

export default TopNavBar