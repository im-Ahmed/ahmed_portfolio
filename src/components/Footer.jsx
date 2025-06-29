import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-300 w-full h-[8vh] flex justify-between px-12 items-center text-black font-bold ">
      <div className="blank"></div>
      <div>&copy; 2025 Ahmed. All rights reserved.</div>
      <div className="flex gap-4">
        <span className="flex justify-center items-center py-4 bg-blue-600 text-gray-300 w-[40px] h-[40px] rounded-[50%]">
          <a
            href="https://www.linkedin.com/in/ahmed-farooq-09a6b2304/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </span>
        <span className="flex justify-center items-center py-4 bg-[#333333] text-gray-300 w-[40px] h-[40px] rounded-[50%]">
          <a
            href="https://github.com/im-Ahmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
