import React from 'react';
import UserTopBar from '../components/User/UserTopBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/User/Footer';
import UserSidebar from '../components/User/UserSideBar';

const UserLayout = () => {
    return (
        <div className='flex h-screen'>
          <div className="w-full bg-gray-200 flex flex-col">
            <UserTopBar />
            <div className="flex h-full">
              <UserSidebar />
              <div className="overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      );
}

export default UserLayout;
