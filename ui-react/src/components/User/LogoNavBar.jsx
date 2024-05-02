import React from 'react'
import logo from '../../assets/img/logotext.png'

const LogoNavBar = () => {
  return (
    <div className='w-full bg-white flex items-center justify-center h-20 border-b-2 sticky'>
    <div>
            <img src={logo} alt="img"/>
        </div>
    </div>
  )
}

export default LogoNavBar