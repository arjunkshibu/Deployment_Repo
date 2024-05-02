import React, { useEffect } from "react";
import TopBar from "../../components/User/TopBar";
import Footer from "../../components/User/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slick from "./Slick";
import { Link } from "react-router-dom";
import google from "../../assets/img/google.png";
import samsung from "../../assets/img/samsung.png";
import microsoft from "../../assets/img/microsoft.png";
import audi from "../../assets/img/audi.png";
import sony from "../../assets/img/sony.png";
import siemens from "../../assets/img/siemens.png";
import oracle from "../../assets/img/oracle.png";
import asus from "../../assets/img/asus.png";
import jeep from "../../assets/img/jeep.png";
import activision from "../../assets/img/activision.png";
import girl from "../../assets/img/outdoors2.jpg";
import LaptopIcon from "@mui/icons-material/Laptop";
import GroupIcon from "@mui/icons-material/Group";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import laptopic from "../../assets/img/5972.jpg";
import { ClipboardCheck } from "lucide-react";
import man1 from "../../assets/img/stefan.jpg";
import woman2 from "../../assets/img/karolina.jpg";
import woman1 from "../../assets/img/woman1.jpg";

const Home = () => {
 
  return (
    <>
      <div className="bg-bg-girl-w bg-center bg-cover z-40 bg-fixed font-Montserrat overflow-hidden">
        <TopBar />

        <section className="relative flex flex-col items-center justify-center h-screen z-10">
          <div className="flex flex-col items-center justify-center h-full  gap-4">
            <h1 className="md:text-7xl text-white text-center font-Montserrat text-3xl md:text-wrap text-balance md:pt-16 pt-24">
              Explore Your Education Options!
            </h1>
            <p className="md:text-xl text-balance text-center font-Montserrat text-white">
              Discover courses tailored to your present and future needs. Sign
              up and Start your educational journey with us.
            </p>
            <Link to="/Register">
              <button className="md:py-2 md:px-3 py-1 px-2 text-sm md:text-lg border text-black bg-white hover:bg-slate-300 ">
                EXPLORE
              </button>
            </Link>
          </div>
          <Slick />
        </section>
        <section className="bg-white  h-screen w-screen">
          <div className="w-full h-1/3 flex flex-col bg-slate-300 bg-opacity-45">
            <div className="flex w-full justify-center pt-11">
              <h1 className="text-3xl">OUR MAJOR RECRUITERS</h1>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className=" flex flex-row items-center gap-6 ">
                <img
                  src={google}
                  alt="google"
                  style={{ height: "140px", width: "140px" }}
                />
                <img
                  src={samsung}
                  alt="samsung"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={microsoft}
                  alt="microsoft"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={audi}
                  alt="audi"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={sony}
                  alt="sony"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={siemens}
                  alt="siemens"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={oracle}
                  alt="oracle"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={asus}
                  alt="asus"
                  style={{ height: "150px", width: "150px" }}
                />
                <img
                  src={jeep}
                  alt="jeep"
                  style={{ height: "140px", width: "140px" }}
                />
                <img
                  src={activision}
                  alt="activision"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
            </div>
            <div className="flex w-full justify-center pb-9">
              <h1 className="text-2xl">and many more..</h1>
            </div>
          </div>
          <div className="h-2/3 w-full flex border-b justify-center items-center">
            <div className="w-1/3 h-full flex flex-col border-l  gap-7 p-8">
              <h4 className="text-4xl text-blue-700">Engage</h4>
              <p className="text-xl w-[600px]">
                Immerse yourself in a dynamic learning environment where
                knowledge comes alive through captivating video lectures,
                interactive simulations, and immersive multimedia experiences.
              </p>
              <h4 className="text-4xl text-orange-700">Practice</h4>
              <p className="text-xl w-[600px]">
                Master your skills through hands-on practice sessions, quizzes,
                and real-world simulations. Reinforce your understanding and
                demonstrate your expertise through a variety of assessment
                methods designed to enhance your learning journey.
              </p>
              <h4 className="text-4xl text-green-800">Apply</h4>
              <p className="text-xl w-[600px]">
                Unlock your full potential and translate your knowledge directly
                into real-world. Our practical approach ensures that you can
                immediately apply what you learn to foster growth and success
              </p>
            </div>
            <div className=" w-1/3 h-full ">
              <img src={girl} />
            </div>
          </div>
        </section>
        <section className="h-screen w-screen flex flex-col justify-center bg-slate-500 bg-opacity-40">
          <div className="h-1/2 w-full flex flex-row bg-syn-purple">
            <div className="h-full w-1/2 bg-white">
              <img src={laptopic} alt="laptop" className="h-fit" />
            </div>
            <div className="w-1/2 p-6 flex flex-col gap-11 justify-center">
              <p className="text-5xl font-Scania text-green-100">
                <GroupIcon
                  className="inline-block mr-4"
                  fontSize="36"
                  style={{ color: "cyan" }}
                />
                50000+ Students
              </p>

              <p className="text-5xl font-Scania text-green-100">
                <LaptopIcon
                  className="inline-block mr-4"
                  fontSize="36"
                  style={{ color: "red" }}
                />
                Over 500+ Courses
              </p>

              <p className="text-5xl font-Scania text-green-100">
                <WorkspacePremiumIcon
                  className="inline-block mr-4"
                  fontSize="36"
                  style={{ color: "yellow" }}
                />
                Global Certifications
              </p>
            </div>
          </div>
          <div className="h-1/2 bg-white flex flex-col items-center">
            <h2 className="mt-5 text-3xl">
              Explore what our users are saying!
            </h2>
            <div className="w-full h-full flex flex-row justify-center items-center gap-24">
              <div className="flex flex-col h-[400px] w-[400px] items-center border-2 border-gray-200 p-9 ">
                <div className="h-[120px] w-[120px] bg-yellow-300 rounded-full overflow-hidden flex justify-center items-center">
                  <img
                    src={man1}
                    alt="Profile Image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center text-xl mt-4">Stefan</div>
                <div className="text-center text-cyan-800 mt-2">
                  "I've found the courses on Coursehunt incredibly helpful! The
                  content is well-structured, and the instructors are
                  knowledgeable. Highly recommend!"
                </div>
              </div>

              <div className="flex flex-col h-[400px] w-[400px] items-center border-2 border-gray-200 p-9 ">
                <div className="h-[120px] w-[120px] bg-yellow-300 rounded-full overflow-hidden flex justify-center items-center">
                  <img
                    src={woman1}
                    alt="Profile Image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center text-xl mt-4">Judith</div>
                <div className="text-center text-cyan-800 mt-2">
                  "Coursehunt has been a game-changer for me. The variety of
                  courses available cater to every interest, and the interactive
                  learning experience makes it engaging and enjoyable."
                </div>
              </div>

              <div className="flex flex-col h-[400px] w-[400px] items-center border-2 border-gray-200 p-9 ">
                <div className="h-[120px] w-[120px] bg-yellow-300 rounded-full overflow-hidden flex justify-center items-center">
                  <img
                    src={woman2}
                    alt="Profile Image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center text-xl mt-4">Katy</div>
                <div className="text-center text-cyan-800 mt-2">
                  "The instructors on Coursehunt are top-notch. They provide
                  clear explanations and practical examples, making complex
                  topics easy to understand. I've already seen the benefits in
                  my work."
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
