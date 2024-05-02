import React from "react";
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
<div className="min-h-[60px] font-Montserrat w-full bg-black flex overflow-hidden flex-col md:flex-row md:items-center md:justify-between">
      <div className="">
        <h4 className="text-white md:text-xl text-base flex justify-center">
          &copy; 2024 CourseHunt.Inc. All rights reserved.{" "}
        </h4>

      </div>
      <div className="flex flex-row text-white items-center justify-center md:space-x-10 md:text-xl space-x-2">
      <NavLink to="/help" className="text-white">FAQ</NavLink>
      <NavLink to="/terms" className="text-white">Terms and Conditions</NavLink>
      <NavLink to="/policy" className="text-white">Privacy Policy</NavLink>
    </div>
      <div className="flex flex-row md:space-x-4 justify-center items-center space-x-2 md:mr-8">
        <SocialIcon url="https://twitter.com" target="_blank" style={{height:'40px', width:'40px'}}/>
        <SocialIcon url="https://facebook.com" target="_blank" style={{height:'40px', width:'40px'}} />
        <SocialIcon url="https://instagram.com" target="_blank" style={{height:'40px', width:'40px'}} />
      </div>
    </div>
  );
};

export default Footer;
