import React, { useState, useEffect } from "react";
import Welcome_page from "../Admin/Home/Welcome_page";
import ConferenceForm from "../Admin/Home/ConferenceForm";
import KeyDate_Card from "../Admin/Home/KeyDate_Card";
import Key_Invitees from "../Admin/Home/Key_Invitees";
import Chief_Patrons from "../Admin/Home/Chief_Patrons";
import Register_Card from "../Admin/Home/Register_Card";
import About_conference from "../Admin/About/About_conference";
import Scope_conference from "../Admin/About/Scope_conferences";
import About_vrscet from "../Admin/About/About_vrscet";
import EditorialBoardForm from "../Admin/About/EditorialBoardForm";
import Earlier_conferences from "../Admin/About/EarlierConferences";
import Conference_tracker from "../Admin/Author's/Conference_tracks";
import Journal_publication from "../Admin/Author's/Journal_publication";
import Key_Dates from "../Admin/Author's/Key_date";
import BankAccountForm from "../Admin/Author's/BankAccountForm";
import OrganizingCommittee from "../Admin/About/Organizing_committee";
import Contacts from "../Admin/Contact/Contacts";
import { div } from "framer-motion/client";
import MapForm from "../Admin/Contact/MapForm";
import CopyRights from "../Admin/Contact/CopyRights";
import SocialMedia from "../Admin/Contact/SocialMedia";


// import EarlierConferences from "../Admin/About/EarlierConferences";

export default function SideNavbar() {
    const [activeSection, setActiveSection] = useState("home"); // Main section (e.g., Home, About)
    const [activeSubSection, setActiveSubSection] = useState("home1"); // Subsection (e.g., Welcome Page)

    // Menu configuration
    const menuItems = [
        {
            key: "home",
            label: "Home",
            defaultSubKey: "home1",
            subItems: [
                { key: "home1", label: "Welcome Page", component: <Welcome_page /> },
                { key: "home2", label: "About the Conference", component: <ConferenceForm /> },
                { key: "home3", label: "Key Dates Cards", component: <KeyDate_Card /> },
                { key: "home4", label: "Key Invitees Cards", component: <Key_Invitees /> },
                { key: "home5", label: "Chief Patrons Cards", component: <Chief_Patrons /> },
                { key: "home6", label: "Register Cards", component: <Register_Card /> },
            ],
        },
        {
            key: "about",
            label: "About",
            defaultSubKey: "about1",
            subItems: [
                { key: "about1", label: "Earlier Conferences", component: <Earlier_conferences/> },
                { key: "about2", label: "About the Conference", component: <About_conference/> },
                { key: "about3", label: "Scope of Conference", component: <Scope_conference/>   },
                { key: "about4", label: "About VRSCET", component:<About_vrscet/> },
                { key: "about5", label: "Organizing Committee", component:<OrganizingCommittee/>},
                { key: "about6", label: "Editorial Board", component: <EditorialBoardForm/> },
            ],
        },
        {
            key: "author's desk",
            label: "Author's Desk",
            defaultSubKey: "author1",
            subItems: [
                { key: "author1", label: "CONFERENCE TRACKS", component: <Conference_tracker/> },
                { key: "author2", label: "JOURNAL PUBLICATION", component: <Journal_publication/>},
                { key: "author3", label: "KEY DATES", component: <Key_Dates/>},
                { key: "author4", label: "REGISTRATION DETAILS", component:<BankAccountForm/>},
            ],
        },
        {
            key: "Countact Us",
            label: "Countact Us",
            defaultSubKey: "countact1",
            subItems: [
                { key: "countact1", label: "COUNTACT ", component: <Contacts/> },
                { key: "countact2", label: "MEDIA LINK", component: <SocialMedia/>},
                { key: "countact3", label: "MAP LINK", component: <MapForm/>},
                { key: "countact4", label: "COPY RIGHT", component: <CopyRights/> },
               
            ],
        },
    ];

    // Handle section click
    const handleSectionClick = (sectionKey) => {
        const section = menuItems.find((item) => item.key === sectionKey);
        if (section) {
            setActiveSection(sectionKey);
            setActiveSubSection(section.defaultSubKey); // Set the default subsection for the section
        }
    };

    // Handle subsection click
    const handleSubSectionClick = (subKey) => {
        setActiveSubSection(subKey);
    };

    // Get the current section and subsection data
    const currentSection = menuItems.find((item) => item.key === activeSection);
    const currentSubSection =
        currentSection?.subItems.find((subItem) => subItem.key === activeSubSection);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-full bg-[#0B0A2A] text-white w-64">
                <div className="p-4 text-lg font-bold">Dashboard</div>
                <nav>
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.key}>
                                <button
                                    onClick={() => handleSectionClick(item.key)}
                                    className={`flex justify-between w-full text-left px-4 py-2 rounded ${
                                        activeSection === item.key ? "bg-blue-700" : "hover:bg-blue-700"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64">
                {/* Top Navbar */}
                {currentSection && (
                    <div className="bg-[#0B0A2A] text-white p-4 flex justify-between items-center sticky top-0 h-16">
                        <h1 className="text-2xl font-bold">{currentSection.label}</h1>
                        <div className="flex space-x-4">
                            {currentSection.subItems.map((subItem) => (
                                <button
                                    key={subItem.key}
                                    onClick={() => handleSubSectionClick(subItem.key)}
                                    className={`text-white px-4 py-2 rounded ${
                                        activeSubSection === subItem.key ? "bg-blue-700" : "hover:bg-blue-700"
                                    }`}
                                >
                                    {subItem.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Content Area */}
                <div className="p-4">
                    {currentSubSection?.component || (
                        <div className="text-center text-gray-500">Select a subsection</div>
                    )}
                </div>
            </div>
        </div>
    );
}
