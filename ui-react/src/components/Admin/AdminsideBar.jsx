import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Adminsidebar = () => {
  const location = useLocation();
  const isDashboardActive = location.pathname === "/admin/dashboard";
  const isCoursesActive = location.pathname === "/admin/courses";
  const isUsersActive = location.pathname === "/admin/users";
  const isPaymentsActive = location.pathname === "/admin/payments";
  const isProfilesActive = location.pathname === "/admin/profile";

  const handleLogout = () =>{
    localStorage.clear();
  }

 

  return (
    <div className="h-screen m-0"> 
      <div className="flex flex-col absolute z-0 w-1/6 h-full font-sans items-center text-2xl text-white font-semibold justify-center border-r-2 bg-syn-purple">
        <NavLink
          to="/admin/dashboard"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-purple justify-center h-20 ${
            isDashboardActive ? "text-green-500 hover:text-white" : ""
          }`}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/courses"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-purple justify-center h-20 ${
            isCoursesActive ? "text-green-500 hover:text-white" : ""
          }`}
        >
          Courses
        </NavLink>
        <NavLink
          to="/admin/users"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-purple justify-center h-20 ${
            isUsersActive ? "text-green-500 hover:text-white" : ""
          }`}
        >
          Users
        </NavLink>
        <NavLink
          to="/admin/payments"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-purple justify-center h-20 ${
            isPaymentsActive ? "text-green-500 hover:text-white" : ""
          }`}
        >
          Payments
        </NavLink>
        <NavLink
          to="/admin/profile"
          className={`w-full border-b border-t border-gray-200 text-center flex items-center hover:bg-green-500  bg-syn-purple justify-center h-20 ${
            isProfilesActive ? "text-green-500 hover:text-white" : ""
          }`}
          >
          Profiles
        </NavLink>
        <NavLink to="/">
          <button className="bg-red-500 hover:bg-red-600 text-center flex items-center justify-center p-2" onClick={handleLogout}>
            Logout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Adminsidebar;
