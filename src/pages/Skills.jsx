import React from "react";
import styles from "./Skills.module.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Nodejs",
  "MongoDb",
  "MySQL",
  "Git",
  "Responsive Design",
  "GitHub",
];

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading} data-aos="fade-right">
        Skills & Tools
      </h2>
      <div className={styles.grid} data-aos="zoom-in-up" data-aos-delay="200">
        {skills.map((skill, idx) => (
          <div className={styles.card} key={idx}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
