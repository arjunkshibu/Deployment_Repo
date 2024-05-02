import { User } from 'lucide-react';
import React from 'react';

const AdminTopBar = () => {
  const adminName = localStorage.getItem("uName");

  return (
    <div className="w-full h-24 text-white flex font-Scania justify-between items-center text-4xl pl-3 pr-5  bg-nav-blue">
      <div className='flex items-center justify-center flex-grow'>
        Admin Dashboard
      </div>
      <div className="flex items-center text-xl">
        <User />
        {adminName}
      </div>
    </div>
  );
};

export default AdminTopBar;
