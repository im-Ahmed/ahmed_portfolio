import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen sm:pt-[60px] bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 sm:px-10 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-xl">Hi, I'm</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Ahmed Farooq
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          Specializing in creating (and occasionally designing) exceptional
          digital experiences. Currently, my focus is on building responsive,
          user-friendly web applications.
        </p>
        <div className="flex gap-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group sm:px-6 px-4 sm:py-3 py-2 my-2 border-2 flex  items-center sm:hover:bg-pink-700 active:bg-pink-700">
              View Work
              <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 duration-150" />
            </button>
          </Link>
          <button className="text-white sm:px-6 px-4 sm:py-3 py-2 my-2 border-2 sm:hover:bg-pink-700 active:bg-pink-700 xs:hidden">
            <a href=".\cv.pdf" target="_blank" className="flex gap-3">
              <BsFillPersonLinesFill size={20} /> Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
