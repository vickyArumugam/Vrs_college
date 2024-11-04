import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
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
        <div className="bg-[url('public/images/corporate-businessman-giving-presentation-large-audience.jpg')] bg-cover bg-fixed bg-center relative">
            <div className="absolute inset-0 bg-black opacity-75"></div>

            <nav
                className={`${
                    isSticky ? 'fixed top-0 left-0 right-0 bg-[#0B0A2A] shadow-lg' : 'bg-transparent  relative '
                } flex justify-around  max-w-full mx-auto py-4 transition-all duration-300 z-10`}
            >
                <div className='w-60 h-16 hover:opacity-50 relative'>
                    <img src="public/images/cropped-ICVRSCET-1.png" alt="logo" />
                </div>
                <div className='content-center sm:'>
                    <ul className='text-[#C8F51E] text-xl font-bold flex gap-5 items-center relative '>
                        <li>
                            <a href="#" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900'>HOME</a>
                        </li>
                        <li>
                            <a href="#" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900' onMouseEnter={() => handleMouseEnter('about')}>ABOUT US</a>
                            {openDropdown === 'about' && (
                                <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
                                    <ul onMouseLeave={handleMouseLeave} className='text-left '>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>earlier conferences</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>about the conference</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>scope of conference</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>about vrscet</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>organizing committee</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>editorial board</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900' onMouseEnter={() => handleMouseEnter('authors')}>AUTHOR'DESK</a>
                            {openDropdown === 'authors' && (
                                <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
                                    <ul onMouseLeave={handleMouseLeave} className='text-left'>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>earlier conferences</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>about the conference</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>scope of conference</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>about vrscet</a></li>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>organizing committee</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <a href="#" className='w-32 h-16 rounded-lg p-2 hover:text-white hover:bg-blue-900' onMouseEnter={() => handleMouseEnter('reach')}>REACH US</a>
                            {openDropdown === 'reach' && (
                                <div className='absolute bg-white text-black mt-6 p-4 w-44 text-base border-t-4 border-[#C8F51E] z-10'>
                                    <ul onMouseLeave={handleMouseLeave} className='text-left'>
                                        <li><a href="" className='block py-1 uppercase hover:bg-green-100 border-b-1 border-b-[#C8F51E] text-sm'>earlier conferences</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
