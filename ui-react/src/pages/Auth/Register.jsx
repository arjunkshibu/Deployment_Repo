import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          name,
          email,
          phone,
          password,
        }
      );
      if (response.status === 200) {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while registering. Please try again.");
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center gap-0 flex-row justify-center h-screen font-Montserrat">
        <div className="flex flex-col items-center justify-evenly  custom-box-shadow min-h-[35rem] min-w-[20rem] md:min-h-[45rem] md:min-w-[27rem]">
          <h1 className="h-1/4 text-black flex text-3xl md:text-5xl">
            Register
          </h1>
          <div className="h-3/4 flex flex-col items-center justify-center md:gap-10 gap-7">
            <fieldset>
              <legend className="text-black">Full Name</legend>
              <label className="text-black">
                <input
                  className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white text-black md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2 "
                  placeholder="Type your full name"
                  value={name}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>
            </fieldset>
            <fieldset>
              <legend className="text-black">Email</legend>
              <label className="text-black">
                <input
                  className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </fieldset>
            <fieldset>
              <legend className="text-black">Phone</legend>
              <label className="text-black">
                <input
                  className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </fieldset>
            <fieldset>
              <legend className="text-black">Password</legend>
              <label className="text-black">
                <input
                  type="password"
                  className="md:w-[20rem] md:h-[3rem] w-[16rem] h-[2rem] bg-white md:placeholder:text-sm placeholder:text-xs border-gray-400 border pl-2"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </fieldset>
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              className="border border-gray-400  pt-1 pb-1 pl-2 pr-2 text-sm md:p-2 hover:bg-green-700"
              onClick={handleRegister}
            >
              Register
            </button>
            <NavLink to="/login">
              <p className="font-normal">Already a User?</p>
            </NavLink>
            <p className="font-normal">Register with social accounts</p>
            <div className="flex flex-row md:space-x-4 justify-center items-center space-x-2">
              <SocialIcon
                url="https://linkedin.com"
                target="_blank"
                style={{ height: "30px", width: "30px" }}
              />
              <SocialIcon
                url="https://facebook.com"
                target="_blank"
                style={{ height: "30px", width: "30px" }}
              />
              <SocialIcon
                url="https://google.com"
                target="_blank"
                style={{ height: "30px", width: "30px" }}
              />
            </div>
          </div>
        </div>
        <div className=" hidden h-[35rem] w-[20rem]  md:block md:min-h-[45rem] md:min-w-[27rem] custom-box-shadow bg-cyan-900 bg-cover bg-center text-white whitespace-normal">
          <div className="relative top-1/4 w-full h-[50%] bg-gray-800">
            <div className="flex items-center  flex-col">
              <h2 className="flex items-center justify-center whitespace-normal pt-5 text-[1.6rem] text-lime-500">
                Find the perfect course for you.
              </h2>
              <div className=" p-7 flex gap-3 flex-col text-xl">
                <p className=" font-bold">&#8226; 2000+ Courses Offered</p>
                <p className=" font-bold">&#8226; 100+ Universities</p>
                <p className="font-bold">&#8226; 75,000+ Students Placed</p>
                <p className="text-red-500">Our track record speaks volumes!</p>
                <p className="text-cyan-400">
                  Sign up now and take the first step towards achieving your
                  academic and career goals!"
                </p>
              </div>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Register;
