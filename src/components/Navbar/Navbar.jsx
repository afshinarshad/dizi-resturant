import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import Images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="dizi__navbar">
        <div className="dizi__navbar-logo">
          <img src={Images.dizilogo} alt="dizi logo" />
        </div>
        <ul className="dizi__navbar-links">
          <li >
            <a href="#home"> Home </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#menu"> Menu </a>
          </li>
          <li>
            <a href="#awards"> Awards </a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
        <div className="dizi__navbar-login">
          <a href="#login">
            Log in / Register
          </a>
          <div />
          <a href="/" >
            Book Table
          </a>
        </div>
        <div className="dizi__navbar-smallscreen">
          <GiHamburgerMenu
            color="#ffffff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="dizi__navbar-smallscreen_overlay flex__center slide-bottom">
              <ImSpoonKnife
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="dizi__navbar-smallscreen_links">
                <li className="p__opensans">
                  <a href="#home"> Home </a>
                </li>
                <li>
                  <a href="#about"> About </a>
                </li>
                <li>
                  <a href="#menu"> Menu </a>
                </li>
                <li>
                  <a href="#awards"> Awards </a>
                </li>
                <li>
                  <a href="#contact"> Contact </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
