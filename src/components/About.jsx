import React, { useCallback } from "react";
import "./About.css";
function About() {
  // useCallback will ensure that the function handleLinkClick is created once and not recreated on every render of the About component
  const handleLinkClick = useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  const socialMedia = [
    {
      src: "./linkedin.png",
      alt: "My LinkedIn profile",
      url: "https://linkedin.com/",
      delay: 300,
    },
    {
      src: "./github.png",
      alt: "My Github profile",
      url: "https://github.com/",
      delay: 400,
    },
    {
      src: "./email.png",
      alt: "My Email",
      url: "mailto:anmol0711mittal@gmail.com",
      delay: 500,
    },
  ];
  return (
    <div data-aos='fade-zoom-in' data-aos-delay='200'>
      <section id='about'>
        <div class='h-holder'>
          <div class='line1'></div>
          <p className='section__text__p1'>Get To Know More</p>
          <div class='line2'></div>
        </div>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
          <div className='section__picContainer '>
            <img src='./Bitmoji1.png' alt='' />
          </div>
          <div className='text-container'>
            <h2>I'm Anmol </h2>
            <h4>Software Engineer</h4>
            <p className='aboutP'>
              I am a Software Engineer based in Mohali, India, and a Computer
              Science undergraduate from GNDEC. I am passionate about technology
              and learning new skills, and I am dedicated to on-time delivery.
              Being open-minded, I am always honest in admitting that I do not
              know everything. I take full responsibility for my mistakes
              instead of playing the blame game.
            </p>
            <div className='socials'>
              {socialMedia.map((social, index) => (
                <img
                  key={index}
                  data-aos='fade-up'
                  data-aos-delay={social.delay}
                  src={social.src}
                  alt={social.alt}
                  className='icons'
                  onClick={() => handleLinkClick(social.url)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div>
        <img
          data-aos='fade-up'
          data-aos-delay='600'
          className='arrow'
          src='./arrow.png'
          alt=''
          onClick={() => (window.location.href = "#skills")}
        />
      </div>
    </div>
  );
}

export default About;
