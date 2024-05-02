import {
  BadgeDollarSign,
  BarChart2,
  CreditCard,
  Heart,
  Search,
  User,
  UserRound,
} from "lucide-react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const UserSidebar = () => {
  const location = useLocation();

  const isLandingActive = location.pathname === "/user/landing";
  const isDashboardActive = location.pathname === "/user/dashboard";
  const isFavouritesActive = location.pathname === "/user/favourites";
  const isPaymentsActive = location.pathname === "/user/payments";
  const isProfileActive = location.pathname === "/user/profile";

  const handleLogout = () => {
    localStorage.clear(); 
  };

  return (
    <div className="h-full w-56 bg-gray-800 py-20 px-2">
      <div className="text-xl">
        <ul className="space-y-16 flex mt-20 flex-col items-center">
          <li>
            <NavLink
              to="/user/landing"
              className={`text-white hover:text-green-500 ${
                isLandingActive ? "text-green-500 hover:text-green-500" : ""
              }`}
            >
              <Search size={20} className="mr-2 inline-block" />
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/dashboard"
              className={`text-white hover:text-green-500 ${
                isDashboardActive ? "text-green-500 hover:text-green-500" : ""
              }`}
            >
              <BarChart2 size={20} className="mr-2 inline-block" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/subscriptions"
              className={`text-white hover:text-green-500 ${
                isFavouritesActive ? "text-green-500 hover:text-green-500 " : ""
              }`}
            >
              <BadgeDollarSign size={20} className="mr-2 inline-block" />{" "}
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/favourites"
              className={`text-white hover:text-green-500 ${
                isFavouritesActive ? "text-green-500 hover:text-green-500 " : ""
              }`}
            >
              <Heart size={20} className="mr-2 inline-block" /> Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/payments"
              className={`text-white hover:text-green-500 ${
                isPaymentsActive ? "text-green-500 hover:text-green-500 " : ""
              }`}
            >
              <CreditCard size={20} className="mr-2 inline-block" /> Payments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/profile"
              className={`text-white hover:text-green-500 ${
                isProfileActive ? "text-green-500 hover:text-green-500" : ""
              }`}
            >
              <UserRound size={20} className="mr-2 inline-block" />
              Profile
            </NavLink>
          </li>
        </ul>
      <div className="flex mt-9 items-center justify-center">
        <NavLink to="/" onClick={handleLogout}>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </button>
        </NavLink>
      </div>
      </div>
    </div>
  );
};

export default UserSidebar;
