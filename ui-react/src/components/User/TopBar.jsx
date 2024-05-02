import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import logo from '../../assets/img/logotext2.png';
import logo2 from '../../assets/img/logotext.png';

const TopBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`min-h-16 fixed w-full font-bold font-Montserrat z-50 md:flex md:justify-between shadow-sm md:items-center ${isScrolled ? 'bg-white text-black' : ' text-white'}`} style={{ transition: 'background-color 0.3s ease-in-out',minHeight:"5rem",alignItems:"center"}}>
      <div className='flex justify-end items-center p-4 md:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} rounded size={28} />
      </div>
      <div className='hidden md:block items-center'>
      <img src={isScrolled ? logo2 : logo} alt="logo"/>
      </div>
      <div className='absolute md:hidden left-[20%] top-8'>
        <img src={logo} alt="logo"/>
      </div>
      <div className={`md:flex md:justify-end md:bg-none bg-opacity-25 md:bg-opacity-0 md:pr-9  ${isOpen ? '' : 'hidden'}`}>
        <div className='flex flex-col gap-y-4 items-center md:space-x-12 md:flex-row md:text-xl text-sm'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">
            <button className={`${isScrolled ? 'text-black border-black ' : 'text-white '} pt-2 pb-2 pl-3 pr-3 border-2 hover:bg-blue-300 hover:text-black`}>Login</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
    };  
export default TopBar;
