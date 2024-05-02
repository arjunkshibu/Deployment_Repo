import React from 'react';
import { User } from 'lucide-react'; // Import the User icon from lucide-react
import logo from '../../assets/img/logotext.png';
import { NavLink } from 'react-router-dom';

const UserTopBar = () => {
  const userName = localStorage.getItem('uName');

  return (
    <nav className="flex items-center justify-between border-b-2 bg-white p-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      
        <NavLink to="/user/profile">
      <div className="text-blue-700 flex items-center space-x-2 font-semibold text-lg">
        <User size={20} /> 
        <p className='hover:text-blue-950'>{userName}</p> 
      </div>
        </NavLink>
    </nav>
  );
};

export default UserTopBar;
