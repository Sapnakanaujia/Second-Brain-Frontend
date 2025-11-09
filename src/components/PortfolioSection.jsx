import React from "react"; // Import your portfolio image
import CamGroupImage from "../assets/Cam Group.svg"; // Import your camera group image
import YouTubeImage from "../assets/YouTube.jpg"; // Import the YouTube image
import FooterImage from "../assets/Footer Vector.svg"; // Import the footer vector image
import BackgroundImage from "../assets/bg.png"; // Import the background image

const Portfolio = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        paddingBottom: "50px",
        color: "#333",
      }}
    >
      <section style={{ padding: "50px 0" }}>
        <h2 style={{ color: "#fff" }}>The Highlight Reel</h2>
        <p style={{ color: "#fff" }}>Watch the magic we've captured.</p>
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={YouTubeImage}
              alt="YouTube Play"
              style={{ width: "100px", cursor: "pointer" }}
            />
          </div>
        </div>
      </section>

      <section>
        <h3 style={{ color: "#fff" }}>Camera Crew</h3>
        <img
          src={CamGroupImage}
          alt="Camera Crew"
          style={{ width: "20%", marginTop: "20px" }}
        />
      </section>

      <footer
        style={{
          background: `url(${FooterImage}) no-repeat center`,
          backgroundSize: "cover",
          padding: "20px",
          color: "#fff",
        }}
      >
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
