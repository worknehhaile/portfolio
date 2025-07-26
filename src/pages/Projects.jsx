import React, { useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "EQUB Management System",
    description:
      "A digital platform that automates traditional rotating savings and credit associations in Ethiopia.",
    tech: ["React", "CSS Modules", "Context API"],
    link: "https://github.com/your-username/equb-system",
    // preview: "/images/equb.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive, animated personal website built with React, showcasing my skills and projects.",
    tech: ["React", "AOS", "CSS Modules"],
    link: "https://your-portfolio.netlify.app",
    // preview: "/images/portfolio.png",
  },
  {
    title: "Job Posting Platform",
    description:
      "A job board admin panel with filtering, sorting, and status management features.",
    tech: ["React", "Modular CSS", "Pagination"],
    link: "https://github.com/your-username/job-posting-platform",
    // preview: "/images/job-posting.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading} data-aos="fade-right">
        Projects
      </h2>
      <div
        className={styles.content}
        data-aos="fade-up"
        data-aos-delay="200"
      ></div>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            className={styles.card}
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.tech}>
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <div className={styles.buttons}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <button onClick={() => openModal(project)}>Preview</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.preview} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <ul className={styles.tech}>
              {selectedProject.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
            <button className={styles.close} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
