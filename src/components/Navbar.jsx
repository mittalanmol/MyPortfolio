import React from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Navbar() {
  return (
    <div className='navDiv'>
      <nav id='desktop-nav'>
        <div data-aos='fade-down' class='logo'>
          Anmol Mittal
        </div>
        <div>
          <ul class='nav-links'>
            <li data-aos='fade-down' data-aos-delay='200'>
              <a href='#about'>About</a>
            </li>
            <li data-aos='fade-down' data-aos-delay='400'>
              <a href='#experience'>Experience</a>
            </li>
            <li data-aos='fade-down' data-aos-delay='600'>
              <a href='#projects'>Projects</a>
            </li>
            <li data-aos='fade-down' data-aos-delay='800'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav id='hamburger-nav'>
        <div class='logo'>John Doe</div>
        <div class='hamburger-menu'>
          <div class='hamburger-icon' onclick='toggleMenu()'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class='menu-links'>
            <li>
              <a href='#about' onclick='toggleMenu()'>
                About
              </a>
            </li>
            <li>
              <a href='#experience' onclick='toggleMenu()'>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' onclick='toggleMenu()'>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onclick='toggleMenu()'>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav> */}
    </div>
  );
}

export default Navbar;
