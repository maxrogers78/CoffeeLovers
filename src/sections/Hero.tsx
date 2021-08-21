/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "../../public/images/logo_large.png";

const Hero = () => {
  return (
    <header className="hero">
      <img className="hero__image" src={logo.src} alt="Logo" />
      <div className="hero__title">
        <h1>
          We know you <span>love</span> it
        </h1>
      </div>
    </header>
  );
};

export default Hero;
