import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoImage, setLogoImage] = useState("");

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null); // Close any dropdowns when mobile menu toggles
    };

    // Close dropdown on outside click
    const handleBodyClick = (event) => {
        if (!event.target.closest(".dropdown-menu") && !event.target.closest(".dropdown-trigger")) {
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleBodyClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleBodyClick);
        };
    }, []);

    useEffect(() => {
        fetch("http://localhost/mailapp/uploadlogo.php")
            .then((response) => response.json())
            .then((data) => {
                if (data.backgroundImage) {
                    setLogoImage(data.backgroundImage);
                }
            })
            .catch((error) => console.error("Error fetching logo image:", error));
    }, []);

    // Handle dropdown toggle
    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
    };

    return (
        <div className="bg-transparent bg-cover bg-fixed bg-center relative">
            <nav
                className={`${
                    isSticky
                        ? "fixed top-0 left-0 right-0 bg-[#0B0A2A] shadow-lg"
                        : "bg-transparent relative"
                } flex lg:justify-around justify-between items-center max-w-full mx-auto px-4 py-4 transition-all duration-300 z-40`}
            >
                {/* Logo */}
                <div className="w-40 h-12">
                    <img
                        src={
                            logoImage
                                ? `data:image/jpeg;base64,${logoImage}`
                                : "/images/cropped-ICVRSCET-1.png"
                        }
                        alt="logo"
                        className="h-full object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <ul className="text-[#C8F51E] text-lg font-bold flex gap-8 items-center">
                        <li>
                            <Link to="/" className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition">
                                HOME
                            </Link>
                        </li>
                        <li className="relative dropdown-trigger">
                            <button
                                onClick={() => handleDropdownToggle("about")}
                                className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition"
                            >
                                ABOUT US
                            </button>
                            {openDropdown === "about" && (
                                <div className="absolute bg-white text-black mt-2 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10 dropdown-menu">
                                    <ul className="text-left font-roboto">
                                        <li>
                                            <Link to="/about/conference_tracks" className="block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm">
                                                earlier conferences
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about/about_conference" className="block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm">
                                                about the conference
                                            </Link>
                                        </li>
                                        {/* Add other items */}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="relative dropdown-trigger">
                            <button
                                onClick={() => handleDropdownToggle("authors")}
                                className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition"
                            >
                                AUTHOR'S DESK
                            </button>
                            {openDropdown === "authors" && (
                                <div className="absolute bg-white text-black mt-2 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10 dropdown-menu">
                                    <ul className="text-left font-roboto">
                                        <li>
                                            <Link to="/author/conference_tracks" className="block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm">
                                                conference tracks
                                            </Link>
                                        </li>
                                        {/* Add other items */}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="relative dropdown-trigger">
                            <button
                                onClick={() => handleDropdownToggle("reach")}
                                className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition"
                            >
                                REACH US
                            </button>
                            {openDropdown === "reach" && (
                                <div className="absolute bg-white text-black mt-2 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10 dropdown-menu">
                                    <ul className="text-left font-roboto">
                                        <li>
                                            <Link to="/contact_us" className="block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm">
                                                contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-[#C8F51E] focus:outline-none">
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full right-0 w-full bg-[#0B0A2A] text-[#C8F51E] lg:hidden">
                        <ul className="flex flex-col items-center py-4 text-lg font-bold">
                            <li>
                                <Link to="/" className="hover:text-white px-3 py-2">HOME</Link>
                            </li>
                            {/* Repeat logic for mobile dropdowns */}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}
