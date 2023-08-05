import React from "react";
import "./LandingPage.css";
import heroVideo from "../../Images/heroVideo.mp4";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <div className="hero-container">
      <video src={heroVideo} autoPlay loop muted />
      <div className="content-container">
        <h1 className="title">بِحُب ... صنعنا منتجاتنا لكم</h1>
        <p className="description">
          <span className="dukan">دكان</span> نكتشف الفن في كل يد
        </p>{" "}
        <NavLink to={`/Home`} className="card-link">
          <button className="cta-button">
            اكتشف المزيد <i class="fa-solid fa-arrow-left"></i>
          </button>
        </NavLink>{" "}
      </div>
    </div>
    </>
  );
};

export default Hero;
