import React from "react";
import "./Skills.css";

const languagesAndFrameworks = [
  { name: "C/C++", experience: "Experienced" },
  { name: "HTML", experience: "Experienced" },
  { name: "CSS", experience: "Experienced" },
  { name: "Bootstrap", experience: "Experienced" },
  { name: "JavaScript", experience: "Experienced" },
  { name: "React JS", experience: "Experienced" },
  { name: "Redux Toolkit", experience: "Experienced" },
  { name: "Express JS", experience: "Experienced" },
];

const toolsAndPlatforms = [
  { name: "VS Code", experience: "Experienced" },
  { name: "Git", experience: "Experienced" },
  { name: "Github", experience: "Experienced" },
  { name: "Unity Engine", experience: "Experienced" },
  { name: "Docker", experience: "Experienced" },
  { name: "Postman", experience: "Experienced" },
];

function SkillsSection({ title, skills }) {
  return (
    <div className='details-container'>
      <h2 className='skills-title'>{title}</h2>
      <div className='article-container'>
        {skills.map((skill) => (
          <article key={skill.name}>
            <img src='./checkmark.png' alt='Experience icon' class='icon' />
            <div>
              <h3>{skill.name}</h3>
              {/* <p>{skill.experience}</p> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <section id='skills'>
        <div data-aos='zoom-in' data-aos-delay='300' className='h-holder'>
          <div className='line1'></div>
          <p className='section__text__p1'>Explore My</p>
          <div class='line2'></div>
        </div>
        <h1 data-aos='fade-zoom-in' data-aos-delay='300' className='title'>
          Skills
        </h1>

        <div
          data-aos='zoom-in-up'
          data-aos-delay='500'
          className='skills-containers'
        >
          {/* Render skill sections by passing data dynamically */}
          <SkillsSection
            title='Languages & Frameworks'
            skills={languagesAndFrameworks}
          />
          <SkillsSection title='Tools & Platforms' skills={toolsAndPlatforms} />
        </div>
        <div>
          <img
            data-aos='fade-up'
            data-aos-delay='600'
            className='arrowskills'
            src='./arrow.png'
            alt=''
            onClick={() => (window.location.href = "#projects")}
          />
        </div>
      </section>
    </div>
  );
}

export default Skills;
