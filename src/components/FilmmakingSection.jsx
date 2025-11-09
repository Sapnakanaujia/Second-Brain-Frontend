import React from "react";
import bg from "../assets/bg.png";
import polaroidImg from "../assets/file.png"; // main studio photo
import cam1 from "../assets/Camera 01.png";
import cam2 from "../assets/Camera 02.svg";
import cam3 from "../assets/Camera 03.svg";
import cam4 from "../assets/Camera 04.png";

export default function FilmmakingSection() {
  return (
    <section
      className="relative py-12 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Quote at top */}
      <div className="max-w-6xl mx-auto text-center mb-6">
        <h3 className="text-2xl md:text-2xl  text-[#1C1C1C]">"Filmmaking is a chance to live many lifetimes." - Robert Altman</h3>
        <div className="mt-3 w-64 mx-auto h-3" style={{ background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 10\'\%3E%3Cpath d=\'M0 6c30-8 120-10 200-6s150 2 200-2\' stroke=%22%2315334C%22 stroke-width=3 fill=%22none%22 stroke-linecap=\'round\'/%3E%3C/svg%3E") no-repeat center/contain' }} />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT - Polaroid card */}
        <div className="flex justify-center md:justify-start">
          <div className="relative" style={{ width: 320 }}>
            <div className="p-3">
              <img src={polaroidImg} alt="Film Production" className="w-full h-72 object-cover"/>
            </div>
            {/* rotated subtle shadow */}
            <div className="absolute -inset-1 transform -rotate-1 rounded-lg pointer-events-none" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.35)', zIndex: -1 }} />
          </div>
        </div>

        {/* RIGHT - Text content and list */}
        <div className="pl-0 md:pl-5">

          <div className="text-[#1C1C1C] text-base md:text-lg leading-relaxed max-w-xl">
            <p className="mb-4">Who says films are just an escape? <br />We see them as a way to live many lives - to feel, to explore, and to tell stories that stay.
            </p>
            <p className="mb-4">And with each film, we carry new memories and new reasons to keep creating. V crafts:</p>

            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D Animation Videos</li>
              <li>3D Animation Videos</li>
            </ul>

            <div className="mt-8">
              <a href="#" className="inline-flex items-center text-[#C45A39] font-medium">
                Explore Now
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3">
                  <path d="M0 12H38" stroke="#C45A39" strokeWidth="4" strokeLinecap="round" />
                  <path d="M34 6L42 12L34 18" stroke="#C45A39" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative camera icons placed absolutely */}
      <img src={cam1} alt="cam1" className="hidden md:block absolute left-8 bottom-36 w-12 opacity-90" />
      <img src={cam2} alt="cam2" className="hidden md:block absolute right-10 top-40 w-14 opacity-90" />
      <img src={cam3} alt="cam3" className="hidden md:block absolute right-8 bottom-40 w-14 opacity-90" />
      <img src={cam4} alt="cam4" className="hidden md:block absolute left-24 top-64 w-16 opacity-90" />

      <style jsx>{`
        /* serif font for headings and captions */
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }

        /* small responsive tweaks */
        @media (max-width: 767px) {
          section { padding-top: 28px; padding-bottom: 28px; }
          .font-serif { font-size: 16px; }
        }

      `}</style>
    </section>
  );
}
