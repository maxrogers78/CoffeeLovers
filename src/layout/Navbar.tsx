import React from "react";
import { DotsThreeVertical } from "phosphor-react";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Specials
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>

      <button className="navbar__button">
        <DotsThreeVertical />
      </button>
    </nav>
  );
};

export default Navbar;
