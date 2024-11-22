import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutLocation from "../About/AboutLocation";
import Welcome_page from "../Admin/Home/Welcome_page";
import ConferenceForm from "../Admin/Home/ConferenceForm";
import KeyDate_Card from "../Admin/Home/KeyDate_Card";
import Key_Invitees from "../Admin/Home/Key_Invitees";
import Chief_Patrons from "../Admin/Home/Chief_Patrons";
import Register_Card from "../Admin/Home/Register_Card";

export default function SideNavbar() {
    const [activeTab, setActiveTab] = useState("home1"); // Default to first "Home" item
    const navigate = useNavigate();

    // Menu configuration
    const menuItems = [
        {
            key: "home",
            label: "Home",
            subItems: [
                { key: "home1", label: "Welcome Page", component: <Welcome_page /> },
                { key: "home2", label: "About the Conference", component: <ConferenceForm /> },
                { key: "home3", label: "Key Dates Cards", component: <KeyDate_Card /> },
                { key: "home4", label: "Key Invitees Cards", component: <Key_Invitees /> },
                { key: "home5", label: "Chief Patrons Cards", component: <Chief_Patrons /> },
                { key: "home6", label: "Register Cards", component: <Register_Card /> },
            ],
        },
        { key: "about", label: "About", component: <AboutLocation /> },
        { key: "services", label: "Services", component: <div>Our Services</div> },
        { key: "contact", label: "Contact", component: <div>Contact Us</div> },
    ];

    // Handle menu item click
    const handleMenuItemClick = (key) => {
        setActiveTab(key); // Change active tab
    };

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
                                    onClick={() => handleMenuItemClick(item.key)}
                                    className={`flex justify-between w-full text-left px-4 py-2 rounded ${
                                        activeTab === item.key ? "bg-blue-700" : "hover:bg-blue-700"
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
            <div className="flex-1 ml-64 "> {/* Added pt-20 for space to accommodate fixed top navbar */}
                {/* Top Navbar for Home section */}
                {activeTab === "home" && (
                    <div className="bg-[#0B0A2A] text-white p-4 flex justify-between items-center sticky top-0 z-10 h-16">
                        <h1 className="text-2xl font-bold">Home</h1>
                        <div className="flex space-x-4">
                            {menuItems
                                .find((item) => item.key === "home")
                                .subItems.map((subItem) => (
                                    <button
                                        key={subItem.key}
                                        onClick={() => handleMenuItemClick(subItem.key)}
                                        className={`text-white px-4 py-2 rounded ${
                                            activeTab === subItem.key ? "bg-blue-700" : "hover:bg-blue-700"
                                        }`}
                                    >
                                        {subItem.label}
                                    </button>
                                ))}
                        </div>
                    </div>
                )}

                {/* Display the component corresponding to the active tab */}
                {menuItems.map(
                    (item) =>
                        (item.key === activeTab || item.subItems?.some((sub) => sub.key === activeTab)) &&
                        (item.subItems
                            ? item.subItems.find((sub) => sub.key === activeTab)?.component
                            : item.component)
                )}
            </div>
        </div>
    );
}
