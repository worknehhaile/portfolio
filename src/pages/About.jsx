import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading} data-aos="fade-right">
          About Me
        </h2>
        <div className={styles.content} data-aos="fade-up" data-aos-delay="200">
          <p>
            I'm a passionate front-end developer with a dual background in
            Information Technology and Business Management. I specialize in
            creating responsive and interactive websites using HTML, CSS,
            JavaScript, and React.
          </p>
          <p>
            My mission is to build seamless digital experiences that are both
            visually appealing and user-friendly. I enjoy learning new
            technologies and continuously improving my skills.
          </p>
          <p>
            Outside of coding, I love reading tech blogs, helping others learn,
            and occasionally writing about development on social media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
