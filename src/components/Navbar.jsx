import React, { useState } from "react";
import logo from "../assets/af.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <img src={logo} alt="logo image" style={{ width: "100px" }} />
      </div>
      {/* menu */}
      <ul className="hidden ms:flex">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hambugger */}
      <div
        onClick={handleClick}
        className="ms:hidden text-2xl z-10 cursor-pointer"
      >
        {!nav ? <FaBars /> : ""}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 h-screen sm:w-[35%] w-full flex flex-col justify-center sm:items-baseline items-center  bg-[#0a192f]/60 backdrop-blur-lg border border-white/10  p-6"
        }
      >
        <li className="top-4 right-0 absolute text-2xl">
          <Link onClick={handleClick}>
            <FaTimes />
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social media-icons */}
      <div className="hidden xs:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600 font-bold">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ahmed-farooq-09a6b2304/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333333] font-bold">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/im-Ahmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#1d5c4f] font-bold">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:ahmedfarooqim3@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#565f69] font-bold">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/cv.pdf"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
