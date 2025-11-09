import React from "react";
import "./AboutPage.css";
import aboutnote from "../assets/aboutnote.png";
import indiagate from "../assets/indiagate.png";
import men from "../assets/men.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import arrow3 from "../assets/arrow3.png";
import filmmaker from "../assets/FilmMakers.png";
import art from "../assets/ArtCurators.png";
import branding from "../assets/BrandingExperts.png";

import bg from "../assets/bg.png";


export default function AboutPage() {
  const hideIfMissing = (e) => (e.currentTarget.style.display = "none");

  return (
    <main className="about-root">
      <div
      className="min-h-screen contact-bg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img
        src={aboutnote}
        alt="paper note"
        className="about-note"
        onError={hideIfMissing}
      />
      
      <img
        src={indiagate}
        alt="india gate"
        className="about-gate"
        onError={hideIfMissing}
      /> 
      
      <img
        src={arrow3} style={{padding:"30px"}}
        alt="arrow up"
        className="about-arrow about-arrow-up"
        onError={hideIfMissing}
      /> <br/>
      <img
        src={filmmaker}
        alt="arrow up"
        className="about-arrow about-arrow-up"
        onError={hideIfMissing}
      />
       <img
        src={arrow2} style={{padding:"30px"}}
        alt="arrow right"
        className="about-arrow about-arrow-right"
        onError={hideIfMissing}
      />
      <img
        src={arrow1}  
        alt="arrow left"
        className="about-arrow about-arrow-left"
        onError={hideIfMissing}
      />
      <img
        src={branding} style={{paddingTop:"220px",paddingleft:"200px"}} 
        alt="arrow left"
        className="about-arrow about-arrow-left"
        onError={hideIfMissing}
      />
      
      
     
      <img
        src={art}
        alt="arrow right"
        className="about-arrow about-arrow-right"
        onError={hideIfMissing}
      />

      {/* Silhouettes (center-right) */}
      <img
        src={men}
        alt="team silhouettes"
        className="about-silhouettes"
        onError={hideIfMissing}
      />

      {/* Center text + CTA */}
      <section className="about-hero">
        <h1 className="about-title">
          Take a closer look at the stories V bring to life.
        </h1>
        <button className="about-cta">View Portfolio</button>
      </section>

      <div className="about-bottom" aria-hidden="true" />
      </div>
    </main>
  );
}
