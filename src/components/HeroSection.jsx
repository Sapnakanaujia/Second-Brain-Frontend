import React from "react";
import logo from "../assets/logo.png"; // Update with your logo path
import Mandana from "../assets/HeroMandala.png"; // Update with your mandala image path
import bg from "../assets/bg.png"; // Update with your background image path
import heading from "../assets/heading.png"; // Update with your heading image path


export default function HeroSection() {

  return (
    
    <div
    
      className="min-h-screen contact-bg flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: `url(${bg})`,
       
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center">
        {/* Left Section: Mandala and Logo */}
        <div className="relative flex items-center justify-center">
          <img
            src={Mandana}
            alt="Mandala"
            className="w-[430px] md:w-[400px] opacity-90"
          />
          <img
            src={logo}
            alt="VFilms Logo"
            className="absolute w-[170px] md:w-[200px]"
          />
        </div>

        {/* Right Section: Heading, Tagline, and Description */}
        <div className="text-center md:text-left">
          <img src={heading} alt="Heading" className="w-full mb-6" />
          <p className="text-[#C45A39] text-xl tracking-wide mb-6 text-center">
            Films . Brands . Art
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-md text-center m-14">
            Since 2009, V has been telling stories - stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way - by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories - V honors them.
          </p>
        </div>
      </div>
    </div>
  );
}
