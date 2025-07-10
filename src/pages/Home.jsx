import React from "react";
import styles from "./Home.module.css";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <img src={profileImg} alt="Profile" className={styles.profileImage} />
        <h1>
          Hello, I'm <span className={styles.name}>Wokneh Haile</span>
        </h1>
        <h2 className={styles.typewriter}>A Front-End Developer</h2>
        <p>
          I build clean, responsive, and user-friendly web interfaces using
          HTML, CSS, JavaScript, and React.
        </p>

        <div className={styles.socials}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className={styles.buttons}>
          <a href="/projects" className={styles.cta}>
            View My Projects
          </a>
          <a href="/resume.pdf" className={styles.resume} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
