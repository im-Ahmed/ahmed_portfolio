import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { data } from "../data/data.js";

const Projects = () => {
  return (
    <div
      name="work"
      className="w-full min-h-screen text-gray-300  bg-[#0a192f] pt-16 flex justify-center items-center"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-700">
            Work
          </p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* grid items */}
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="shadow-lg shadow-[#040c16] max-w-[450px] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0  group-hover:opacity-100">
                <span className="text-2xl font-bold text-white flex justify-center align-center tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
