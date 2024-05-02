import React from "react";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="h-screen items-center bg-blurBack flex justify-center overflow-hidden">
      <div className="pt-[100px] h-full overflow-hidden ">
        <section>
          <h1 className="md:text-5xl text-white flex justify-center font-Montserrat text-3xl text-wrap">
            About Us
          </h1>
          <p className="md:text-xl text-balance text-center font-Montserrat text-white pt-10">
            <h2>Welcome to CourseHunt</h2>
            <p>
              At CourseHunt, we are dedicated to providing high-quality online
              courses to learners worldwide. Founded in 2020, we have been
              serving our customers with a diverse range of educational
              resources for 4 years.
            </p>
            <h2>Our Story</h2>
            <p>
              Our journey began when our founders, Arjun and Akash, had a vision to
              make quality education accessible to everyone. With a passion for
              lifelong learning, she set out to create a company that empowers
              individuals to enhance their skills and achieve their goals.
            </p>
            <h1>What We Do</h1>
            <p>
              At CourseHunt, we specialize in offering a wide variety of courses
              spanning numerous subjects and industries. Our team of experts is
              committed to delivering innovative solutions that help learners
              acquire new knowledge, develop essential skills, and advance in
              their careers.
            </p>
            <NavLink to="/">
              <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 mt-20 rounded">
                BACK
              </button>
            </NavLink>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
