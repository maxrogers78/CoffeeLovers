import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
      if (window.scrollY !== 0) {
        navbar.classList.add("bottom");
      } else {
        navbar.classList.remove("bottom");
      }
    }
  };

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
