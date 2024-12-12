import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
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
        setOpenDropdown(null);
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
                // Assuming the API returns the logo image URL or base64 data
                if (data.backgroundImage) {
                    setLogoImage(data.backgroundImage); // Set the logo image dynamically
                }
            })
            .catch(error => console.error('Error fetching logo image:', error));
    }, []);

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
                className={`${isSticky
                    ? 'fixed top-[-1px] left-0 right-0 bg-[#0B0A2A] shadow-lg'
                    : 'bg-transparent relative'
                    } flex lg:justify-around justify-between items-center max-w-full mx-auto px-4 py-4 transition-all duration-300 z-40`}
                style={isSticky ? {backgroundColor:'#000'} :{ backgroundColor: props.color1 }}
            >

                <div className="w-40 h-12">
                    <img src={
                        logoImage
                            ? `data:image/jpeg;base64,${logoImage}` // If logoImage is set, use it as the src
                            : '/images/cropped-ICVRSCET-1.png' // Fallback if logoImage is not available
                    } alt="logo" className="h-full object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <ul className=" text-lg font-bold flex gap-8 items-center"
                        ref={dropdownRef}
                        style={{ color: props.color2 }}
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
                                <div className="absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 z-10"
                                    style={{ borderColor: props.color2 }}
                                >
                                    <ul onMouseLeave={handleMouseLeave} className="text-left font-roboto">
                                        <li>
                                            <Link to="/about/conference_tracks" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                earlier conferences
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about/about_conference" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                about the conference
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about/scope_conference" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                scope of conference
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about/about_vrscet" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                about vrscet
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about/organizing_committee" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                organizing committee
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about/editorial_board" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                editorial board
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition"
                                onMouseEnter={() => handleMouseEnter('authors')}
                            >
                                AUTHOR'S DESK
                            </Link>
                            {openDropdown === 'authors' && (
                                <div className="absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4  z-10"
                                    style={{ borderColor: props.color2 }}
                                >
                                    <ul onMouseLeave={handleMouseLeave} className="text-left font-roboto">
                                        <li>
                                            <Link to="/author/conference_tracks" className="block py-1 uppercase hover:bg-green-100 border-b text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                conference tracks
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/author/journal_publication" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                journal publication
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/author/key_dates" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                key dates
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/author/registration_details" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                registration details
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/author/new_paper_submission" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                new paper submission
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition"
                                onMouseEnter={() => handleMouseEnter('reach')}
                            >
                                REACH US
                            </Link>
                            {openDropdown === 'reach' && (
                                <div className="absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4  z-10"
                                    style={{ borderColor: props.color2 }}>
                                    <ul onMouseLeave={handleMouseLeave} className="text-left font-roboto">
                                        <li>
                                            <Link to="/contact_us" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                contact us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/admin" className="block py-1 uppercase hover:bg-green-100 border-b  text-sm"
                                                style={{ borderColor: props.color2 }}>
                                                Admin page
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
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
                    <div className="absolute top-full right-0 w-[50%] bg-[#0B0A2A] text-[#C8F51E] lg:hidden">
                        <ul className="flex flex-col items-center py-4 gap-2 text-lg font-bold text-center" ref={dropdownRef}>
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <Link to="/" className="">HOME</Link>
                            </li>
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <Link to="#" className="px-2" onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}>
                                    ABOUT US
                                </Link>
                                {openDropdown === 'about' && (
                                    <div className="bg-white text-black p-2 w-full text-base border-t-4 border-[#C8F51E] absolute right-40">
                                        <ul className="text-left space-y-1 font-roboto">
                                            <li><Link to='/about/conference_tracks' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>earlier conferences</Link></li>
                                            <li><Link to='/about/about_conference' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>about the conference</Link></li>
                                            <li><Link to='/about/scope_conference' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>scope of conference</Link></li>
                                            <li><Link to='/about/about_vrscet' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>about vrscet</Link></li>
                                            <li><Link to='/about/organizing_committee' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>organizing committee</Link></li>
                                            <li><Link to='/about/editorial_board' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>editorial board</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <Link to="#" className="px-2" onClick={() => setOpenDropdown(openDropdown === 'authors' ? null : 'authors')}>AUTHOR'S DESK</Link>
                                {openDropdown === 'authors' && (
                                    <div className='absolute bg-white text-black p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10 right-40'>
                                        <ul onMouseLeave={handleMouseLeave} className='text-left font-roboto'>
                                            <li><Link to='/author/conference_tracks' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>conference tracks</Link></li>
                                            <li><Link to='/author/journal_publication' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>journal publication</Link></li>
                                            <li><Link to='/author/key_dates' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>key dates</Link></li>
                                            <li><Link to='/author/registration_details' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>registration details</Link></li>
                                            <li><Link to='/author/new_paper_submission' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>new paper submission</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <Link to="#" className="px-2" onClick={() => setOpenDropdown(openDropdown === 'reach' ? null : 'reach')}>REACH US</Link>
                                {openDropdown === 'reach' && (
                                    <div className='absolute bg-white text-black p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10 right-40'>
                                        <ul onMouseLeave={handleMouseLeave} className='text-left font-roboto'>
                                            <li className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'><Link to='/contact_us'>contact us</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}