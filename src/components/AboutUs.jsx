// AboutUs.jsx
import React from "react";
import bg from "../assets/bg.png";
import noteImg from "../assets/note.png";
import tedImg from "../assets/ted.png";
import objectsImg from "../assets/OBJECTS.png";
import stat85 from "../assets/85.png";
import stat50 from "../assets/50.png";
import stat10 from "../assets/10.png";

export default function AboutUs() {
  return (
    <section
    className="min-h-screen contact-bg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* light overlay to increase contrast */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "rgba(255,250,248,0.72)", mixBlendMode: "normal" }}
      />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* ---------- LEFT COLUMN ---------- */}
          <div className="flex flex-col justify-center px-4 lg:px-12 py-8">
            <h2 className="text-3xl lg:text-2xl text-[#13232e] mb-6 text-center lg:text-left">
              A montage of familiar faces and names.
            </h2>

            <p className="text-sm sm:text-base text-gray-700 max-w-md mx-auto lg:mx-0 lg:text-left leading-relaxed">
              Some stories come from the biggest names. Others begin with bold, rising voices.
              We've been fortunate to walk alongside both — listening, creating, and building stories that matter.
            </p>

            {/* Stats group */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-start ">
               <RotatedCard src={stat85} altText="85+ Happy Clients" rotate={6}  z={10} />
              <RotatedCard src={stat50} altText="50+ Happy Clients" rotate={6}  z={10} />
               <RotatedCard src={stat10} altText="10+ Happy Clients" rotate={6}  z={10} />
            </div>
          </div>

          {/* ---------- RIGHT COLUMN ---------- */}
          <div className="relative px-4 lg:px-12 py-8 flex items-start lg:items-stretch justify-center">
            {/* container to control layout of note, ted and objects */}
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl relative h-[520px] lg:h-[640px]">
              {/* NOTE image - top area (keeps natural size, centered horizontally) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-6 lg:top-10 w-11/12 lg:w-full">
                <img
                  src={noteImg}
                  alt="Quote and mountain artwork"
                  className="w-full h-auto object-contain block mx-auto"
                  style={{ filter: "contrast(1.02)" }}
                />
              </div>

              {/* TED logo - placed slightly below the note, centered (absolute) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[42%] lg:top-[46%] z-30 pointer-events-none">
                <img src={tedImg} alt="TED" style={{width:"1024px"}} className="w-20 sm:w-24 lg:w-50 mx-auto" />
                <img
                  src={objectsImg}
                  alt="decorative objects"
                  className="w-full h-auto object-contain block"
                  style={{ opacity: 0.98 }}
                />
              </div>

              {/* OBJECTS image (circular logos / mountain bottom) - anchored to bottom-right
                  adjust right/translate to match composition. */}
             
            </div>
          </div>
        </div>

        {/* center divider */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-[#F4A98B] rounded" />
        </div>
      </div>
    </section>
  );
}

/* ---------- RotatedCard ---------- */
function RotatedCard({ src, altText = "", rotate = 0, translateX = 0, z = 10 }) {
  // For simplicity we apply rotation only on large screens (so mobile stays readable).
  // Use matchMedia only if window exists (SSR-safe check).
  const isDesktop = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(min-width:1024px)").matches;
  const rot = isDesktop ? rotate : 0;
  const style = {
    transform: `rotate(${rot}deg) translateX(${translateX}px)`,
    zIndex: z,
    transition: "transform 220ms ease, box-shadow 220ms ease",
    willChange: "transform",
    display: "block",
  };

  return (
    <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex-shrink-0 mx-auto sm:mx-0">
      {/* shadow base */}
      <div
        className="absolute inset-0 rounded-md"
        style={{
          background: "rgba(0,0,0,0.06)",
          filter: "blur(8px)",
          transform: "translateY(8px)",
          zIndex: z - 1,
        }}
        aria-hidden
      />
      <img src={src} alt={altText} className="w-full h-full object-contain rounded-md block" style={style} />
    </div>
  );
}
