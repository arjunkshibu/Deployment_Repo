import React from "react";
import { Album, Ban, Bookmark, CircleCheckBig, Clock } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import unity from "../../assets/img/unity.jpg";
import ux from "../../assets/img/ux-design.png";
import machine from "../../assets/img/mlf.png";
import mobile from "../../assets/img/mobile-app-development.jpeg";
import Web from "../../assets/img/web-development.jpg";
import gold from "../../assets/img/gold.jpg";
function UserSubscriptions() {
  return (
    <div className="flex flex-col pt-10 pl-72 h-full font-Montserrat overflow-y-auto">
      <h2 className="font-sans font-bold text-xl flex gap-2 flex-row ">
        <Bookmark size={30} />
        Available Plans
      </h2>
      <div className="flex p-5 flex-row items-center justify-center ">
      <div className="flex flex-col w-[30vh] h-[50vh] bg-white shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105">
          <div className="flex w-full items-center h-16 justify-center bg-blue-500">
            <h2 className="text-xl text-white">BASIC</h2>
          </div>
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-5xl">FREE</h2>
          </div>

          <div className="course-info flex flex-col justify-center h-[90%]">
            <p className="font-sans pt-3 pl-3 text-blue-700 font-bold text-xl">
              <CircleCheckBig className="inline-block text-black" /> 2 courses
            </p>

            <p className="font-sans text-blue-700 pt-2 pl-3 font-bold text-xl ">
              <Ban className="inline-block text-black" /> Email and chat support
            </p>

            <p className="font-sans text-blue-700 pt-2 pl-3 font-bold text-xl ">
              <Ban className="inline-block text-black" /> Assessments
            </p>

            <p className="font-sans text-blue-700 pt-2 pl-3 font-bold text-xl ">
              <Ban className="inline-block text-black" /> Access to exclusive content
            </p>

            <p className="font-sans text-blue-700 pt-2 pl-3 font-bold text-xl ">
              <Ban className="inline-block text-black" /> Downloadable content
            </p>
          </div>

          <div className="flex flex-row ">
            <div className="bg-blue-500 mt-3 p-2 text-xl  text-bold flex justify-center cursor-pointer items-center text-white  w-[100%]">
              <button className="">UPGRADE</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30vh] h-[50vh] bg-white shadow-2xl mr-7 ml-7 cursor-pointer transform transition duration-500 hover:scale-105">
        <div className="flex w-full items-center h-20 justify-center bg-green-700">
            <h2 className="text-xl text-white">STANDARD</h2>
          </div>
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-5xl">$5.99</h2>
            <p>Monthly</p>
            <h2 className="text-xl">$59.99 Annual</h2>
          </div>

          <div className="course-info flex flex-col justify-center h-[90%]">
            <p className="font-sans pt-3 pl-3 text-green-700 font-bold text-xl">
              <CircleCheckBig className="inline-block text-black" />  10+ courses
            </p>

            <p className="font-sans text-green-700 pt-2 pl-3 font-bold text-xl ">
              <CircleCheckBig className="inline-block text-black" />  Email and chat support
            </p>

            <p className="font-sans text-green-700 pt-2 pl-3 font-bold text-xl ">
              <CircleCheckBig className="inline-block text-black" />  Assessments
            </p>

            <p className="font-sans text-green-700 pt-2 pl-3 font-bold text-xl ">
              <Ban className="inline-block text-black" />  Access to exclusive content
            </p>

            <p className="font-sans text-green-700 pt-2 pl-3 font-bold text-xl ">
              <Ban className="inline-block text-black" />  Downloadable content
            </p>
          </div>

          <div className="flex flex-row ">
            <div className="bg-green-700 mt-3 p-2 text-xl  text-bold flex justify-center items-center text-white  w-[100%]">
              <button className="font-extrabold">ACTIVE</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30vh] h-[50vh] bg-white shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105">
        <div className="flex w-full items-center h-20 justify-center bg-red-700">
            <h2 className="text-xl text-white">PREMIUM</h2>
          </div>
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-5xl">$15.99</h2>
            <p>Monthly</p>
            <h2 className="text-xl">$189.99 Annual</h2>
          </div>

          <div className="course-info flex flex-col justify-center h-[90%]">
            <p className="font-sans pt-3 pl-3 text-red-700 font-bold text-xl">
              <CircleCheckBig className="inline-block text-black" />  Unlimited courses
            </p>

            <p className="font-sans text-red-700 pt-2 pl-3 font-bold text-xl ">
              <CircleCheckBig className="inline-block text-black" />  Email and chat support
            </p>

            <p className="font-sans text-red-700 pt-2 pl-3 font-bold text-xl ">
              <CircleCheckBig className="inline-block text-black" />  Assessments
            </p>

            <p className="font-sans text-red-700 pt-2 pl-3 font-bold text-xl ">
              <CircleCheckBig className="inline-block text-black" />  Access to exclusive content
            </p>

            <p className="font-sans text-red-700 pt-2 pl-3 font-bold text-xl ">
              <CircleCheckBig className="inline-block text-black" />  Downloadable content
            </p>
          </div>

          <div className="flex flex-row ">
            <div className="bg-red-700 mt-3 p-2 text-xl  text-bold flex justify-center items-center text-white  w-[100%]">
              <button className="font-extrabold">UPGRADE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSubscriptions;
