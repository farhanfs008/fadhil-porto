import React from 'react';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-transparent fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[100px] flex items-center'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
                {/* Logo */}
                <Link to={'/photograph'} className='max-w-[200px] '>
                    <p className='text-[32px] font-semibold font-primary'>Akana</p>
                </Link>
                {/* Nav - inititally hidden - show on desktop mode */}
                <nav className='hidden xl:flex gap-x-12 font-semibold'>
                    <Link to='/photograph' className='text-[#696c6d] hover:text-primary transition'>Home</Link>
                    <Link to='/photograph/about' className='text-[#696c6d] hover:text-primary transition'>About</Link>
                    <Link to='/photograph/portfolio' className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
                    <Link to='/photograph/contact' className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
                </nav>
            </div>
            {/* Socials */}
            <Socials />
            {/* Mobile Nav */}
            <MobileNav />
        </header>
    )
}

export default Header