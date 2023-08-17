import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-[#ccd6f6]">Hi, I'm Josh nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className="text-[#8892b0]">
            Passionate, innovative, and results-driven full-stack application developer with a strong foundation in building robust and user-friendly web applications. Proficient in a wide range of technologies including React, JavaScript, Ruby on Rails, Redux, SQL databases, and RESTful API architecture. I thrive in collaborative, cross-functional teams within an agile environment and demonstrate the ability to develop and integrate effective solutions for clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
