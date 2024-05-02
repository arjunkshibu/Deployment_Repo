import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Badge, BadgeCheck, Check } from "lucide-react";

function Slick() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="md:w-[80%] h-full shadow-2xl pb-24 z-40">
      <div className="text-white md:text-4xl pb-12">
        Latest on Course Hunt &#x21D2;
      </div>
      <Slider {...settings}>
        {data.map((d) => (
          <div
            key={d.name}
            className="bg-white md:h-[400px] h-[300px] border text-black relative"
          >
            <div className="md:h-56 h-[105px] bg-white flex justify-center text-center pt-4 md:items-center">
              <img src={d.img} alt="" className="md:h-44 md:w-50 h-20 w-30" />
            </div>
            <div className="flex flex-col items-center  text-center justify-center md:h-[120px] h-[100px]">
              <p className="md:text-[18px] text-[12px] font-semibold">
                {d.name}
              </p>
              <p className="text-center text-[11px] md:text-lg">
                By: {d.instructor}
              </p>
              {d.price !== "FREE" ? (
                <div className="flex items-center">
                  <BadgeCheck />
                  <p className="ml-1">Professional Certification</p>
                </div>
              ) : (
                <div className="flex items-center">
                <Check/>
                <p>Completion Certificate</p>
                </div>

              )}
            </div>
            <div className="flex justify-center flex-row items-center gap-9">
              <NavLink to="/register">
                <button className="bg-blue-700 w-full text-white md:text-lg text-sm px-6 py-1 hover:bg-indigo-800">
                  Enroll
                </button>
              </NavLink>
              <p
                className={`text-center text-xl ml-2 ${
                  d.price === "FREE"
                    ? "text-green-500 font-semibold"
                    : "text-blue-600 font-semibold"
                }`}
              >
                {d.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    name: "Fundamentals of Quantum Theory",
    img: "/src/assets/img/physics-6936704_640.jpg",
    instructor: "Tom Downey",
    price: "FREE", // Add the price field here
  },
  {
    name: "Game Development with Unity",
    img: "/src/assets/img/unity.jpg",
    instructor: "Zakaria James",
    price: "$129.99", // Add the price field here
  },
  {
    name: "Strategic Marketing Analytics",
    img: "/src/assets/img/pngtree-d-rendering-of-seo-optimization-stock-trading-data-analysis-and-web-image_3646327.jpg",
    instructor: "Claire Anderson",
    price: "$79.99", // Add the price field here
  },
  {
    name: "Advanced Astrophysics",
    img: "/src/assets/img/astrophysics.jpg",
    instructor: "Sheena Franklin",
    price: "$149.99", // Add the price field here
  },
];

export default Slick;
