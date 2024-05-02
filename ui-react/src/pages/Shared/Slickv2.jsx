
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev" onClick={onClick} >
        Previous
      </button>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next" onClick={onClick}>
        Next
      </button>
    );
  };

function Slickv2() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  
  
  return (
    <div className="w-full md:w-[65%] m-auto  z-20">
      <div className="text-black md:text-4xl pb-6">New courses &#x21D2;</div>
      <Slider {...settings}>
        {data.map((d) => (
          <div
            key={d.name}
            className="bg-white md:h-[480px] h-[300px] border text-black "
          >
            <div className="md:h-56 h-[105px] bg-white flex justify-center text-center pt-4 md:items-center">
              <img
                src={d.img}
                alt=""
                className="md:h-44 md:w-50 h-20 w-30"
              />
            </div>

            <div className="flex flex-col items-center text-center justify-center md:h-[200px] h-[150px] p-11">
              <p className="md:text-[18px] text-[12px] font-semibold">
                {d.name}
              </p>
              <p className="text-center text-[11px] md:text-base ">
                {d.review}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Instructor: {d.instructor}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-indigo-900 text-white md:text-lg w-1/3 text-sm px-6 py-1 hover:bg-indigo-800">
                $29.99
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}const data = [
    {
      name: "Fundamentals of Quantum Theory",
      img: "/src/assets/img/physics-6936704_640.jpg",
      review:
        "An in-depth exploration into the intricate principles and phenomena underlying the quantum world.",
      instructor: "Dr. John Smith",
    },
    {
      name: "Game Development with Unity",
      img: '/src/assets/img/unity.jpg',
      review:
        " A comprehensive course designed to enhance the skills and knowledge needed to develop games using the Unity game engine.",
      instructor: "Prof. Emily Brown",
    },
    {
      name: "Strategic Marketing Analytics",
      img: "/src/assets/img/pngtree-d-rendering-of-seo-optimization-stock-trading-data-analysis-and-web-image_3646327.jpg",
      review:
        "A strategic approach to harnessing data analytics in marketing to stay ahead  in today's competitive business landscape.",
      instructor: "Dr. Michael Johnson",
    },
    {
      name: "Advanced Astrophysics",
      img: "/src/assets/img/astrophysics.jpg",
      review:
        "Delves into cutting-edge research and theories in astrophysics, to unravel the deepest mysteries and expand the boundaries of human understanding.",
      instructor: "Prof. Sarah Davis",
    },
    {
      name: "Machine Learning Foundations",
      img: "/src/assets/img/mlf.png",
      review:
        "An introductory course covering the fundamental concepts and algorithms of machine learning.",
      instructor: "Dr. Mark Wilson",
    },
    {
      name: "Digital Photography Masterclass",
      img: "/src/assets/img/digital-photography.jpg",
      review:
        "Learn the art and science behind capturing stunning photographs with this comprehensive masterclass.",
      instructor: "Prof. Jessica Lee",
    },
    {
      name: "Web Development Bootcamp",
      img: "/src/assets/img/web-development.jpg",
      review:
        "Get hands-on experience in building dynamic and responsive websites from scratch in this intensive bootcamp.",
      instructor: "Dr. Andrew Clark",
    },
    {
      name: "Introduction to Artificial Intelligence",
      img: "/src/assets/img/artificial-intelligence.jpg",
      review:
        "Explore the fundamentals of artificial intelligence and its applications in various domains.",
      instructor: "Prof. Samantha Green",
    },
    {
      name: "Mobile App Development Essentials",
      img: "/src/assets/img/mobile-app-development.jpeg",
      review:
        "Learn the essential skills and techniques required to develop mobile applications for iOS and Android platforms.",
      instructor: "Dr. Robert White",
    },
    {
      name: "Data Science for Business",
      img: "/src/assets/img/data-science.jpg",
      review:
        "Discover how data science can be used to drive business decisions and gain a competitive edge in the market.",
      instructor: "Prof. Olivia Johnson",
    },
    {
      name: "Creative Writing Workshop",
      img: "/src/assets/img/creative-writing.png",
      review:
        "Unlock your creative potential and express yourself through the art of writing in this interactive workshop.",
      instructor: "Dr. Ethan Parker",
    },
    {
      name: "Blockchain Fundamentals",
      img: "/src/assets/img/blockchain.png",
      review:
        "Gain a deep understanding of blockchain technology and its transformative potential in various industries.",
      instructor: "Prof. Madison Turner",
    },
    {
      name: "Financial Planning and Investment Strategies",
      img: "/src/assets/img/financial-planning.jpg",
      review:
        "Learn how to effectively manage finances and make informed investment decisions for a secure financial future.",
      instructor: "Dr. Christopher Roberts",
    },
    {
      name: "User Experience Design Fundamentals",
      img: "/src/assets/img/ux-design.png",
      review:
        "Explore the principles and methodologies of user experience design to create intuitive and engaging digital experiences.",
      instructor: "Prof. Lauren Adams",
    },
    {
      name: "Artificial Neural Networks",
      img: "/src/assets/img/neural-networks.jpg",
      review:
        "Delve deeper into the workings of artificial neural networks and understand their applications in machine learning and artificial intelligence.",
      instructor: "Dr. William Harris",
    },
    {
      name: "Digital Marketing Strategies",
      img: "/src/assets/img/digital-marketing.jpg",
      review:
        "Master the latest digital marketing techniques and strategies to effectively promote products and services in the digital landscape.",
      instructor: "Prof. Ashley Martinez",
    },
    {
      name: "Introduction to Cloud Computing",
      img: "/src/assets/img/cloud-computing.jpg",
      review:
        "Discover the fundamentals of cloud computing and learn how to leverage cloud services for scalable and cost-effective solutions.",
      instructor: "Dr. Benjamin Carter",
    },
    {
      name: "Cybersecurity Essentials",
      img: "/src/assets/img/cybersecurity.jpg",
      review:
        "Understand the essential concepts of cybersecurity and learn practical techniques to protect data and systems from cyber threats.",
      instructor: "Prof. Daniel Wilson",
    },
    {
      name: "Natural Language Processing",
      img: "/src/assets/img/natural-language-processing.jpg",
      review:
        "Explore the field of natural language processing and its applications in text analysis, sentiment analysis, and language translation.",
      instructor: "Dr. Sophia Adams",
    },
    {
      name: "iOS App Development with Swift",
      img: "/src/assets/img/ios-development.jpg",
      review:
        "Learn to build native iOS applications using the Swift programming language and Apple's development tools.",
      instructor: "Prof. Jacob Brown",
    },
  ];
  
  export default Slickv2;
  