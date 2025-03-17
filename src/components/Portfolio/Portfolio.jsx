import React,  { useState, useEffect } from "react";
import styles from "./Portfolio.module.css";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Portfolio = () => {
  const images = [
    "./Jonathan.jpg",
    "./SHPE.JPG",
    "./NoPressure.jpg",
    "./ArmyPT.jpg",
    "./ArmyOCP.jpg",
    "./Presentation.jpg",
  ]; // Add your image paths

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.portfolio}>
      <Navbar />
      <Hero />

      <h2 className={styles.sectionTitle}>AbOuT Me</h2>

      <div className={styles.aboutContainer}>
        {/* Left Column: Slideshow */}
        <h2 className={styles.skillsTitle}>GeT tO KnOW Me</h2>
        <div className={styles.aboutSlideshow}>
          <img className={styles.aboutImage} src={images[currentImage]} alt="About Me" />
        </div>

        {/* Right Column: Description */}
        <div className={styles.aboutContent}>
          <p className={styles.aboutText}>
            Hi, I'm Jonathan. I am an Electrical and Computer Engineer dedicated to hard work,
              delivering results, and staying ahead through continuous learning
              and innovation. Alongside my role as an engineer, I also serve in
              the U.S. Army Reserves. In my free time, I enjoy spending time
              with my wife and our families, as well as running and lifting
              weights.
          </p>
        </div>
      </div>

  <div className={styles.skillsContainer}>
    <div className={styles.skillsRow}>
      <div className={styles.languagesColumn}>
        <h2 className={styles.skillsTitle}>SkILLs</h2>
        <h3 className={styles.skillsHeading}>Languages:</h3>
        <div className={styles.languageGrid}>
          {[
            { src: "./cpp.png", label: "C/C++" },
            { src: "./Python.png", label: "Python" },
            { src: "./Verilog.png", label: "Verilog" },
            { src: "./JS.png", label: "Javascript" },
            { src: "./HTML.png", label: "HTML" },
            { src: "./Css.png", label: "CSS" },
            { src: "./php.png", label: "PHP" },
          ].map(({ src, label }) => (
            <div key={label} className={styles.skillItem}>
              <img className={styles.skillIcon} src={src} alt={label} />
              <div className={styles.skillLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.toolsColumn}>
        <h3 className={styles.skillsHeading}>Simulation & Analysis Tools:</h3>
        <div className={styles.toolsGrid}>
          {[
            { src: "./MATLAB.png", label: "MATLAB" },
            { src: "./Simulink.png", label: "Simulink" },
          ].map(({ src, label }) => (
            <div key={label} className={styles.skillItem}>
              <img className={styles.skillIcon} src={src} alt={label} />
              <div className={styles.skillLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.additionalSkills}>
      <div className={styles.databaseSection}>
        <h3 className={styles.skillsHeading}>Database Management:</h3>
        <div className={styles.databaseGrid}>
          {[
            { src: "./SQL.png", label: "PostgreSQL" },
            { src: "./MySQL.png", label: "MySQL" },
          ].map(({ src, label }) => (
            <div key={label} className={styles.skillItem}>
              <img className={styles.skillIcon} src={src} alt={label} />
              <div className={styles.skillLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cadSection}>
        <h3 className={styles.skillsHeading}>Computer-Aided Design(CAD):</h3>
        <div className={styles.cadGrid}>
          {[
            { src: "./AltiumDesigner.png", label: "Altium Designer" },
            { src: "./orCAD.png", label: "Cadence" },
          ].map(({ src, label }) => (
            <div key={label} className={styles.skillItem}>
              <img className={styles.skillIcon} src={src} alt={label} />
              <div className={styles.skillLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.frameworksSection}>
      <h3 className={styles.skillsHeading}>Frameworks & Tools:</h3>
      <div className={styles.frameworksGrid}>
        {[
          { src: "./pyTorch.png", label: "PyTorch" },
          { src: "./TensorFlow.png", label: "Tensorflow" },
          { src: "./React.png", label: "ReactJs" },
          { src: "./Laravel.png", label: "Laravel PHP" },
        ].map(({ src, label }) => (
          <div key={label} className={styles.skillItem}>
            <img className={styles.skillIcon} src={src} alt={label} />
            <div className={styles.skillLabel}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <h2 className={styles.sectionTitle}>PRoJecTs</h2>

<div className={styles.projectsContainer}>
  {/* Closed-Loop Systems */}
  <h3 className={styles.projectTitle}>Development of Closed-Loop Systems:</h3>
  <div className={styles.projectImages}>
    {["MechVent.png", "ANFIS.png"].map((src, index) => (
      <img key={index} className={styles.projectImage} src={src} alt={`Project ${index + 1}`} />
    ))}
  </div>

  {/* Automated Mechanical Tourniquet */}
  <h3 className={styles.projectTitle}>Automated Mechanical Tourniquet</h3>
  <div className={styles.tourniquetImages}>
    <div className={styles.imageGroup}>
      {["PCB_aTkt 1.png", "PCB2.png", "20240425_095341 1.png", "20240425_095857 1.png"].map((src, index) => (
        <img key={index} className={styles.tourniquetImage} src={src} alt={`Tourniquet ${index + 1}`} />
      ))}
    </div>
  </div>

  {/* Machine Learning & Other Projects */}
  <div className={styles.projectRow}>
    {[
      { title: "Reinforcement Learning", src: "RL.png" },
      { title: "RISC-16bit Processor", src: "RISC.png" },
      { title: "ID Scanner w/ Passcode", src: "IDScanner.png" },
    ].map((project, index) => (
      <div key={index} className={styles.projectItem}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <img className={styles.uniformImage} src={project.src} alt={project.title} />
      </div>
    ))}
  </div>
</div>

      <div className={styles.exploreSection}>
        <div className={styles.exploreContent}>
          <h2 className={styles.exploreTitle}>ExPLoRe MoRe oN</h2>
          <img
            className={styles.exploreIcon}
            src="Github.png"
            alt="Explore"
          />
        </div>
        <span className={styles.exclamation}>!</span>
      </div>
          <div className={styles.contactInfo}>
            <h2 className={styles.thankYou}>ThAnK YoU!</h2>

            <div className={styles.contactItem}>
              <img
                className={styles.contactIcon}
                src="Mail.png"
                alt="Email"
              />
              <span>jamb2001@gmail.com</span>
            </div>

            <div className={styles.contactItem}>
              <img
                className={styles.contactIcon}
                src="Phone.png"
                alt="Phone"
              />
              <span>210-721-8766</span>
            </div>

            <div className={styles.contactItem}>
              <img
                className={styles.contactIcon}
                src="Linkedin.png"
                alt="LinkedIn"
              />
              <span>linkedin.com/in/jonathanmarrerobermudez/</span>
            </div>
          </div>
        </div>
  );
};

export default Portfolio;
