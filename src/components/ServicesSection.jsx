import React from "react";
import leftTape from "../assets/lefttap.png";
import midTape from "../assets/midtap.png";
import rightTape from "../assets/righttap.png";
import film from "../assets/fileP.png";
import brand from "../assets/mid.png";
import art from "../assets/right.png";
import border from "../assets/Frame 33.png";
import bg from "../assets/bg.png";
import FilmmakingSection from "./FilmmakingSection";

export default function ServicesSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center mb-10">
        <h2 className="text-[#1C1C1C] text-xl md:text-2xl relative inline-block">
          The storyboard reveals the breadth of our craft.
          <span className="block h-[3px] bg-[#15324C] mt-2 w-[80%] mx-auto" style={{ transform: 'skewX(-10deg)' }}></span>
        </h2>
      </div>

      {/* Card container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-0">
        {/* Film Production */}
        <div className="relative transform rotate-[-3deg]">
          <a href="#filmmaking">
                <img src={leftTape} alt="Tape" className="absolute -top-6 left-8 w-32" />
          <div className=" p-4 pb-2 border border-gray-200">
            <img src={film} alt="Film Production" className="w-72 md:w-80" />
          </div>
          </a>
        </div>
        
        {/* Branding */}
        <div className="relative transform rotate-[1deg]">
          <img src={midTape} alt="Tape" className="absolute -top-6 left-10 w-32" />
          <div className=" p-4 pb-2 border border-gray-200">
            <img src={brand} alt="Branding" className="w-72 md:w-80" />
          </div>
        </div>

        {/* Art Curation */}
        <div className="relative transform rotate-[3deg]">
          <img src={rightTape} alt="Tape" className="absolute -top-6 left-10 w-32" />
          <div className=" p-4 pb-2 border border-gray-200">
            <img src={art} alt="Art Curation" className="w-72 md:w-80" />
          </div>
        </div>
      </div>

      {/* Decorative border at bottom */}
      <div className="mt-12 w-full">
        <img src={border} alt="Decorative border" className="w-full" />
      </div>
    </section>
  );
}
