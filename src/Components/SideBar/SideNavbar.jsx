import React, { useState } from "react";
import AboutLocation from "../About/AboutLocation";
import Welcome_page from "../Admin/Home/Welcome_page";
import ConferenceForm from "../Admin/Home/ConferenceForm";
import KeyDate_Card from "../Admin/Home/KeyDate_Card";
import Key_Invitees from "../Admin/Home/Key_Invitees";
import Chief_Patrons from "../Admin/Home/Chief_Patrons";
import Register_Card from "../Admin/Home/Register_Card";



export default function SideNavbar() {
    const [activeTab, setActiveTab] = useState("home");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // state for dropdown

    return (

        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-full bg-[#0B0A2A] text-white w-64">
                <div className="p-4 text-lg font-bold">Dashboard</div>
                <nav>
                    <ul className="space-y-2">
                        {/* Home Button with Dropdown */}
                        <li className="relative">
                            <button
                                onClick={() => setActiveTab("home")}
                                onMouseEnter={() => setIsDropdownOpen(true)}   // Show dropdown on hover
                                // Hide dropdown when mouse leaves
                                className={` flex justify-between w-full text-left px-4 py-2 rounded ${activeTab === "home" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                            >
                                Home
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </button>

                            {isDropdownOpen && activeTab === "home" && (
                                <ul className="absolute left-40 w-full bg-gray-800 mt-2 rounded shadow-lg" onMouseLeave={() => setIsDropdownOpen(false)}>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("home1")}
                                            className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                                        >
                                            welcome page
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("home2")}
                                            className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                                        >
                                            About the Conference
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("home3")}
                                            className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                                        >
                                            KEY DATES Cards
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("home4")}
                                            className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                                        >
                                            Key Invitees Cards
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("home5")}
                                            className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                                        >
                                            Chief Patrons Cards
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("home6")}
                                            className="block w-full text-left px-4 py-2 hover:bg-blue-700"
                                        >
                                            register Cards
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Other Nav Items */}
                        <li>
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`flex justify-between w-full text-left px-4 py-2 rounded ${activeTab === "about" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                            >
                                About
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937v-2.523a2.5 2.5 0 0 0-.732-1.768L8.354 5.232A2.5 2.5 0 0 0 6.586 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z" clip-rule="evenodd" />
                                    <path d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.586a1 1 0 0 0-.293-.707L7.293 6.293A1 1 0 0 0 6.586 6H3Z" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveTab("services")}
                                className={` flex justify-between w-full text-left px-4 py-2 rounded ${activeTab === "services" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                            >
                                Services
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M15 4.5A3.5 3.5 0 0 1 11.435 8c-.99-.019-2.093.132-2.7.913l-4.13 5.31a2.015 2.015 0 1 1-2.827-2.828l5.309-4.13c.78-.607.932-1.71.914-2.7L8 4.5a3.5 3.5 0 0 1 4.477-3.362c.325.094.39.497.15.736L10.6 3.902a.48.48 0 0 0-.033.653c.271.314.565.608.879.879a.48.48 0 0 0 .653-.033l2.027-2.027c.239-.24.642-.175.736.15.09.31.138.637.138.976ZM3.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
                                    <path d="M11.5 9.5c.313 0 .62-.029.917-.084l1.962 1.962a2.121 2.121 0 0 1-3 3l-2.81-2.81 1.35-1.734c.05-.064.158-.158.426-.233.278-.078.639-.11 1.062-.102l.093.001ZM5 4l1.446 1.445a2.256 2.256 0 0 1-.047.21c-.075.268-.169.377-.233.427l-.61.474L4 5H2.655a.25.25 0 0 1-.224-.139l-1.35-2.7a.25.25 0 0 1 .047-.289l.745-.745a.25.25 0 0 1 .289-.047l2.7 1.35A.25.25 0 0 1 5 2.654V4Z" />
                                </svg>

                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`flex justify-between w-full text-left px-4 py-2 rounded ${activeTab === "contact" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                            >
                                Contact
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path d="m4.922 6.752-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1 1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.012 9.012 0 0 1-6.7-6.7A9.024 9.024 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1 0 0 1-.542 1.046Z" />
                                    <path d="M9.22 5.72a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L9.22 5.72Z" />
                                </svg>

                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Main Content */}
            <div className="flex-1 ml-64 ">
                {activeTab === "home"  && <div>home page</div>}
                {activeTab === "home1" && <Welcome_page/>}
                {activeTab === "home2" && <ConferenceForm/>}
                {activeTab === "home3" && <KeyDate_Card/>}
                {activeTab === "home4" && <Key_Invitees/>}
                {activeTab === "home5" && <Chief_Patrons/>}
                {activeTab === "home6" && <Register_Card/>}
                {activeTab === "about" && <div><AboutLocation /></div>}
                {activeTab === "services" && <div>Our Services</div>}
                {activeTab === "contact" && <div>Contact Us</div>}
            </div>
        </div>

    );
}
