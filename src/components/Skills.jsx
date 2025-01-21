import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Git from "../assets/git.png";
import GPT from "../assets/gpt.png";
import Redux from "../assets/redux.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full sm:h-screen sm:pt-6 pt-14  bg-[#0a192f] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-pink-700">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={HTML} alt="Html icon" />
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={CSS} alt="css icon" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-2"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="py-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-2"
              src={ReactImg}
              alt="react icon"
            />
            <p className="py-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={Git} alt="Html icon" />
            <p className="py-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={GitHub} alt="github icon" />
            <p className="py-4">GItHub</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={Tailwind} alt="Html icon" />
            <p className="py-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-2" src={Redux} alt="Html icon" />
            <p className="py-4">Redux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
