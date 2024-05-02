import React from 'react';
import { Phone, Mail, User2, User } from 'lucide-react';
import man from '../../assets/img/man_head.jpg';


const AdminProfile = () => {
  const uName = localStorage.getItem('uName');
  const uEmail = localStorage.getItem('uEmail');
  const uPhone = localStorage.getItem('uPhone');

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='w-1/3 h-1/4 bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>Profile</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0'>
            <div className='flex items-center mb-4'>
              <User className='w-6 h-6 mr-2' />
              <span className='text-lg font-semibold'>{uName}</span>
            </div>
            <div className='flex items-center mb-4'>
              <Phone className='w-6 h-6 mr-2' />
              <span>{uPhone}</span>
            </div>
            <div className='flex items-center'>
              <Mail className='w-6 h-6 mr-2' />
              <span>{uEmail}</span>
            </div>
          </div>
          <div className='flex items-center justify-center w-full md:w-1/2'>
            <img src={man} alt="Profile" className='rounded-full h-32 w-32 md:h-32 md:w-32' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
