import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminTopBar from '../components/Admin/AdminTopBar';
import AdminsideBar from '../components/Admin/AdminsideBar';

const AdminLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <AdminsideBar />
      <div className='flex flex-col w-full'>
        <AdminTopBar />
        <div className='flex flex-col flex-1 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
    );
  };

export default AdminLayout;