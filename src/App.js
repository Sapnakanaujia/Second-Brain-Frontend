import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#fff8f4] text-gray-800 font-serif relative overflow-hidden">
      {/* Background Texture / Mandala */}
      <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mandala.svg/2048px-Mandala.svg.png"
          alt="mandala"
          className="w-[600px] md:w-[700px]"
        />
      </div>

      {/* Navbar (Right-Aligned) */}
      <nav className="flex justify-end items-center px-12 py-6 bg-white/70 backdrop-blur-sm fixed w-full top-0 z-10">
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <li className="hover:text-orange-500 cursor-pointer">Services</li>
          <li className="hover:text-orange-500 cursor-pointer">Their Stories</li>
          <li className="hover:text-orange-500 cursor-pointer">Our Story</li>
          <li className="hover:text-orange-500 cursor-pointer">Varnan</li>
          <li>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
              Let’s Talk ✉️
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-40 md:pt-48 pb-20 text-center md:text-left relative z-10">
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
            <span className="text-orange-500">V</span> Films
          </h1>
        </div>

        {/* Right: Text Content */}
        <div className="max-w-xl text-gray-700 mt-10 md:mt-0">
          <h2
            className="text-3xl md:text-4xl italic text-[#1f2b3e] font-light leading-relaxed mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Varnan is where stories find their <br /> voice and form
          </h2>

          <p className="text-lg text-orange-600 font-medium tracking-wide mb-4">
            Films . Brands . Art
          </p>

          <p className="text-sm text-gray-600 leading-relaxed">
            Since 2009, V’ve been telling stories — stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way — by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories — V honors them.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
