import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle sticky class based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-transparent bg-cover bg-fixed bg-center relative">
            <nav
                className={`${isSticky ? 'fixed top-0 left-0 right-0 bg-[#0B0A2A] shadow-lg' : 'bg-transparent relative'
                    } flex lg:justify-around justify-between items-center max-w-full mx-auto px-4 py-4 transition-all duration-300 z-40`}
            >
                <div className='w-40 h-12'>
                    <img src="/images/cropped-ICVRSCET-1.png" alt="logo" className="h-full object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className='hidden lg:flex items-center'>
                    <ul className='text-[#C8F51E] text-lg font-bold flex gap-8 items-center'>
                        <li>
                            <a href="/" className='hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition'>HOME</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition' onMouseEnter={() => handleMouseEnter('about')}>ABOUT US</a>
                            {openDropdown === 'about' && (
                                <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
                                    <ul onMouseLeave={handleMouseLeave} className='text-left font-roboto'>
                                        <li><a href='/about/conference_tracks' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>earlier conferences</a></li>
                                        <li><a href='/about/about_conference' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>about the conference</a></li>
                                        <li><a href='/about/scope_conference' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>scope of conference</a></li>
                                        <li><a href='/about/about_vrscet' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>about vrscet</a></li>
                                        <li><a href='/about/organizing_committee' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>organizing committee</a></li>
                                        <li><a href='/about/editorial_board' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>editorial board</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className='hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition' onMouseEnter={() => handleMouseEnter('authors')}>AUTHOR'S DESK</a>
                            {openDropdown === 'authors' && (
                                <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
                                    <ul onMouseLeave={handleMouseLeave} className='text-left font-roboto'>
                                        <li><a href='/author/conference_tracks' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>conference tracks</a></li>
                                        <li><a href='/author/journal_publication' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>journal publication</a></li>
                                        <li><a href='/author/key_dates' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>key dates</a></li>
                                        <li><a href='/author/registration_details' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>registration details</a></li>
                                        <li><a href='/author/new_paper_submission' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>new paper submission</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className='hover:text-white hover:bg-blue-900 px-3 py-2 rounded-md transition' onMouseEnter={() => handleMouseEnter('reach')}>REACH US</a>
                            {openDropdown === 'reach' && (
                                <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
                                    <ul onMouseLeave={handleMouseLeave} className='text-left font-roboto'>
                                        <li><a href='/contact_us' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>contact us</a></li>
                                        <li className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'><a href='/admin' >Admin page</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu nav Button*/}
                <div className='lg:hidden flex items-center'>
                    <button onClick={toggleMobileMenu} className="text-[#C8F51E] focus:outline-none">
                        {isMobileMenuOpen ? (
                            // Close Icon (X)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Menu Icon (Three Lines)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full right-0 w-[50%] bg-[#0B0A2A] text-[#C8F51E] lg:hidden">
                        <ul className="flex flex-col  items-center py-4 gap-2 text-lg font-bold text-center">
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <a href="/" className="">HOME</a>
                            </li>
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <a href="#" className="px-2" onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}>
                                    ABOUT US
                                </a>
                                {openDropdown === 'about' && (
                                    <div className="bg-white text-black  p-2 w-full text-base border-t-4 border-[#C8F51E] absolute right-40">
                                        <ul className="text-left space-y-1 font-roboto">
                                            <li><a href='/about/conference_tracks' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>earlier conferences</a></li>
                                            <li><a href='/about/about_conference' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>about the conference</a></li>
                                            <li><a href='/about/scope_conference' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>scope of conference</a></li>
                                            <li><a href='/about/about_vrscet' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>about vrscet</a></li>
                                            <li><a href='/about/organizing_committee' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>organizing committee</a></li>
                                            <li><a href='/about/editorial_board' className='block uppercase hover:bg-green-100 px-2 py-1 border-b border-[#C8F51E] text-sm'>editorial board</a></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            {/* Add other sections similarly */}
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <a href="#"  onMouseEnter={() => handleMouseEnter('authors')}>AUTHOR'S DESK</a>
                                {openDropdown === 'authors' && (
                                    <div className='absolute bg-white text-black  p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10  right-40'>
                                        <ul onMouseLeave={handleMouseLeave} className='text-left font-roboto'>
                                            <li><a href='/author/conference_tracks' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>conference tracks</a></li>
                                            <li><a href='/author/journal_publication' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>journal publication</a></li>
                                            <li><a href='/author/key_dates' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>key dates</a></li>
                                            <li><a href='/author/registration_details' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>registration details</a></li>
                                            <li><a href='/author/new_paper_submission' className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'>new paper submission</a></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='w-full hover:text-white hover:bg-blue-900'>
                                <a href="#"  onMouseEnter={() => handleMouseEnter('reach')}>REACH US</a>
                                {openDropdown === 'reach' && (
                                    <div className='absolute bg-white text-black  p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10  right-40'>
                                        <ul onMouseLeave={handleMouseLeave} className='text-left font-roboto'>
                                            <li className='block py-1 uppercase hover:bg-green-100 border-b border-b-[#C8F51E] text-sm'><a href='/contact_us'>contact us</a></li>
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
