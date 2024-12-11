import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoImage, setLogoImage] = useState('');
    const dropdownRef = useRef(null);

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        fetch('http://localhost/mailapp/uploadlogo.php')
            .then(response => response.json())
            .then(data => {
                if (data.backgroundImage) {
                    setLogoImage(data.backgroundImage);
                }
            })
            .catch(error => console.error('Error fetching logo image:', error));
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-transparent bg-cover bg-fixed bg-center relative">
            <nav
                className={`${isSticky ? 'fixed top-[-1px] left-0 right-0 bg-[#0B0A2A] shadow-lg' : 'bg-transparent relative'
                    } flex lg:justify-around justify-between items-center max-w-full mx-auto px-4 py-4 transition-all duration-300 z-40`}
            >
                <div className="w-40 h-12">
                    <img src={
                        logoImage
                            ? `data:image/jpeg;base64,${logoImage}`
                            : '/images/cropped-ICVRSCET-1.png'
                    } alt="logo" className="h-full object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <ul
                        className="text-[#C8F51E] text-lg font-bold flex gap-8 items-center"
                        ref={dropdownRef}
                    >
                        <li>
                            <Link to="/" className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition"
                                onMouseEnter={() => handleMouseEnter('about')}
                            >
                                ABOUT US
                            </Link>
                            {openDropdown === 'about' && (
                                <div className="absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10">
                                    <ul onMouseLeave={handleMouseLeave} className="text-left font-roboto">
                                        <li>
                                            <Link to="/about/conference_tracks" className="block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm">
                                                earlier conferences
                                            </Link>
                                        </li>
                                        {/* Add other items here */}
                                    </ul>
                                </div>
                            )}
                        </li>
                        {/* Add other menu items similarly */}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className='lg:hidden flex items-center'>
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

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="absolute top-full right-0 w-[50%] bg-[#0B0A2A] text-[#C8F51E] lg:hidden"
                        ref={dropdownRef}
                    >
                        <ul className="flex flex-col items-center py-4 gap-2 text-lg font-bold text-center">
                            <li>
                                <Link to="/" className="hover:text-white hover:bg-blue-900">
                                    HOME
                                </Link>
                            </li>
                            {/* Add other mobile menu items */}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}


const [savedColors, setSavedColors] = useState([]);

// Fetch colors from the PHP file
const fetchColors = async () => {
  try {
    const response = await axios.get("http://localhost/mailapp/colors.php");
    if (response.data && Array.isArray(response.data)) {
      setSavedColors(response.data);
    } else {
      console.error("Invalid data format from server:", response.data);
    }
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

// Fetch colors when the app loads
useEffect(() => {
  fetchColors();
}, []);