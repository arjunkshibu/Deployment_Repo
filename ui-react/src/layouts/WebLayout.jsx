import React from 'react'
import TopBar from '../components/User/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/User/Footer'
import LogoNavBar from '../components/User/LogoNavBar'

const WebLayout = () => {
  return (
    <div>
      <div className='absolute top-0 w-full'>
      <LogoNavBar />
      </div>
    
      <div className='flex-grow '>
        <Outlet />
      </div>
      <div className='absolute bottom-0 w-full'>
      <Footer />

      </div>
    </div>
  )
}

export default WebLayout
