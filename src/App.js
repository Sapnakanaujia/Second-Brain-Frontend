import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutTeam from "./components/AboutTeam";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";
import FilmmakingSection from "./components/FilmmakingSection";
import BrandingSection from "./components/BrandingSection";
import ArtCultureSection from "./components/ArtCultureSection";


function App() {
  return (
    <>
      <Navbar />
        <section id="their-stories">
          <HeroSection />
        </section>
        <section id="our-story">
      <AboutTeam />
      <AboutUs />
      </section>
       <section id="services">
      <ServicesSection />
      </section>

      <section id="filmmaking">
        <FilmmakingSection />
         <BrandingSection />
      <ArtCultureSection />
      </section>
     
    <section id="contact">
      <Contact />
      </section>
    </>
  );
}

export default App;
