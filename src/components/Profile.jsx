import React from "react";
import "./Profile.css";
import ParticlesBackground from "./ParticlesBackground";
function Profile() {
  return (
    <div className='profilepage'>
      <section id='profile'>
        <ParticlesBackground id='tsparticles' />

        <div
          class='section__pic-container'
          data-aos='fade-right'
          data-aos-delay='1300'
        >
          <img src='./Bitmoji1.png' alt='' />
        </div>
        <div
          className='section__text'
          data-aos='fade-left'
          data-aos-delay='1300'
        >
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Anmol Mittal</h1>
          <p className='section__text__p2'>Frontend Developer</p>
          <div className='btn-container'>
            <button
              className='btn btn-color-2'
              onClick={() => (window.location.href = "#about")}
            >
              About Me
            </button>
            <button
              className='btn btn-color-1'
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
