import React, { useState } from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import closeIcon from "../assets/Vector.png";
import HeroSection from "./HeroSection";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
  <div
      className="min-h-screen contact-bg"
      style={{ backgroundImage: `url(${bg})` }}
    >
    <nav className="fixed top-0 left-0 w-full  shadow-sm z-50" >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16" >

        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
       <ul className="hidden md:flex items-center space-x-8 text-gray-800">
  <li>
    <a href="#services" className="hover:text-orange-600 transition-colors duration-200">
      Services
    </a>
  </li>
  <li>
    <a href="#their-stories" className="hover:text-orange-600 transition-colors duration-200">
      Their Stories
    </a>
  </li>
  <li>
    <a href="#our-story" className="hover:text-orange-600 transition-colors duration-200">
      Our Story
    </a>
  </li>
  <li>
    <a href="#services" className="hover:text-orange-600 transition-colors duration-200">
      Varnan
    </a>
  </li>
  <li>
    <a href="#contact">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200">
        Let’s Talk ✉️
      </button>
    </a>
  </li>
</ul>


        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center focus:outline-none"
        >
          <img
            src={closeIcon}
            alt="Menu"
            className={`h-6 w-6 transition-transform duration-300 ${
              menuOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-4 pb-6">
          <ul className="flex flex-col space-y-4 text-gray-800">
            <li className="cursor-pointer hover:text-orange-600">Services</li>
            <li className="cursor-pointer hover:text-orange-600">Their Stories</li>
            <li className="cursor-pointer hover:text-orange-600">Our Story</li>
            <li className="cursor-pointer hover:text-orange-600">Varnan</li>
            <li>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full w-full">
                Let’s Talk ✉️
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  </div>
  );
};


export default Navbar;
